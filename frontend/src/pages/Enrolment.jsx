import React, { useMemo } from 'react';
import Layout from '../components/layout/Layout';
import CustomBarChart from '../components/charts/BarChart';
import { useDataLoader } from '../hooks/useDataLoader';
import { DATA_URLS } from '../utils/constants';
import { formatEnrolmentAgeData } from '../utils/dataFormatter';
import { Users, TrendingUp, Activity } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
            <Icon size={24} className="text-white" />
        </div>
    </div>
);

const Enrolment = () => {
    const { data, loading, error } = useDataLoader(DATA_URLS.ENROLMENT_AGE);

    const formattedData = useMemo(() => formatEnrolmentAgeData(data), [data]);

    if (loading) return <Layout title="Enrolment"><div className="p-10 text-center">Loading...</div></Layout>;
    if (error) return <Layout title="Enrolment"><div className="p-10 text-center text-red-500">Error: {error}</div></Layout>;

    return (
        <Layout title="Aadhaar Enrolment Analytics">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Enrolment" value="1.3 Billion+" icon={Users} color="bg-blue-500" />
                <StatCard title="Saturation" value="99.9%" icon={TrendingUp} color="bg-green-500" />
                <StatCard title="Daily Added" value="~50,000" icon={Activity} color="bg-purple-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h2 className="text-lg font-semibold text-slate-800 mb-4">Age-wise Distribution</h2>
                    <CustomBarChart data={formattedData} xKey="name" yKeys={['value']} />
                </div>

                {/* Placeholder for other charts as we only have age distribution json for enrolment related things specifically listed */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center min-h-[400px]">
                    <p className="text-slate-400">Additional enrolment metrics coming soon...</p>
                </div>
            </div>
        </Layout>
    );
};
export default Enrolment;
