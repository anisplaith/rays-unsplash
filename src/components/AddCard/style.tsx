import styled from "styled-components";

interface ButtonDisplay{
    display: any
}

export const Page = styled.div<ButtonDisplay>`
    @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
    font-family: 'Gloria Hallelujah', cursive;
    display: ${prop => prop.display? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #0000004c;
    z-index: 2;
    *border: solid red 2px;

`

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    height: 350px;
    background-color: white;
    border-radius: 10px;
    padding: 0px 29px ;
    margin: 0;

`

export const TitleInput = styled.p`
    display: flex;
    align-self: flex-start;
    color: #3b3b3b;
    
`
export const Title = styled.h2`
    padding: 0;
    margin: 0;
    color: #3b3b3b;

    
`

export const InputCard = styled.input`
    font-family: 'Gloria Hallelujah', cursive;
    width: 100%;
    height: 40px;
    padding: 0;
    margin: 0;
    border-radius: 5px;
    border: 2px solid #c6c6c6;
    outline: none;
    padding: 0px 10px ;
    &::placeholder{
        color: #c6c6c6;
    }
    
    
`

export const CancelButton = styled.button`
    font-family: 'Gloria Hallelujah', cursive;
    background-color: #c6c6c6;
    border: none;
    width: fit-content;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #e4e4e4;
    }

    
`
export const SubmitButton = styled.button`
    font-family: 'Gloria Hallelujah', cursive;
    background-color: #6FEDD6;
    border: none;
    width: fit-content;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: #aeeadf;
    }
`
export const ButtonBox = styled.div`
    display: flex;
    gap: 15px; // only works with display flex
    margin-top: 17px;
    margin-left: auto;
    
    
`

