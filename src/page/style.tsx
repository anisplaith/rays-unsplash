import styled from "styled-components";

interface FixPage {
    fixed?: boolean
}

export const Page = styled.div<FixPage>`
    width: 100%;
    margin: 0;
    padding: 0;
    position: ${prop => prop.fixed? 'fixed': 'relative'};
    *border: solid 2px blue;
    
`
