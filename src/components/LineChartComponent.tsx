import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface LineChartComponentProps {
  data: Array<any>;
  xDataKey: string;
  yDataKey: string;
  title: string;
  strokeColor: string;
  isCartesian: boolean;
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data, xDataKey, yDataKey, title, strokeColor, isCartesian }) => {
  return (
    <div className="chart">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          {isCartesian && <CartesianGrid strokeDasharray="3 3" />}
          <Line type="monotone" dataKey={yDataKey} stroke={strokeColor} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;