import React from 'react'

const checkItem = ({ item }) => {
  return (
    <>
      <div className='checkBoxContainer'>
        <input className='checkBox' type='checkbox' />
        <div>{item.name} {Math.ceil(item.amount)} {item.unit}</div>
      </div>
    </>
  )
}

export default checkItem