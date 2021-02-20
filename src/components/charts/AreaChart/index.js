import { useEffect, useState } from "react"
import * as d3 from 'd3';
const AreaChart = ({ data = [] }) => {
    useEffect(() => {
        addSVG()
    }, [])
    useEffect(() => {
        if (data)
            drawAreaChart()
    }, [data])
    const margin = { top: 50, right: 30, bottom: 40, left: 50 },
        width = 550 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;

    const x = d3.scalePoint(data.map(e => e.date), [0, width])
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => +d.score)])
        .range([height, 0]);

    const addXAxis = (svg) => {
        svg.select('#areaXAxis')
            .style("font-size", "0.9rem")
            .attr("transform", "translate(0," + (height + 10) + ")")
            .call(d3.axisBottom(x));
    }
    const addGradient = (svg) => {
        var defs = svg.select("defs");

        var gradient = defs.select("linearGradient")
            .attr("id", "svgGradient")
            .attr("x1", "0%")
            .attr("x2", "0%")
            .attr("y1", "20%")
            .attr("y2", "100%");

        gradient.append("stop")
            .attr('class', 'start')
            .attr("offset", "0%")
            .attr("stop-color", "#0976C7")
            .attr("stop-opacity", 1);

        gradient.append("stop")
            .attr('class', 'end')
            .attr("offset", "80%")
            .attr("stop-color", "#BBD9EF")
            .attr("stop-opacity", 1);
    }
    const addSVG = () => {
        d3.select(`#areachart`)
            .select('svg')
            .remove()
        var svg = d3.select("#areachart")
            .append("svg")
            .style('color', 'grey')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")")

        svg.append('g')
            .attr('id', 'areaXAxis')
        addXAxis(svg)
        svg.append("path")
            .attr('id', 'areaPath')
        svg.append("path")
            .attr('id', 'linePath')
        svg.append('g')
            .attr('id', 'valueLabels')
        svg.append("defs").append("linearGradient")
    }

    const drawAreaChart = () => {

        var svg = d3.select("#areachart")
            .select("svg")
        // Add X axis
        addXAxis(svg)
        addGradient(svg)
        svg.select("#areaPath")
            .datum(data)
            .attr("fill", "url(#svgGradient)")
            .attr("stroke", "none")
            .transition()
            .duration(750)
            .attr("d", d3.area()

                .curve(d3.curveMonotoneX)
                .x(function (d) { return x(d.date) })
                .y0(y(0))
                .y1(function (d) { return y(d.score) })
            )


        svg.select("#linePath")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#0071C5")
            .attr("stroke-width", 2.5)
            .transition()
            .duration(750)
            .attr("d", d3.line()
                .curve(d3.curveMonotoneX)
                .x(function (d) { return x(d.date) })
                .y(function (d) { return y(d.score) })
            )
        svg.selectAll("circle").remove()
        svg.selectAll("graphDots")
            .data(data)
            .enter()
            .append("circle")
            .attr("fill", "#0071C5")
            .attr("stroke", "white")
            .style("stroke-width", 2)
            .attr("cx", function (d) { return x(d.date) + 50 })
            .attr("cy", function (d) { return y(d.score) + 50 })
            .transition()
            .duration(1000)
            .attr("r", 6)

        svg.select('#valueLabels').selectAll('text').remove()
        svg.select('#valueLabels').selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .attr('font-size', '0.9rem')
            .attr('fill', 'grey')
            .attr("x", function (d) { return x(d.date) + 10 })
            .transition()
            .duration(750)
            .attr("y", function (d) { return y(d.score) - 10 })
            .text(function (d) { return d.score + '%' })
    }

    return <div id={`areachart`} style={{ marginTop: '20%' }} />
}
export default AreaChart