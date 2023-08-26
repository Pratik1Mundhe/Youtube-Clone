import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-3 m-5 py-1 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button