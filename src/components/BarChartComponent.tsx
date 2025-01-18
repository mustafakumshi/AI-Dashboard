import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface BarChartComponentProps {
  data: Array<any>;
  xDataKey: string;
  yDataKey: string;
  title: string;
  fillColor: string;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data, xDataKey, yDataKey, title, fillColor }) => {
  return (
    <div className="chart">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={yDataKey} fill={fillColor} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
