import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const emailVolumeData = [
  { name: '2021', value: 319.6 },
  { name: '2022', value: 333.2 },
  { name: '2023', value: 347.3 },
  { name: '2024', value: 361.6 },
  { name: '2025', value: 376.4 },
  { name: '2026', value: 392.5 },
  { name: '2027', value: 408.2 },
];

const emailRevenueData = [
  { name: '2022', value: 9.62 },
  { name: '2023', value: 10.89 },
  { name: '2024', value: 12.33 },
  { name: '2025', value: 13.69 },
  { name: '2026', value: 15.81 },
  { name: '2027', value: 17.9 },
];

const roiData = [
    { name: 'U.S.', value: 40 },
    { name: 'U.K.', value: 45.32 },
    { name: 'E.U.', value: 43 },
];

const ChartWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-center text-purple-700">{title}</h3>
        <div className="w-full h-80">
            {children}
        </div>
    </div>
);


const DataCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="lg:col-span-2">
        <ChartWrapper title="Global Daily Email Volume (Billions)">
            <ResponsiveContainer>
                <BarChart data={emailVolumeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="name" stroke="#4b5563" />
                    <YAxis stroke="#4b5563" />
                    <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }} />
                    <Legend />
                    <Bar dataKey="value" name="Emails (Billions)" fill="#7e22ce" />
                </BarChart>
            </ResponsiveContainer>
        </ChartWrapper>
      </div>
      <ChartWrapper title="Email Marketing Revenue (Billions USD)">
        <ResponsiveContainer>
            <BarChart data={emailRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#4b5563" />
                <YAxis stroke="#4b5563" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }} />
                <Legend />
                <Bar dataKey="value" name="Revenue ($B)" fill="#f59e0b" />
            </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>
      <ChartWrapper title="ROI for every $1 spent">
        <ResponsiveContainer>
            <BarChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#4b5563" />
                <YAxis stroke="#4b5563" />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }} />
                <Legend />
                <Bar dataKey="value" name="Return on Investment ($)" fill="#4f46e5" />
            </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </div>
  );
};

export default DataCharts;