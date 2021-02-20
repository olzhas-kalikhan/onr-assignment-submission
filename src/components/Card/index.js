import { CardField } from './styles'
import GaugeChart from '@components/charts/GaugeChart'
const Card = ({ criteria, idx, selectChart, currentChart }) => {
    return (
        <CardField onClick={() => selectChart(idx)} active={idx === currentChart}>
            <h4>{criteria.name}</h4>
            <GaugeChart data={criteria} outerRadius={58} innerRadius={50} idx={idx} active={idx === currentChart} />
            {`Sample: ${criteria.sample}`}
        </CardField>
    )
}
export default Card