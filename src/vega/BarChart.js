import React from 'react'
import { VegaLite } from 'react-vega'
import { useSelector } from 'react-redux';
export default function BarChart() {
    const state=useSelector(state=>state);
     let abc=[];
    let a= state.obj.array.map((ele)=>{
        let obj={date:ele.date,price:ele.amount};
        abc.push(obj);
        return obj;
     })
    const spec = {
        width: 500,
        height: 500,
        mark: {
            "type": "line",
            "point": true
          },
        encoding: {
            x: {"timeUnit": "month", "field": "date"},
            y: {"aggregate":"sum", "field": "price", "type": "quantitative"},
            // "color": {"field": "symbol", "type": "nominal"}
          },
        data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
      }
      const barData = {
        table:abc,
      //    [
   
      // { date: new Date(2020, 1, 14),price:100},
      // { date: new Date(2020, 2, 14),price:25},
      // { date: new Date(2020, 3, 14),price:10},
      // { date:new Date(2022,11,8),price:63},
      // { "date": new Date(2020, 0, 14),price:25},
      // {"date":new Date(),price:30},
      //   ],
      }
      
      return <VegaLite spec={spec} data={barData} />
}
