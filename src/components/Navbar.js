import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { useReceipes } from './Context';

const Navbar = () => {

  const {tab, setTab, setShowList, setSearch} = useReceipes();

  const searchStyle = tab === 'search' ? {textDecoration: 'underline'} : null;
  const saveStyle = tab === 'save' ? {textDecoration: 'underline'} : null;
  const weekStyle = tab === 'week' ? {textDecoration: 'underline'} : null;

  const clickSearch = () => {
    setTab('search')
    setSearch('')
  }

  const clickSave = () => {
    setTab('save')
  }

  const clickWeek = () => {
    setTab('week')
  }

  const clickList = () => {
    setShowList(true);
  }

  return (
    <div id='Navbar'>
      <h1 id='Logo'>we hungry</h1>
      <div className='Tabs' style={ searchStyle } onClick={clickSearch}>Search</div>
      <div className='Tabs' style={ saveStyle } onClick={clickSave}>Saved Recipes</div>
      <div className='Tabs' style={ weekStyle } onClick={clickWeek}>Cooking This Week</div>
      <FaShoppingCart id='Cart' onClick={clickList}/>
    </div>
  )
}

export default Navbar