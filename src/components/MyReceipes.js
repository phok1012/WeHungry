import React from 'react'
import ReceipeList from './ReceipeList';
import { useReceipes } from './Context';
import { TbArrowBarLeft, TbArrowBarRight } from 'react-icons/tb';

const MyReceipe = () => {

  const {savedReceipes} = useReceipes();
  console.log(savedReceipes)

  return (
    <div>
      <ReceipeList receipeData={savedReceipes}/>
    </div>
  )
}

export default MyReceipe