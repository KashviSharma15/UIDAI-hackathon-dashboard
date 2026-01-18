import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { COLORS } from '../../utils/constants';

const CustomBarChart = ({ data, xKey, yKeys, height = 400, layout = 'horizontal', stacked = false }) => {
    return (
        <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-slate-100" style={{ height }}>
            <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart
                    data={data}
                    layout={layout}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis
                        type={layout === 'vertical' ? 'number' : 'category'}
                        dataKey={layout === 'horizontal' ? xKey : undefined}
                        tick={{ fill: '#64748B', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        type={layout === 'vertical' ? 'category' : 'number'}
                        dataKey={layout === 'vertical' ? xKey : undefined}
                        tick={{ fill: '#64748B', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        width={layout === 'vertical' ? 100 : 40}
                    />
                    <Tooltip
                        cursor={{ fill: '#F1F5F9' }}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend />
                    {yKeys.map((key, index) => (
                        <Bar
                            key={key}
                            dataKey={key}
                            fill={COLORS.chart[index % COLORS.chart.length]}
                            radius={stacked ? [0, 0, 0, 0] : [4, 4, 0, 0]}
                            animationDuration={1500}
                            stackId={stacked ? "a" : undefined}
                        />
                    ))}
                </RechartsBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomBarChart;
