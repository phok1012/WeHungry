import React, { createContext, useContext, useState} from 'react';

const receipeContext = createContext();

export function useReceipes() {
  return useContext(receipeContext)
}

export function ContextProvider({children}) {
  const [search, setSearch] = useState('');
  const [searchDisplay, setSearchDisplay] = useState([]);
  const [page, setPage] = useState(0);
  const [popOut, setPopOut] = useState(false);
  const [modalInfo, setModalInfo] = useState({})
  const [loader, setLoader] = useState(false);
  const [weeksReceipes, setWeeksReceipes] = useState({Monday:[], Tuesday:[], Wednesday:[], Thursday:[], Friday:[], Saturday:[], Sunday:[]})
  const [tab, setTab] = useState('search')
  const [left, setleft] = useState(0)
  const [showList, setShowList] = useState(false);
  const [shoppingList, setShoppingList] = useState({})
  const [count, setCount] = useState(0)
  const [savedReceipes, setSavedReceipes] = useState([])

  const values = {search, setSearch, searchDisplay, setSearchDisplay, page, setPage, popOut, setPopOut, modalInfo, setModalInfo, loader, setLoader, weeksReceipes, setWeeksReceipes, tab, setTab, left, setleft, showList, setShowList, shoppingList, setShoppingList, count, setCount, savedReceipes, setSavedReceipes}

  return (
    <receipeContext.Provider value={values}>
      {children}
    </receipeContext.Provider>
  )
}

