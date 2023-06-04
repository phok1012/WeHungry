import React from 'react';
import Card from './Card';


const Day = ({day, recipes}) => {
  return (
    <>
    <div className='day'>{day}</div>
    <div className='cardContainer'>
      <div> </div>
      {recipes.map(recipe => {
        return <Card recipe={recipe} key={recipe.id}/>
      })}
    </div>
    </>
  )
}

export default Day