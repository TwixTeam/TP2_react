import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {PieChart, Pie, Sector} from 'recharts';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent } = props;
  const value = parseInt(props.value, 10);
    
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Vote ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${percent}%)`}
      </text>
    </g>
  );
};

class CustomChart extends Component {
  constructor() {
    super();

    this.state = {
      activeIndex: 0,
    };
  }

  render() {
  	return (
    	<PieChart width={600} height={400}>
        <Pie 
          dataKey="value"
        	activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape} 
          data={this.props.choices}
          cx={300} 
          cy={120} 
          innerRadius={60}
          outerRadius={80} 
          fill="rgb(27, 71, 120)"
          onMouseEnter={this.onPieHover}
        />
      </PieChart>
    )
  }

  onPieHover = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  }
}

CustomChart.propTypes = {
  choices: PropTypes.array.isRequired
};

export default CustomChart;