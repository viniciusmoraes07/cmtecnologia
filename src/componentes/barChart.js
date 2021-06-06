import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function example(props){
  
    const data = [
        {
          name: 'Confir/Recuperados',
          Confirmados: props.confirmados,
          Casos: props.recuperados,
          
        },
        {
          name: 'Confir/Mortes',
          Confirmados: props.confirmados,
          Casos: props.mortos,
          
        },
        
      ];

   return (
     
        <BarChart
          width={400}
          height={360}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Confirmados" stackId="a" fill="#000080" />
          <Bar dataKey="Casos" stackId="b" fill="#008000" />
        </BarChart>
      
    );
  
}
