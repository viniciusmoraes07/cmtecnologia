
import React, {Component} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';



export default function SimpleLineChart (props){
  
  
    return (
      <LineChart
        
        width={640}
        height={203}
        data={props.data}
        margin={{top: 40, right: 30, left: 20, bottom: 5}}
        >
        <Line
          type='monotone'
          dataKey='Cases'
          stroke='#000080'
          strokeWidth={0.6}
          />
        {/* <CartesianGrid strokeDasharray='3 3'/> */}
        <Tooltip/>
        <YAxis/>
        <XAxis dataKey='Date'/>
        
      </LineChart>
    );
  }

