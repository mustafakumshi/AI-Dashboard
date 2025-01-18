import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface BarChartComponentProps {
  data: Array<any>;
  xDataKey: string;
  yDataKey: string;
  title: string;
  fillColor: string;
  isCartesian: boolean;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data, xDataKey, yDataKey, title, fillColor, isCartesian }) => {
  return (
    <div className="chart">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          {isCartesian && <CartesianGrid strokeDasharray="3 3" />}
          <Bar dataKey={yDataKey} fill={fillColor} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
