import styled from "styled-components";

export const Page = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
    font-family: 'Gloria Hallelujah', cursive;
    row-gap: none;
    flex: 1;
    margin: 0;
    

`

export const Box = styled.div` // código CSS que faz a disposição masonry
    columns: 4 350px;
    @media (min-width: 1300px max-width: 1800px) {
        margin-left: 2%;
        
    }
`
export const Photo = styled.img`
    width: 350px;
    padding: 30px;
    @media (min-width: 1800px) {
        width: 400px;
    }
    border-radius: 40px;

`

export const Label = styled.label`
    font-family: 'Gloria Hallelujah', cursive;
    display: none;
    margin: 0;
    width: 60%;
    height: auto;
    border-radius: 9px  0px 9px 0px;
    padding: 0;
    z-index: 1;
    position: absolute;
    margin: 30px;
    padding: 10px;
    color: #ffffff;
    background-color: #969696a5;
    overflow-wrap: break-word; 


`
export const BoxLabel = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
    &:hover{
        
        label{
            display: flex;
        }
        button{
            display: flex;
        }

    }
    
    

`

export const ButtonDelete = styled.button`
    font-family: 'Gloria Hallelujah', cursive;
    display: none;
    width: fit-content;
    text-align: center;
    padding: 10px;
    border: none;
    background-color: #fb6767;
    border-radius: 0px 0px 5px 5px;
    cursor: pointer;
    position: absolute;
    margin: 0;
    top: 30px;
    left: 75%;
    &:hover{
        background-color: #fa9b9b;
    }

`

