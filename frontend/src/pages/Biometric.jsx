import React, { useMemo, useState } from 'react';
import Layout from '../components/layout/Layout';
import CustomBarChart from '../components/charts/BarChart';
import { useDataLoader } from '../hooks/useDataLoader';
import { DATA_URLS } from '../utils/constants';
import { Fingerprint, ArrowUpRight } from 'lucide-react';

const Biometric = () => {
    const { data, loading, error } = useDataLoader(DATA_URLS.BIOMETRIC_CHILD_RATIO);
    const [filterState, setFilterState] = useState('');

    const formattedData = useMemo(() => {
        if (!data) return [];
        return data
            .map(item => ({
                state: item.state,
                "Child (5-17)": item.bio_age_5_17,
                "Adult (17+)": item.bio_age_17_,
                total: item.total_updates,
                childRatio: item.child_ratio
            }))
            .sort((a, b) => b.total - a.total) // Sort by total updates
            .slice(0, 15); // Top 15 states for readability
    }, [data]);

    if (loading) return <Layout title="Biometric Updates"><div className="p-10 text-center">Loading...</div></Layout>;
    if (error) return <Layout title="Biometric Updates"><div className="p-10 text-center text-red-500">Error: {error}</div></Layout>;

    return (
        <Layout title="Biometric Update Analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white text-opacity-90 shadow-lg">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-indigo-100 font-medium mb-1">Total Biometric Updates</p>
                            <h3 className="text-3xl font-bold text-white">45.2 Million</h3>
                        </div>
                        <div className="bg-white/20 p-2 rounded-lg">
                            <Fingerprint size={24} className="text-white" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-indigo-100 text-sm">
                        <ArrowUpRight size={16} />
                        <span>+12.5% from last month</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <p className="text-slate-500 text-sm mb-2">Insight</p>
                    <p className="text-slate-800 font-medium leading-relaxed">
                        Uttar Pradesh and Maharashtra contribute to over <span className="text-brand-600 font-bold">28%</span> of all biometric updates.
                        Child biometric updates (mandatory at age 5 & 15) drive <span className="text-brand-600 font-bold">~60%</span> of the volume.
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-slate-800">State-wise Biometric Updates (Child vs Adult)</h2>
                        <select
                            className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-500"
                            onChange={(e) => setFilterState(e.target.value)}
                        >
                            <option value="">Top 15 States</option>
                            {/* Could add state filtering logic here */}
                        </select>
                    </div>
                    <CustomBarChart
                        data={formattedData}
                        xKey="state"
                        yKeys={['Child (5-17)', 'Adult (17+)']}
                        stacked={true}
                        height={500}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Biometric;
