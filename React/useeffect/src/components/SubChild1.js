import React, { useEffect } from 'react'

const SubChild1 = () => {

    useEffect(() => {
      alert("Subchild 1 rendered!")
    }, [])
    
  return (
    <div>
      SubChild1
    </div>
  )
}

export default SubChild1