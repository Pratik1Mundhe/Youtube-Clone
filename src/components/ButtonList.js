import React from 'react'
import Button from "./Button.js"

const list = ["All","Soccer","Gaming","Live","Cricket","Cooking","Soccer","Gaming","Live","Cricket"];

const ButtonList = () => {
  return (
    <div className='flex'>
      
      {
        list.map((item) => <Button name={item} />)
      }
      
      
    </div>
  )
}

export default ButtonList