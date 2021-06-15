import { PieChart, Pie, Cell, Tooltip, Legend, LabelList } from 'recharts';

import pieChartSvg from './PieChartSvg.module.scss';

const PieChartSvg = ({ parametersById }) => {
  const fill = i => {
    if (i) {
      return '#00C49F';
    } else {
      return '#0088FE';
    }
  };

  const formatTooltip = (_, __, props) => [
    props.payload.lastValue,
    props.payload.parameter,
  ];

  const formatLegend = (_, { payload }) =>
    `${payload.parameter} (${payload.unit})`;

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={parametersById}
        cx='50%'
        cy='50%'
        labelLine={false}
        fill='#8884d8'
        dataKey='lastValue'
        isAnimationActive={false}
      >
        {parametersById.map((_, i) => (
          <Cell key={`cell-${i}`} fill={fill(i)} />
        ))}
        <LabelList
          className={pieChartSvg.labelList}
          dataKey='lastValue'
          position='top'
        />
      </Pie>
      <Legend formatter={formatLegend} />
      <Tooltip formatter={formatTooltip} />
    </PieChart>
  );
};

export default PieChartSvg;
