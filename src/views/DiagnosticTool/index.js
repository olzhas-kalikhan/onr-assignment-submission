import { useEffect, useState } from 'react'
import { Container, ContentField, CardArea, LegendRow, Title, SubTitle, ContentSection, Legend, RadioField, ChartHeader, RadioButton } from './styles'
import * as data from '~/data.json'
import { IoGlobeOutline } from 'react-icons/io5'
import Card from '@components/Card'
import AreaChart from '@components/charts/AreaChart'
import { FaSquareFull } from 'react-icons/fa'
import { AiFillInfoCircle } from 'react-icons/ai'
const timePeriod = ['Day', 'Week', 'Month', 'Quarter', 'Half', 'Year']
const DiagnosticTool = () => {
    const [gaugeData, setGaugeData] = useState([])
    const [areaData, setAreaData] = useState([])
    const [selectedChart, setSelectedChart] = useState(0)
    const [prevSelection, setPrevSelection] = useState(0)
    const [metrics, setMetrics] = useState(0)
    const handleCardOnClick = (idx) => {
        setSelectedChart(prevState => {
            setPrevSelection(prevState);
            return idx
        })
    }
    useEffect(() => {
        //api calls through axios or fetch can be done instead
        setGaugeData(data.gaugeData)
        setAreaData(data.areaData)
    }, [data])
    return (
        <Container>
            <div>
                <Title>Performance Management</Title>
                <SubTitle><IoGlobeOutline size='2rem' /> Diagnostic Tool</SubTitle>
            </div>

            <ContentField>
                <ContentSection>
                    <div>
                        <h3>Filters</h3>
                        <Legend>
                            <LegendRow><FaSquareFull color='#0071C5' fontSize='0.7rem' /><h5>All CQA Results </h5><AiFillInfoCircle fontSize='1.2rem' color='grey' /></LegendRow>
                            <LegendRow><FaSquareFull color='#D7D7D7' fontSize='0.7rem' /><h5>CQAs with Closed Loop </h5><AiFillInfoCircle fontSize='1.2rem' color='grey' /></LegendRow>
                        </Legend>
                    </div>
                    <CardArea>
                        {gaugeData.map((element, i) =>
                            <Card key={i} criteria={element} idx={i} currentChart={selectedChart} selectChart={handleCardOnClick} />
                        )}
                    </CardArea>
                </ContentSection>
                <ContentSection>
                    <div>
                        <ChartHeader>
                            <h2>{Object.keys(areaData)[selectedChart]} Trend</h2>
                            <RadioField>
                                {timePeriod.map((p, i) =>
                                    <RadioButton key={i} active={metrics === i} onClick={() => setMetrics(i)}>{p}</RadioButton>
                                )}
                            </RadioField>
                        </ChartHeader>
                        <AreaChart data={areaData[Object.keys(areaData)[selectedChart]]} prevData ={areaData[Object.keys(areaData)[prevSelection]]}/>
                    </div>
                </ContentSection>
            </ContentField>
        </Container>
    )
}
export default DiagnosticTool