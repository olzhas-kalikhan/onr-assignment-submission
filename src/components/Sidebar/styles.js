import styled from "styled-components"
const SidebarArea = styled.div`
    background-color: #003C71;
    width: 3%;
    height: 100%;
    position: fixed;

`
const List = styled.ul`
    padding: 0;
    list-style-type: none;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top: 60px;
`
const ListItem = styled.li`
text-align: center;
    font-size: 2rem;
    color: white;
    background-color: ${props => props.active ? "#2A3778" : ""};
    border-bottom: solid 1px black;
    padding: 10px 0px;
    width: 100%;
    :hover{
        color: #0A1089;
        background-color:white;
    }

`
export { SidebarArea, List, ListItem }