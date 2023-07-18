import React from 'react';
import { BoxColumn, BoxRow, ButtonAdd, Icon, Info, Page, Title } from './style';
import icon from '../../assets/person.svg'
import SearchBar from '../SearchBar';

interface dataHeader{
    handleDisplay: any
    handleInput: any
}


export default function Header({handleDisplay, handleInput}: dataHeader){
    
    function clickButton(){
        handleDisplay(true)

    }

    function getSearch (search: string){ // get search from SearchBar
        const searchLowerCase = search?.toLowerCase()
        handleInput(searchLowerCase)

    }



    return (
        <Page>
            <BoxRow>
                <Icon src={icon} alt="ícone de pessoa" />
                <BoxColumn>
                    <Title>Ray's Unsplash</Title>
                    <Info>devChallenge.io</Info>
                </BoxColumn>
                <SearchBar
                    getSearch = {getSearch}
                
                />
                
                
            </BoxRow>
            
            <ButtonAdd 
                onClick={clickButton}
            >
                Add Photo
            </ButtonAdd> 
            
        </Page>

        
    )
}

