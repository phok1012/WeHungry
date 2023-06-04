import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import MyReceipes from './MyReceipes';
import ThisWeekReceipes from './ThisWeekReceipes'
import ReceipeModal from './ReceipeModal'
import Loader from './Loader'
import ShoppingList from './ShoppingList'
import { useReceipes } from './Context';


function App() {

  const { tab } = useReceipes();

  return (
    <div>
      <ReceipeModal />
      <Loader />
      <ShoppingList />
      <Navbar/>
      <div id='DisplayContainer'>
        { tab === 'search' && <Search/>}
        { tab === 'save' && <MyReceipes/>}
        { tab === 'week' && <ThisWeekReceipes/>}
      </div>
    </div>
  );
}

export default App;
