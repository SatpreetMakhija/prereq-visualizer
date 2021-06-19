import React, { useEffect, useState } from "react";
import * as d3 from "d3";
// import { data } from "./data";

const Test = (props) => {
  // const ref = useRef();
  // const [ref, setRef] = useState();
  // console.log(ref);
//   const links = data.links;
//   const nodes = data.nodes;
let links = props.data.links;
let nodes = props.data.nodes;
    
    console.log(nodes);
   

  useEffect(() => {

    let svg = d3.select('#main-svg')
    svg.selectAll("*").remove();
    console.log("use effect called")

    //create simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(links).id((d) => d.id)
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force("x", d3.forceX(30))
      .force("y", d3.forceY(100))
      .force("collision", d3.forceCollide(50))
    //   .force("center", d3.forceCenter(20, 200));

    svg = d3.select('#main-svg');
    let types = Array.from(new Set(links.map((d) => d.type)));
    let color = d3.scaleOrdinal(types, d3.schemeCategory10);

    svg.attr("viewBox", [-350, -200, 1000, 700]);
    svg
      .append("defs")
      .selectAll("marker")
      .data(types)
      .join("marker")
      .attr("id", "triangle")
      .attr("refX", 6 + 7 + 8) // Controls the shift of the arrow head along the path
      .attr("refY", 2)
      .attr("markerWidth", 6)
      .attr("markerHeight", 4)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0,0 V 4 L6,2 Z")
      .attr("fill", "black");
    
    //added marker 'defs' again so that when link is not active, arrow can be removed.
      svg
      .append("defs")
      .selectAll("marker")
      .data(types)
      .join("marker")
      .attr("id", "triangle-not-active")
      .attr("refX", 6 + 7 + 8) // Controls the shift of the arrow head along the path
      .attr("refY", 2)
      .attr("markerWidth", 6)
      .attr("markerHeight", 4)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0,0 V 4 L6,2 Z")
      .attr("fill", "white");


    const link = svg
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "black")
      .attr("marker-end", `url(#triangle)`);

    //function to add drag functionality
    const drag = (simulation) => {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    };

    const isConnected = (singleNode, currentNode) => {
      return linkedByIndex[singleNode.index + "," + currentNode.index];
    };

    var linkedByIndex = {};
    links.forEach(function (d) {
      linkedByIndex[d.source.index + "," + d.target.index] = true;
    });
   

    const nodeMouseOverHandler = (event) => {
      let currentNode = event.target.__data__;
      node.style("opacity", function (singleNode) {
        return isConnected(singleNode, currentNode) ? 1.0 : 0.2;
      });

      link.transition(500)
        .style("stroke-opacity", function (singleNode) {
        // return singleNode.source === currentNode ? 1: 0.1;
        return  singleNode.target === currentNode ? 1: 0.1;
          
      })
        .attr("marker-end", function (singleNode) {
            // return singleNode.source === currentNode ? 1: 0.1;
            
            return  singleNode.target === currentNode ? "url(#triangle": "url(#triangle-not-active)";
              
          })

    };

    const mouseOutFunction = () => {
      node.style("opacity", 1);
      link.style("stroke-opacity", 1)
        .attr("marker-end", "url(#triangle)")
    };

    //this object can be used to address all nodes
    const node = svg
      .append("g")
      .attr("fill", "currentColor")
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(drag(simulation));

    node
      .append("circle")
      .attr("fill", "gray")
      .attr("stroke", "white")
      .attr("stroke-width", 1.5)
      .attr("r", 12)
      .on("mouseover", nodeMouseOverHandler)
      .on("mouseout", mouseOutFunction);

    //add text to the nodes
    node
      .append("text")
      .attr("font-size", 8)
      .style("font", "bold 8px sans-serif")
      .text((d) => d.id)
      .attr("text-anchor", "middle")
      .style("pointer-events", "none")
      .clone(true)
      .lower()
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 3);

    simulation.on("tick", () => {
     
      node.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
      // link.attr("d", linkArc)
      link
        .attr("x1", (link) => link.source.x)
        .attr("y1", (link) => link.source.y)
        .attr("x2", (link) => link.target.x)
        .attr("y2", (link) => link.target.y);
    });
  }, [links, nodes]);

  return <svg id="main-svg" />;
};

export default Test;
