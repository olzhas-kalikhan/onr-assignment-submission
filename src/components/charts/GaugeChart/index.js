import React, { useEffect } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components'

const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

function GaugeChart({ data, outerRadius, innerRadius, idx, active }) {
    const chartId = `pie-container-${idx}`
    const margin = {
        top: 40, right: 0, bottom: 0, left: 0,
    };
    const width = 2 * outerRadius + margin.left + margin.right
    const height = 2 * outerRadius + margin.top + margin.bottom
    const colorScale = d3.scaleQuantize()
        .domain([0, 1])
        .range([active ? '#00AEEF' : '#0071C5', '#D7D7D7'])

    const drawChart = () => {
        d3.select(`#${chartId}`)
            .select('svg')
            .remove()
        const svg = d3
            .select(`#${chartId}`)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`)

        const arcGenerator = d3
            .arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)

        const pieGenerator = d3
            .pie()
            .padAngle(0)
            .value((d) => d.score);

        const arc = svg
            .selectAll()
            .data(pieGenerator([data, { score: 100 - data.score }]))
            .enter()

        // Append arcs
        arc
            .append('path')
            .attr('d', arcGenerator)
            .style('fill', (_, i) => colorScale(i))
            .style('stroke', '#ffffff')
            .style('stroke-width', 0)

        svg.append("text")
            .attr("text-anchor", "middle")
            .style('fill', '#0071C5')
            .attr('font-weight', '500')
            .style('font-size', '1.3rem')
            .text(`${data.score}%`);

    }
    useEffect(() => {
        drawChart()
    }, [data])

    useEffect(() => {
        d3.select(`#${chartId}`)
            .select('svg').select('path')
            .style('fill', (_, i) => colorScale(i))
    }, [active, chartId, colorScale])

    return <SvgContainer id={chartId} />

}

export default GaugeChart;