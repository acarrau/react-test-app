import React from 'react';

const Widget = (props) => {
  return <div>
      <input type="text" onChange={props.update} />
      <h1>State text: {props.txt} </h1>
      <h1>Props cat value: {props.cat}</h1>
    </div>
}

export default Widget
