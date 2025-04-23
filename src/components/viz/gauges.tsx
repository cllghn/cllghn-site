"use client";
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// GaugeChart component - modified to be fully circular with tooltip
const GaugeChart = ({ 
  value, 
  fillColor, 
  min = 0, 
  max = 100, 
  size = 200, 
  label = '',
  tooltipText = ''  // Added tooltipText prop
}) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const currentValue = Math.max(min, Math.min(value, max)); // Clamp value between min and max
    const width = size;
    const height = size;
    const outerRadius = width / 2.5;
    const innerRadius = outerRadius - 20;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Clear previous elements
    svg.selectAll('*').remove();
    
    // Create a div for the tooltip
    if (!document.getElementById('gauge-tooltip')) {
      const tooltipDiv = document.createElement('div');
      tooltipDiv.id = 'gauge-tooltip';
      tooltipDiv.style.position = 'absolute';
      tooltipDiv.style.visibility = 'hidden';
      tooltipDiv.style.backgroundColor = '#333';
      tooltipDiv.style.color = 'white';
      tooltipDiv.style.padding = '8px';
      tooltipDiv.style.borderRadius = '4px';
      tooltipDiv.style.fontSize = '14px';
      tooltipDiv.style.pointerEvents = 'none';
      tooltipDiv.style.zIndex = '10';
      tooltipDiv.style.maxWidth = '250px';
      document.body.appendChild(tooltipDiv);
    }
    
    const tooltip = d3.select('#gauge-tooltip');


    // Define arc generator for full circle
    const arcGenerator = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(0);

    // Add background arc (full circle)
    svg
      .append('path')
      .datum(max - min)
      .attr('d', () => arcGenerator.endAngle(2 * Math.PI)({}))
      .attr('fill', '#f0f0f0')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Add animated foreground arc
    const foreground = svg
      .append('path')
      .datum(0) // Start with 0
      .attr('fill', fillColor)
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    foreground
      .transition()
      .duration(1000) // 1 second animation
      .attrTween('d', function (d) {
        const interpolate = d3.interpolate(0, currentValue - min);
        return function (t) {
          const interpolatedValue = interpolate(t);
          return arcGenerator.endAngle((interpolatedValue / (max - min)) * 2 * Math.PI)({});
        };
      });
      
    // Add hover area for tooltip (invisible circle covering the gauge)
    if (tooltipText) {
      svg
        .append('circle')
        .attr('cx', width / 2)
        .attr('cy', height / 2)
        .attr('r', outerRadius)
        .attr('fill', 'transparent')
        .style('cursor', 'pointer')
        .on('mouseover', function(event) {
          tooltip
            .style('visibility', 'visible')
            .html(tooltipText)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 28) + 'px')
            .style("position", "absolute")
            .style("background", "#efeee8")
            .style("border", "1px solid #3b3b3b")
            .style("border-radius", "4px")
            .style("padding", "8px")
            .style("pointer-events", "none")
            .style("font-size", "12px")
            .style("color", "#3b3b3b");
        })
        .on('mousemove', function(event) {
          tooltip
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', function() {
          tooltip.style('visibility', 'hidden');
        });
    }

    // Add tick marks around the circle
    const tickData = d3.range(min, max + 1, 10); // Generate tick values
    const tickGroup = svg
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    tickData.forEach((tickValue) => {
      const angle = ((tickValue - min) / (max - min)) * 2 * Math.PI;
      const x1 = Math.cos(angle - Math.PI / 2) * (innerRadius - 5);
      const y1 = Math.sin(angle - Math.PI / 2) * (innerRadius - 5);
      const x2 = Math.cos(angle - Math.PI / 2) * (innerRadius - 10);
      const y2 = Math.sin(angle - Math.PI / 2) * (innerRadius - 10);

      tickGroup
        .append('line')
        .attr('x1', x1)
        .attr('y1', y1)
        .attr('x2', x2)
        .attr('y2', y2)
        .attr('stroke', '#999')
        .attr('stroke-width', 1);
    });

    // Add text for value with animation
    const textGroup = svg
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    textGroup
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '24px')
      .attr('font-weight', 'bold')
      .attr('class', 'gauge-text')
      .text(0) // Start with 0
      .transition()
      .duration(1000)
      .tween('text', function () {
        const interpolate = d3.interpolate(0, currentValue);
        return function (t) {
          d3.select(this).text(`${Math.round(interpolate(t))}%`);
        };
      });

    // Add label below the value
    if (label) {
      textGroup
        .append('text')
        .attr('y', 25) // Position below the value
        .attr('text-anchor', 'middle')
        .attr('font-size', '16px')
        .attr('font-weight', 'bold')
        .attr('class', 'gauge-text')
        .text(label);
    }
  }, [value, fillColor, min, max, size, label, tooltipText]);

  return <svg ref={svgRef} />;
};

