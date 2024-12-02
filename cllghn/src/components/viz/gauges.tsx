'use client';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const GaugeChart = ({ value, fillColor, min = 0, max = 100, size = 200, label = '' }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        const currentValue = Math.max(min, Math.min(value, max)); // Clamp value between min and max
        const width = size;
        const height = size / 2;
        const outerRadius = width / 2;
        const innerRadius = outerRadius - 20;

        const svg = d3
            .select(svgRef.current)
            .attr('width', width)
            .attr('height', height);

        // Clear previous elements
        svg.selectAll('*').remove();

        // Add arc generator
        const arcGenerator = d3
            .arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(-Math.PI / 2);

        // Add background arc
        svg
            .append('path')
            .datum(max - min)
            .attr('d', arcGenerator.endAngle(Math.PI / 2))
            .attr('fill', '#fffff7')
            .attr('transform', `translate(${width / 2}, ${height})`);

        // Add animated foreground arc
        const foreground = svg
            .append('path')
            .datum(0) // Start with 0
            .attr('fill', `${fillColor}`)
            .attr('transform', `translate(${width / 2}, ${height})`);

        // Animate the arc
        foreground
            .transition()
            .duration(1000) // 1 second animation
            .attrTween('d', function (d) {
                const interpolate = d3.interpolate(d, currentValue - min);
                return function (t) {
                    d = interpolate(t);
                    return arcGenerator.endAngle((d / (max - min)) * Math.PI - Math.PI / 2)();
                };
            });

        // Add tick marks inside the foreground arc
        const tickData = d3.range(min, max + 1, 10); // Generate tick values
        const tickGroup = svg
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height})`);

        tickData.forEach((tickValue) => {
            const angle = ((tickValue - min) / (max - min)) * Math.PI - Math.PI / 2;
            const x1 = Math.cos(angle) * (innerRadius + 5); // Place ticks inside the foreground arc
            const y1 = Math.sin(angle) * (innerRadius + 5);
            const x2 = Math.cos(angle) * (innerRadius + 15); // Longer ticks inside
            const y2 = Math.sin(angle) * (innerRadius + 15);

            tickGroup
                .append('line')
                .attr('x1', x1)
                .attr('y1', y1)
                .attr('x2', x2)
                .attr('y2', y2)
                .attr('stroke', '#fffff7') // Tick color
                .attr('stroke-width', 2);
        });

        // Add text for value with animation
        const textGroup = svg
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 1.2})`);

        textGroup
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('font-size', '18px')
            .attr('class', 'gauge-text')
            .text(0) // Start with 0
            .transition()
            .duration(1000)
            .tween('text', function () {
                const interpolate = d3.interpolate(0, currentValue);
                return function (t) {
                    d3.select(this).text(Math.round(interpolate(t)) + '%');
                };
            });

        // Add label below the value
        if (label) {
            textGroup
                .append('text')
                .attr('y', -20) // Position below the value
                .attr('text-anchor', 'middle')
                .attr('font-size', '24px')
                .attr('class', 'gauge-text')
                .text(label);
        }
    }, [value, min, max, size, label]);

    return <svg ref={svgRef} />;
};

export default GaugeChart;
