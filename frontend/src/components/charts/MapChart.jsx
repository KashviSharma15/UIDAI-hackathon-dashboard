import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import { useDataLoader } from '../../hooks/useDataLoader';

const INDIA_GEOJSON_URL = 'https://raw.githubusercontent.com/geohacker/india/master/state/india_telengana.geojson';

const MapChart = ({ data, onStateClick, dataKey = "value" }) => {
    const [geoJsonData, setGeoJsonData] = useState(null);

    useEffect(() => {
        fetch(INDIA_GEOJSON_URL)
            .then(res => res.json())
            .then(data => setGeoJsonData(data))
            .catch(err => console.error("Failed to load GeoJSON", err));
    }, []);

    const getColor = (stateName) => {
        // Find value for the state from data
        const stateData = data.find(d => d.state?.toLowerCase() === stateName?.toLowerCase());
        const value = stateData ? stateData[dataKey] : 0;

        // Simple heatmap logic (customize based on data range)
        if (!stateData) return '#CBD5E1'; // slate-300

        // Determine color based on value (mock logic, needs refinement based on real range)
        // Assuming ratio 0-1 or counts
        // For counts, we might need a max value to normalize.

        // Quick Hack: hash string to color if no range? No, we need choropleth.
        // Let's use a simple scale if we know the max.
        // For now, I'll return a static brand color with varying opacity if I had max.
        // I'll make it dynamic enough:
        return '#0ea5e9'; // Brand-500
    };

    const getStyle = (feature) => {
        const stateName = feature.properties.NAME_1;
        const stateData = data.find(d => d.state?.toLowerCase() === stateName?.toLowerCase());

        // Opacity based on data value relative to max? 
        // Calculating max every time is slow, but assuming data passed is prepared.

        return {
            fillColor: getColor(stateName),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: stateData ? 0.7 : 0.2
        };
    };

    const onEachFeature = (feature, layer) => {
        const stateName = feature.properties.NAME_1;
        const stateData = data.find(d => d.state?.toLowerCase() === stateName?.toLowerCase());

        layer.on({
            mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                    weight: 2,
                    color: '#666',
                    dashArray: '',
                    fillOpacity: 0.9
                });
            },
            mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                    weight: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: stateData ? 0.7 : 0.2
                });
            },
            click: () => {
                if (onStateClick && stateData) {
                    onStateClick(stateData);
                }
            }
        });

        if (stateData) {
            layer.bindTooltip(`
            <div class="p-2">
                <strong>${stateName}</strong><br/>
                ${dataKey}: ${stateData[dataKey]}
            </div>
        `);
        } else {
            layer.bindTooltip(`<strong>${stateName}</strong><br/>No Data`);
        }
    };

    if (!geoJsonData) return <div className="h-full flex items-center justify-center">Loading Map...</div>;

    return (
        <div className="h-[600px] w-full bg-slate-50 rounded-xl overflow-hidden border border-slate-200 z-0">
            <MapContainer
                center={[22.5937, 78.9629]}
                zoom={4}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {data && (
                    <GeoJSON
                        data={geoJsonData}
                        style={getStyle}
                        onEachFeature={onEachFeature}
                    />
                )}
            </MapContainer>
        </div>
    );
};

export default MapChart;
