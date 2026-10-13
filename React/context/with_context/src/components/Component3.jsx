import React, { useContext } from 'react'
import { CountContext } from '../context/CountContext'

const Component3 = () => {
  const {count} = useContext(CountContext)
  return (
    <div>
      Hello {count}
    </div>
  )
}

export default Component3
