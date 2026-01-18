import React, { useMemo } from 'react';
import Layout from '../components/layout/Layout';
import CustomBarChart from '../components/charts/BarChart';
import CustomLineChart from '../components/charts/LineChart';
import { useDataLoader } from '../hooks/useDataLoader';
import { DATA_URLS } from '../utils/constants';
import { LayoutDashboard } from 'lucide-react';

const Demographic = () => {
    // We can load multiple datasets
    const monthlyData = useDataLoader(DATA_URLS.DEMOGRAPHIC_MONTHLY);
    const stateLoadData = useDataLoader(DATA_URLS.DEMOGRAPHIC_STATE_LOAD);

    const isLoading = monthlyData.loading || stateLoadData.loading;
    const error = monthlyData.error || stateLoadData.error;

    if (isLoading) return <Layout title="Demographic Updates"><div className="p-10 text-center">Loading...</div></Layout>;
    if (error) return <Layout title="Demographic Updates"><div className="p-10 text-center text-red-500">Error: {error}</div></Layout>;

    // We assume the data structure based on filename, but let's check properly later if needed. 
    // Usually raw JSON might need transformation.

    // transform monthly data (assuming it has date and value fields or similar)
    // Looking at file list earlier: demographic_monthly_adult_ratio.json
    // It likely has months and ratios.

    // transform state load data
    const topStateLoad = (stateLoadData.data || [])
        .sort((a, b) => b.count - a.count)
        .slice(0, 10)
        .map(item => ({
            state: item.state,
            "State Load": item.count || item.load // adjust key based on actual JSON
        }));

    return (
        <Layout title="Demographic Update Trends">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h2 className="text-lg font-semibold text-slate-800 mb-4">Monthly Adult Ratio Trend</h2>
                    <CustomLineChart
                        data={monthlyData.data || []}
                        xKey="month"
                        yKeys={['adult_ratio']}
                    />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h2 className="text-lg font-semibold text-slate-800 mb-4">Highest State Load (Demographic)</h2>
                    <CustomBarChart
                        data={topStateLoad}
                        xKey="state"
                        yKeys={['State Load']}
                        layout="vertical"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Demographic;
