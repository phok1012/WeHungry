import React from 'react'
import { useReceipes } from './Context'

const Loader = () => {

  const { loader } = useReceipes();

  return (
    <>
      {loader &&
      <>
        <div id='modalOverLay'/>
        <span id='loader' className="loader"></span>
      </>}
    </>
  )
}

export default Loader