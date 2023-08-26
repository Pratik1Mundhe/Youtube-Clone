import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toggleMenu} from '../utils/appSlice'
import { Link } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {


  const searchCache = useSelector(store=> store.search);
  const [showSuggestions, setShowSuggestion] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
        //make api call afterevery keypress >200ms
      const timer =  setTimeout(() =>{
        if(searchCache[searchQuery])
        setSuggestions(searchCache[searchQuery]);
        else
        getSearchSuggestions();
      }, 200);

      

      return () => {
        clearTimeout(timer);
      }
  }, [searchQuery])

 


  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery] : json[1],
    }));
  }
  return (
    <div className='grid grid-flow-col p-1 m-2 shadow-lg'>
    <div className='flex col-span-3'>
        <img alt='ham' onClick={()=> toggleMenuHandler()} className='h-6 m-2 cursor-pointer' src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"/>
       <img alt='logo' className='h-12 m-2' src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"/>
    </div>

    <div className='col-span-10 px-10 content-center m-2'>
        <input type="text" value={searchQuery} onFocus={() => setShowSuggestion(true)} onBlur={() => setShowSuggestion(false)} onScroll={() => setShowSuggestion(false)} onChange={(e) => setSearchQuery(e.target.value)} className='px-5 search-input w-1/2 border w-[35rem] border-gray-400 p-2 rounded-l-full'/>
        <button className='search-btn fa fa-search border border-gray-400 p-2 rounded-r-full bg-gray-100'></button>
       { showSuggestions && (<div className='fixed bg-white py-2 px-5 w-[35rem] shadow-lg rounded-lg border border-gray-100' >
        <ul> 
          {suggestions.map((s) => (
              <li className='py-2 shadow-sm'>{s}</li>
          ))}
          
        
        </ul>
        </div>)}
    </div>

    <div className='col-span-1'>
        <img alt="user" className='w-10' src="https://freepngimg.com/thumb/youtube/62644-profile-account-google-icons-computer-user-iconfinder.png" />
    </div>
    </div>
  )
}

export default Head