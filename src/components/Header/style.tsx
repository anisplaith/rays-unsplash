import styled from "styled-components"


export const Page = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
    font-family: 'Gloria Hallelujah', cursive;
    display: flex;
    flex: 1;
    height: 70px;
    padding: 0px 75px;
    justify-content: space-between;
    align-items: center;
    color: '#444444';
`

export const BoxRow = styled.div`
    font-family: 'Gloria Hallelujah', cursive;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    align-items: center;   
     
`
export const BoxColumn = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin: 0;
    padding-right: 7px;
    padding-top: 5px;

`

export const Title = styled.h2 `
    font-size: 16px;
    margin: 0;
    padding: 0;

`
export const Info = styled.p`
    font-size: 11px;
    margin: 0;
    padding: 0;
    


`
export const ButtonAdd = styled.button`
    font-family: 'Gloria Hallelujah', cursive;
    width: fit-content;
    text-align: center;
    padding: 15px;
    border: none;
    background-color: #6FEDD6;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }

`

