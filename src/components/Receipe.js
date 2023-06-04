import React, { useRef } from 'react'
import { useReceipes } from './Context'

const Receipe = ({receipe}) => {

  const { setModalInfo, setPopOut, weeksReceipes, setWeeksReceipes, count, setCount, savedReceipes, setSavedReceipes } = useReceipes()
  const day = useRef();
  const serving = useRef();

  const openReceipe = () => {
    setModalInfo(receipe);
    setPopOut(true);
  };

  const addToWeek = () => {
    let curDay = day.current.value
    let curServ = serving.current.value
    let curRecipe = {...receipe}
    curRecipe.servingSize = Number(curServ)
    let newSetOfRecipes = weeksReceipes[curDay].concat(curRecipe)
    weeksReceipes[curDay] = newSetOfRecipes
    setWeeksReceipes(weeksReceipes)
    serving.current.value = ''
    setCount(count+1)
  }

  const saveReceipe = () => {

    let payload = [...savedReceipes, receipe]
    setSavedReceipes(payload)
  }

  const checkIfSaved = () => {

    let boolean = false

    savedReceipes.forEach((savedReceipe) => {
      if (savedReceipe.id === receipe.id) {
        boolean = true;
        return;
      }
    })

    return boolean
  }

  return (
    <div className='receipeContainer' onClick={openReceipe}>
      <div className='Receipeimage' style={{backgroundImage: `url(${receipe.image})`}}/>
      <div className='ReceipeInfo'>
        <h1>{ receipe.title }</h1>
        <h3>preparation time: {receipe.preparationMinutes} minutes</h3>
        <h3>cooking time: {receipe.cookingMinutes} minutes</h3>
      </div>
      <div onClick={e => e.stopPropagation()} id='addToTheWeek'>
        <div id='choices'>
          <input id='servings' placeholder='servings' ref={serving}/>
          <select ref={day} >
            <option value='Monday'>Monday</option>
            <option value='Tuesday'>Tuesday</option>
            <option value='Wednesday'>Wednesday</option>
            <option value='Thursday'>Thursday</option>
            <option value='Friday'>Friday</option>
            <option value='Saturday'>Saturday</option>
            <option value='Sunday'>Sunday</option>
          </select>
        </div>
        <div id='buttons'>
          <button id='add' className='button' onClick={addToWeek}>Add To The Week</button>
          {
            checkIfSaved() ?
            <button id='save' className='savedbutton'disable>saved</button>
            :
            <button id='save' className='button'onClick={saveReceipe}>save</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Receipe