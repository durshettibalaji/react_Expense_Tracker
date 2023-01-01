import React from 'react'
import { useSelector } from 'react-redux';
// import ReactDOM from 'react-dom'
import { VegaLite } from 'react-vega'


// import React from 'react'

export default function Veg() {
  const state=useSelector(state=>state);
    const spec = {
        width: 600,
        height: 400,
        mark: 'arc',
        encoding: {
          theta: {"field": "value", "type": "quantitative"},
          color: {"field": "category", "type": "nominal"}
        },
        data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
      }
      
      const barData = {
        table: [
      {"category": "luxury", "value": state.obj.luxury},
      {"category": "Basic_needs", "value": state.obj.Basic_needs},
      {"category": "Self_development", "value": state.obj.self_development},
      {"category": "Undefined", "value": state.obj.undef},
        ],
      }
      
      
  return <VegaLite spec={spec} data={barData} />
  
  
}
