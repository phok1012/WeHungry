import React from 'react'
import { useReceipes } from './Context'

const ReceipeModal = () => {

  const { popOut, setPopOut, modalInfo}  = useReceipes();

  const close = () => {
    setPopOut(false)
  }

  return (
    <>
    {popOut &&
      <>
        <div id='modalOverLay' onClick={ close }/>
        <div id='receipeModal'>
          <h1>{modalInfo.title}</h1>
          <div> {modalInfo.summary} </div>
          <div id='modalImageContainer'>
              <div id='modalImage' style={{backgroundImage: `url(${modalInfo.image})`}}></div>
              <ul>
                {modalInfo.extendedIngredients.map(ingre => {
                  return <li key={ingre.id}>{ingre.name}, {ingre.amount} {ingre.unit} </li>
                })}
              </ul>
          </div>
          <h2>Instructions</h2>
          <div>{modalInfo.instructions}</div>
        </div>
      </>}
    </>
  )
}

export default ReceipeModal