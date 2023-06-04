import React from 'react';
import Receipe from './Receipe';
// import { useReceipes } from './Context';

const Receipelist = ({receipeData}) => {

  return (
    <>
      {receipeData.map(receipe =>
        <Receipe receipe={receipe} key={receipe.id} />
      )}
    </>
  )
}

export default Receipelist