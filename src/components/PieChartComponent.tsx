import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

interface PieChartComponentProps {
  data: Array<any>;
  dataKey: string;
  nameKey: string;
  title: string;
  colors: string[];
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data, dataKey, nameKey, title, colors }) => {
  return (
    <div className="chart">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey={dataKey} nameKey={nameKey} outerRadius={100}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;