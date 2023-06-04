import React from 'react'
import Day from './Day';
import { useReceipes } from './Context'

const ThisWeekReceipes = () => {

  const { weeksReceipes } = useReceipes()

  const keys = Object.keys(weeksReceipes)

  return (
    <div id='week'>
      {keys.map(day => {
        return <Day recipes={weeksReceipes[day]} day={day} key={day}/>
      })}
    </div>
  )
}

export default ThisWeekReceipes