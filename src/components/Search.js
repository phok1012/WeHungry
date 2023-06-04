import React, { useRef } from 'react';
import ReceipeList from './ReceipeList';
import { useReceipes } from './Context';
import please from '../request';
import { TbArrowBarLeft, TbArrowBarRight } from 'react-icons/tb';


const Search = () => {
  const searchInput = useRef('');
  const { search, setSearch, searchDisplay, setSearchDisplay, page, setPage, setLoader } = useReceipes();


  const onSearch = async () => {
    setLoader(true);
    let input = searchInput.current.value
    setSearch(input);
    let getID = await please.searchFor(input);
    let stringOfID = getID.data.map((item) => item.id).join()
    let results = await please.getInfoFor(stringOfID)
    setSearchDisplay(results.data);
    searchInput.current.value = '';
    setLoader(false);
  }

  const onEnter = async(e) => {
    if (e.key === 'Enter') {
      await onSearch()
    }
  }

  const nextPage = async() => {
    setLoader(true);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    let newPage = page + 1
    setPage(newPage)
    let getID = await please.searchFor(search, newPage);
    let stringOfID = getID.data.map((item) => item.id).join()
    let results = await please.getInfoFor(stringOfID)
    setSearchDisplay(results.data);
    setLoader(false);
  }

  const previousPage = async() => {
    setLoader(true);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    let newPage = page - 1;
    setPage(newPage)
    let getID = await please.searchFor(search, newPage);
    let stringOfID = getID.data.map((item) => item.id).join()
    let results = await please.getInfoFor(stringOfID)
    setSearchDisplay(results.data);
    setLoader(false);
  }

  return (
    <div id='Search' className='display'>
      <div id='SearchContainer'>
        <input id='searchInput' placeholder='typytee type type' onKeyDown={onEnter}ref={ searchInput } />
        <div id='search' className='button' onClick={onSearch}> Search </div>
      </div>
      { search ?
        <>
          <ReceipeList receipeData={searchDisplay}/>
          <div id='pageContainer'>
            {page === 0 ? null: <TbArrowBarLeft onClick = { previousPage }/> }
            <h1>{page}</h1>
            {searchDisplay.length < 10 ? null: <TbArrowBarRight onClick={nextPage}/>}
          </div>
        </>:
        <h1 style={{fontSize: '60px'}}> what chu trying to eat?</h1>
      }
    </div>
  )
}

export default Search