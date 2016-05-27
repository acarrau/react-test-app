import React from 'react';

const Widget = (props) => {
  return <div>
      <input type="text" onChange={props.update} />
      <h2>State text: {props.txt} </h2>
      <h2>Props cat value: {props.cat}</h2>
    </div>
}

export default Widget
