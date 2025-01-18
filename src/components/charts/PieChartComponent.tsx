import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';

interface PieChartComponentProps {
  data: Array<any>;
  dataKey: string;
  nameKey: string;
  title: string;
  colors: string[];
  innerRadius: number;
  outerRadius: number;
  paddingAngle?: number;
  customLabel?: (props: { name: string; percent: number }) => string;
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data, dataKey, nameKey, title, colors, innerRadius, outerRadius, paddingAngle, customLabel }) => {
  return (
    <div className="chart">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey={dataKey} nameKey={nameKey} innerRadius={innerRadius} outerRadius={outerRadius} paddingAngle={paddingAngle} labelLine={false} label={customLabel}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;