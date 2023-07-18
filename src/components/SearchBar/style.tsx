import styled from "styled-components";

export const Search = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
    font-family: 'Gloria Hallelujah', cursive;
    flex: 1;
    height: 38px;
    border-radius: 8px;
    border: none;
    &:focus-within{
        outline: #c6c6c6;
    }
    ::placeholder{
        color: #c6c6c6;
    }
`
export const BoxSearch = styled.div`
    display: flex;
    width: 280px;
    height: 40px;
    border-radius: 8px;
    margin-left: 30px;
    border: solid 1.5px #c6c6c6;
    align-items: center;    

`
export const Icon = styled.img`
    width: 20px;
    height: 20px;
    padding: 0px 15px;

`
