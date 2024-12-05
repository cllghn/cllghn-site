'use client'
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const RadarChart = () => {
    const chartRef = useRef();

    useEffect(() => {
        // Data: Each language with values for each metric
        const data = [
            {
                language: "JS",
                metrics: [
                    { axis: "Database Management", value: 0.25 },
                    { axis: "Data Visualization", value: 0.99 },
                    { axis: "Data Wrangling", value: 0.7 },
                    { axis: "Statistics", value: 0.25 },
                    { axis: "Machine Learning", value: 0.1 }
                ]
            },
            {
                language: "Python",
                metrics: [
                    { axis: "Database Management", value: 0.85 },
                    { axis: "Data Visualization", value: 0.8 },
                    { axis: "Data Wrangling", value: 0.9 },
                    { axis: "Statistics", value: 0.8 },
                    { axis: "Machine Learning", value: 0.85 }
                ]
            },
            {
                language: "R",
                metrics: [
                    { axis: "Database Management", value: 0.9 },
                    { axis: "Data Visualization", value: 0.95 },
                    { axis: "Data Wrangling", value: 0.99 },
                    { axis: "Statistics", value: 0.85 },
                    { axis: "Machine Learning", value: 0.7 }
                ]
            },
            {
                language: "SQL",
                metrics: [
                    { axis: "Database Management", value: 1.0 },
                    { axis: "Data Visualization", value: 0.0 },
                    { axis: "Data Wrangling", value: 0.85 },
                    { axis: "Statistics", value: 0.5 },
                    { axis: "Machine Learning", value: 0.0 }
                ]
            }
        ];

        // Clear previous chart (if any)
        d3.select(chartRef.current).selectAll("*").remove();

        // Chart dimensions
        const width = 500, height = 500;
        const margin = 75;
        const radius = Math.min(width, height) / 2 - margin;

        // Scales
        const angleSlice = (Math.PI * 2) / data[0].metrics.length;
        const rScale = d3.scaleLinear().range([0, radius]).domain([0, 1]);

        // Colors
        const colorScale = d3.scaleOrdinal()
            .domain(data.map(d => d.language))
            .range(["#1192e8", "#fa4d56", "#002d9c", "#009d9a"]);

        // Append SVG
        const svg = d3.select(chartRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);

        // Create tooltip element
        const tooltip = d3.select(chartRef.current)
            .append("div")
            .style("position", "absolute")
            .style("background", "#efeee8")
            .style("border", "1px solid #3b3b3b")
            .style("border-radius", "4px")
            .style("padding", "8px")
            .style("visibility", "hidden")
            .style("pointer-events", "none")
            .style("font-size", "12px")
            .style("color", "#3b3b3b");

        // Draw circular grid
        const levels = 10;
        for (let i = 0; i < levels; i++) {
            svg.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", (i + 1) * radius / levels)
                .attr("stroke", "#3b3b3b")
                .attr("fill", "none")
                .attr("stroke-dasharray", "2 2");
        }

        // Add axis lines and labels
        data[0].metrics.forEach((metric, i) => {
            const angle = angleSlice * i;
            const lineCoord = { x: rScale(1) * Math.sin(angle), y: rScale(1) * -Math.cos(angle) };
            console.log(lineCoord)
            svg.append("line")
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("x2", lineCoord.x)
                .attr("y2", lineCoord.y)
                .attr("stroke", "#3b3b3b");

            const labelCoord = { x: rScale(1.1) * Math.sin(angle), y: rScale(1.1) * -Math.cos(angle) };
            const labelParts = metric.axis.split(" "); // Split label into parts

            const text = svg.append("text")
                .attr("x", labelCoord.x)
                .attr("y", labelCoord.y)
                .attr("text-anchor", angle > Math.PI ? "end" : "start") // Adjust based on quadrant
                .attr("alignment-baseline", "middle")
                .style("font-size", "12px")
                .style("fill", "#3b3b3b");

            text.selectAll("tspan")
                .data(labelParts)
                .enter()
                .append("tspan")
                .attr("x", labelCoord.x)
                .attr("dy", (d, j) => j === 0 ? 0 : "1.2em")
                .text(d => d);
        });


        // Add data series
        const line = d3.lineRadial()
            .radius(d => rScale(d.value))
            .angle((d, i) => i * angleSlice)
            .curve(d3.curveCardinalClosed);

        const paths = svg.selectAll(".data-path")
            .data(data)
            .enter()
            .append("path")
            .attr("class", d => `data-path ${d.language}`)
            .attr("d", d => line(d.metrics))
            .style("fill", "none")
            // .style("fill", d => colorScale(d.language))
            // .style("fill-opacity", 0.1)
            .style("stroke", d => colorScale(d.language))
            .style("stroke-width", 3);

        // Add points for each value in the series
        data.forEach(languageData => {
            svg.selectAll(`.point-${languageData.language}`)
                .data(languageData.metrics)
                .enter()
                .append("circle")
                .attr("class", `point-${languageData.language} point`)
                .attr("cx", (d, i) => rScale(d.value) * Math.sin(angleSlice * i))
                .attr("cy", (d, i) => rScale(d.value) * -Math.cos(angleSlice * i))
                .attr("r", 4)
                .style("fill", colorScale(languageData.language))
                .style("stroke", "#fffff7")
                .style("stroke-width", 1)
                // Add tooltip and opacity interactions for points
                .on("mouseover", function (event, d) {
                    svg.selectAll(".data-path").style("opacity", 0.2);
                    d3.selectAll(".point").style("opacity", 0.2);
                    d3.select(event.currentTarget).style("opacity", 1);
                    tooltip
                        .html(`<strong>${languageData.language}</strong><br>${d.axis}: ${(d.value * 100).toFixed(0) + "%"}`)
                        .style("visibility", "visible");
                })
                .on("mousemove", (event) => {
                    tooltip
                        .style("top", `${event.pageY + 10}px`)
                        .style("left", `${event.pageX + 10}px`);
                })
                .on("mouseout", () => {
                    svg.selectAll(".data-path").style("opacity", 1);
                    d3.selectAll(".point").style("opacity", 1);
                    tooltip.style("visibility", "hidden");
                });
        });
        // Tooltip interaction
        paths
            .on("mouseover", (event, d) => {
                // Dim other paths
                paths.style("opacity", 0.2);
                d3.select(event.currentTarget).style("opacity", 1);
                // Dim other points
                svg.selectAll('.point').style("opacity", 0.2);
                svg.selectAll(`.point-${d.language}`).style("opacity", 1);

                tooltip
                    .html(`<strong>${d.language}</strong>
                           <br>
                            ${d.metrics.map(m => `${m.axis}: ${(m.value * 100).toFixed(0) + "%"}`).join("<br>")}`)
                    .style("visibility", "visible");
            })
            .on("mousemove", (event) => {
                tooltip
                    .style("top", `${event.pageY + 10}px`)
                    .style("left", `${event.pageX + 10}px`);
            })
            .on("mouseout", () => {
                // Reset opacity
                paths.style("opacity", 1);
                d3.selectAll(".point").style("opacity", 1);
                tooltip.style("visibility", "hidden");
            });

        // Add legend
        const legend = svg.append("g").attr("transform", `translate(${-width / 2 + margin}, ${-height / 2 + margin})`);
        data.forEach((languageData, i) => {
            legend.append("circle")
                .attr("cx", 0)
                .attr("cy", i * 15)
                .attr("r", 5)
                .style("fill", colorScale(languageData.language))
                .style("cursor", "pointer")
                .on("click", () => toggleVisibility(languageData.language));

            legend.append("text")
                .attr("x", 10)
                .attr("y", i * 15 + 5)
                .text(languageData.language)
                .attr("alignment-baseline", "middle")
                .attr("class", `legend-text ${languageData.language}`)
                .style("font-size", "12px")
                .style("cursor", "pointer")
                .style("fill", "#3b3b3b")
                .on("click", () => toggleVisibility(languageData.language));
        });

        // Toggle visibility function
        const toggleVisibility = language => {
            const path = svg.select(`.data-path.${language}`);
            const points = svg.selectAll(`.point-${language}`);
            const legendText = svg.select(`.legend-text.${language}`);
            const isVisible = path.style("display") !== "none";

            // Toggle path and points visibility
            path.style("display", isVisible ? "none" : null);
            points.style("display", isVisible ? "none" : null);

            // Update legend text styles
            legendText
                .style("text-decoration", isVisible ? "line-through" : "none")
                .style("opacity", isVisible ? "0.5" : "1");
        };

    }, []); // Empty dependency array ensures it runs once when the component mounts
    return <div
        style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px" }}
        ref={chartRef}>
    </div>;
};

export default RadarChart;
