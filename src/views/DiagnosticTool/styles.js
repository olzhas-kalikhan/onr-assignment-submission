import { style } from 'd3'
import styled from 'styled-components'
const Container = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`
    padding: 0 15%;
    color: #555555;
`
const SubTitle = styled.h2`
    background-color:#EDECEC;
    color: #555555;
    width: 100%;
    padding: 10px 15%;
    display:flex;
    align-items: center;
`
const ContentField = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const ContentSection = styled.div`
    width: 38%;
`

const CardArea = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const ChartArea = styled.div`   
    
`
const Legend = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: solid 1px lightgrey;
    border-radius: 10px;
    height: 80px;
    width: 60%;
    margin: 5px;
`
const LegendRow = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
`
const RadioField = styled.div`
    display: flex;
    flex-wrap:wrap;
    align-items: center;
`
const RadioButton = styled.button`
    width: 60px;
    height: 40px;
    margin: 0 3px;
    font-weight:500;
    color: white;
    border-radius: 6px;
    border: solid 1px #0071C5;
    :hover{
        background-color:#04426F;
    }
    background-color: ${props => props.active ? '#04426F' : '#0071C5'};

`
const ChartHeader = styled.div`
    display: flex;
    justify-content: space-around;
`
export { Container, ContentField, CardArea, ChartArea, Title, SubTitle, ContentSection, Legend, RadioField, ChartHeader, RadioButton, LegendRow }