import styled from "styled-components";

interface PageProp{
    displayDelete: boolean
}

export const Page = styled.div<PageProp>`
    @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
    font-family: 'Gloria Hallelujah', cursive;
    display: ${prop => prop.displayDelete? 'flex': 'none'}; 
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #0000004c;
    z-index: 2;
`

export const DeleteButton = styled.button`
    font-family: 'Gloria Hallelujah', cursive;
    background-color: #fb6767;
    border: none;
    width: fit-content;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`