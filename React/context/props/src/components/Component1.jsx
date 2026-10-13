import React from 'react'
import Component2 from './Component2'

const Component1 = ({count}) => {
  return (
    <div>
    <Component2 count={count}/>
    </div>
  )
}

export default Component1
