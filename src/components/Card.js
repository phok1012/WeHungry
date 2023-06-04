import React from 'react';
import { useReceipes } from './Context'

const card = ({recipe}) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setModalInfo, setPopOut } = useReceipes()

  const openReceipe = () => {
    setModalInfo(recipe);
    setPopOut(true);
  };

  const style = {backgroundImage: `url(${recipe.image})`}

  return (
    <div className='card' style={style} onClick={openReceipe}>
      <div className='cardInfo'>{recipe.title} Serving : {recipe.servingSize}</div>
    </div>
  )
}

export default card