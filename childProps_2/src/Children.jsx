import React from 'react'

function Children(props) {
  return (
    <div style={{border:"1px solid red", padding: "20px", height:"auto", margin: "12px"}}>
        {props.children}
    </div>
  )
}

export default Children