// Main component that wraps gauge charts with responsive behavior
const ResponsiveGaugeCharts = () => {
  return (
    <div className="p-4">
      {/* For medium screens and up - all in a row */}
      <div className="hidden md:flex md:flex-row md:space-x-4 md:justify-center">
        <div className="flex flex-col items-center">
          <GaugeChart 
            value={80} 
            label="JS" 
            fillColor="#1192e8" 
            size={200} 
            tooltipText="JavaScript: ~80% proficiency. Primarily for frontend development, most of my experience is with React with Tailwind and MUI. However, I am always growing my skills. This is my newest language."
          />
        </div>
        <div className="flex flex-col items-center">
          <GaugeChart 
            value={90} 
            label="Python" 
            fillColor="#fa4d56" 
            size={200}
            tooltipText="Python: ~90% proficiency. My favorite language ever! I use it primarily for stats (e.g., Numpy, Scikit-learn), data management (e.g., Pandas), and software engineering (e.g., Django and Flask)."
          />
        </div>
        <div className="flex flex-col items-center">
          <GaugeChart 
            value={95} 
            label="R" 
            fillColor="#002d9c" 
            size={200}
            tooltipText="R: ~95% proficiency. My first programming language and the one that I've spent most of my career working with. I am pretty strong at statistical analysis, data visualization, and creating interactive applications (e.g., Shiny)."
          />
        </div>
        <div className="flex flex-col items-center">
          <GaugeChart 
            value={85} 
            label="SQL" 
            fillColor="#009d9a" 
            size={200}
            tooltipText="SQL: ~85% proficiency. The language that has been most useful for working with data 'in the wild'. I am familiar with PostgreSQL, MySQL, and SQL Server dialects."
          />
        </div>
      </div>
      
      {/* For small screens - 2x2 grid layout */}
      <div className="md:hidden">
        {/* Top row - first two charts */}
        <div className="flex flex-row justify-center space-x-4 mb-4">
          <div className="flex flex-col items-center">
            <GaugeChart 
              value={80} 
              label="JS" 
              fillColor="#1192e8" 
              size={140}
              tooltipText="JavaScript: 80% proficiency. Primary frontend development language with experience in React, Vue.js, and vanilla JS."
            />
          </div>
          <div className="flex flex-col items-center">
            <GaugeChart 
              value={90} 
              label="Python" 
              fillColor="#fa4d56" 
              size={140}
              tooltipText="Python: 90% proficiency. Used extensively for data analysis, machine learning, and backend development with Django and Flask."
            />
          </div>
        </div>
        
        {/* Bottom row - last two charts */}
        <div className="flex flex-row justify-center space-x-4">
          <div className="flex flex-col items-center">
            <GaugeChart 
              value={95} 
              label="R" 
              fillColor="#002d9c" 
              size={140}
              tooltipText="R: 95% proficiency. Expert-level skills in statistical analysis, data visualization with ggplot2, and creating interactive dashboards with Shiny."
            />
          </div>
          <div className="flex flex-col items-center">
            <GaugeChart 
              value={85} 
              label="SQL" 
              fillColor="#009d9a" 
              size={140}
              tooltipText="SQL: 85% proficiency. Strong database query optimization skills with experience in PostgreSQL, MySQL, and SQL Server."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveGaugeCharts;