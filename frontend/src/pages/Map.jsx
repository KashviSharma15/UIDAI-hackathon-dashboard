import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import MapChart from '../components/charts/MapChart';
import { useDataLoader } from '../hooks/useDataLoader';
import { DATA_URLS } from '../utils/constants';

const MapPage = () => {
    // We can show biometric or demographic data on the map.
    // Let's toggle between them? Or just pick one main metric.
    // Using biometric child ratio is interesting.

    const { data: bioData, loading, error } = useDataLoader(DATA_URLS.BIOMETRIC_CHILD_RATIO);
    const [selectedState, setSelectedState] = useState(null);

    return (
        <Layout title="Geographic Insights">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
                <div className="lg:col-span-2">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 h-full">
                        <h2 className="text-lg font-semibold text-slate-800 mb-4 px-2">India Map - Biometric Child Ratio</h2>
                        {loading && <div>Loading Data...</div>}
                        {!loading && bioData && (
                            <MapChart
                                data={bioData}
                                dataKey="child_ratio"
                                onStateClick={setSelectedState}
                            />
                        )}
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-24">
                        <h2 className="text-lg font-semibold text-slate-800 mb-4">State Details</h2>

                        {selectedState ? (
                            <div className="space-y-4">
                                <div className="p-4 bg-brand-50 rounded-lg border border-brand-100">
                                    <p className="text-sm text-brand-600 font-medium">Selected State</p>
                                    <p className="text-2xl font-bold text-slate-800">{selectedState.state}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-slate-50 rounded-lg">
                                        <p className="text-xs text-slate-500">Child Ratio</p>
                                        <p className="text-lg font-semibold text-slate-800">{selectedState.child_ratio?.toFixed(3)}</p>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-lg">
                                        <p className="text-xs text-slate-500">Total Updates</p>
                                        <p className="text-lg font-semibold text-slate-800">{selectedState.total_updates?.toLocaleString()}</p>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-lg">
                                        <p className="text-xs text-slate-500">Child (5-17)</p>
                                        <p className="text-lg font-semibold text-slate-800">{selectedState.bio_age_5_17?.toLocaleString()}</p>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-lg">
                                        <p className="text-xs text-slate-500">Adult (17+)</p>
                                        <p className="text-lg font-semibold text-slate-800">{selectedState.bio_age_17_?.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-10 text-slate-400">
                                <p>Click on a state in the map to view detailed metrics.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MapPage;
