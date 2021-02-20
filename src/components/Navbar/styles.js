import styled from 'styled-components'
const NavbarArea = styled.div`
    background-color:#0071C5;
    display:flex;
    align-items:center;
    width: 100%;
    height: 8%;

`
const Title = styled.h2`
    justify-self: flex-start;
    color:white;
    margin: 0 50px;
    width: 58%;
`
const Menu = styled.ul`
    display:flex;
    justify-content: space-around;
    justify-self: flex-end;
    padding: 0;
    list-style-type: none;
    width: 20%;
    
`
const MenuItem = styled.li`
    color: white;
    font-size: 1.5rem;
`
const Log = styled.h5`
    justify-self:flex-end;
    color: #7CB6E1;
    border-right: solid 1px #7CB6E1;
    padding-right: 10px;
`

export { NavbarArea, Title, Menu, MenuItem, Log }