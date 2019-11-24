import React, { StatelessComponent } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

interface BarChartComponentProps {
    chartData: any;
};

export const BarChartComponent: StatelessComponent<BarChartComponentProps> = ({chartData}) => {
    return (
        <ResponsiveContainer width="90%" height={300}>
            <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="black" />
            </BarChart>
        </ResponsiveContainer>
    );
};