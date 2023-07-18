import React, { useState } from 'react';
import AddCard from '../components/AddCard';
import { DeleteCard } from '../components/DeleteCard';
import Header from '../components/Header';
import PhotosList from '../components/PhotosList';
import { Page } from './style';


function App() {
  
  // 23/11 - 23/12

  const [displayAddCard, setDisplayAddCard] = useState<boolean>(false);
  const [displayDeleteCard, setDisplayDeleteCard] = useState<boolean>(false);
  const [id, setId] = useState<number>();
  const [change, setChange] = useState<any>();
  const [searchValue, setSearchValue] = useState<any>()


  // control the App and AddCard display. Get values from Header and AddCard
  function updateDisplayAdd (display:boolean){ 
    setDisplayAddCard(display);
  }

  function updateDisplayDelete (display:boolean){ 
    setDisplayAddCard(false)
    setDisplayDeleteCard(display);
  }
  
  function getId (id: number){
    setId(id);
  }

  function changeUp (change: string){ // update the PhotosList when add a or delete a photo
    setChange(change)
  }

  function getSearch (search: string){ // get the search from Header and filter the photos
    setSearchValue(search)
  }
  
  

  return (
    <Page fixed = {displayAddCard || displayDeleteCard}> 
      <AddCard 
        display = {displayAddCard}  // display of AddCard
        handleDisplay = {updateDisplayAdd} // cancel button 
        getChange = {changeUp} // get the change when add a photo

      /> 
      <DeleteCard 
        displayDeleteInfo = {displayDeleteCard} // display of DeleteCard
        setDisplayDelete = {updateDisplayDelete} // for cancel button
        id = {id} // give the photo id to delete
        getChange = {changeUp} // get the change when delete a photo

      />
      <Header 
        handleDisplay = {updateDisplayAdd}
        handleInput = {getSearch}
      />
      <PhotosList 
        handleDisplay = {updateDisplayDelete}
        getId = {getId} // get the photo id to delete
        getChange = {change} 
        search = {searchValue}

      
      />
            
    </Page>

  );
}

export default App;
