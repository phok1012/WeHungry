/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import { useReceipes } from './Context'
import CheckItem from './CheckItem'

const shoppingList = () => {

  const { weeksReceipes, showList, setShowList, shoppingList, setShoppingList, count } = useReceipes();
  let values = Object.values(weeksReceipes)

  useEffect (() => {
    let listAmount = {}
    values.forEach( day => {
      day.forEach(recipe => {
        let serving = recipe.servingSize
        let num = recipe.servings
        recipe.extendedIngredients.forEach( ingredient => {
          let curAmount = (ingredient.amount / num) * serving
          if (listAmount[ingredient.id]) {
            let newAmount = listAmount[ingredient.id].amount + curAmount
            listAmount[ingredient.id].amount = newAmount
          } else {
            listAmount[ingredient.id] = {
              name: ingredient.name,
              amount: curAmount,
              unit: ingredient.unit
            }
          }
        })
      })
    })
    setShoppingList(listAmount)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  let keys = Object.keys(shoppingList)

  const onClose = () => {
    setShowList(false)
  }

  return (
    <>
      {showList &&
      <>
        <div id='modalOverLay' onClick={onClose}/>
        <div id='shoppingList'>
          { keys.map( key =>
            <CheckItem item={ shoppingList[key] } />
          )}
        </div>
      </>}
    </>
  )
}

export default shoppingList