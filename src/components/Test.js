import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { data } from "./data";

const Test = () => {
  const ref = useRef();
  const links = data.links;
  const nodes = data.nodes;

  useEffect(() => {
    //create simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(links).id((d) => d.id)
      )
      .force("charge", d3.forceManyBody().strength(-300))
      .force("x", d3.forceX())
      .force("y", d3.forceY());

    const svg = d3.select(ref.current);
    let types = Array.from(new Set(links.map((d) => d.type)));
    let color = d3.scaleOrdinal(types, d3.schemeCategory10);

    svg.attr("viewBox", [-300, -200, 600, 600]);
    svg
      .append("defs")
      .selectAll("marker")
      .data(types)
      .join("marker")
      .attr("id", "triangle")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 15)
      .attr("refY", -0.5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("fill", color)
      .attr("d", "M1,-5L10,0L0,5");
   

    // this 'link' const can be used to address all links
    //   const link = svg.append('g')
    //     .attr("fill", "currentColor")
    //     .attr("stroke-width", 1.5)
    // .selectAll("path")
    // .data(links)
    // .join("path")
    // .attr("marker-end", `url(#triangle)`);

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
        
        return linkedByIndex[singleNode.index + "," + currentNode.index] 
        
       
    }

    var linkedByIndex = {};
    links.forEach(function(d){
        linkedByIndex[d.source.index + "," + d.target.index] = true;
    });
    console.log(linkedByIndex);

    const nodeMouseOverHandler = (event) => {
        let currentNode = event.target.__data__;
        node
            .style("opacity", function(singleNode){
                
                return isConnected(singleNode, currentNode) ? 1.0 : 0.2 
            })

            link
            .transition(500)
              .style("stroke-opacity", function(singleNode) {
                return singleNode.source === currentNode || singleNode.target === currentNode ? 1 : 0.2;
              })

    };

    const mouseOutFunction = () => {
        node
            .style("opacity", 1);
    }

    //this object can be used to address all nodes
    const node = svg
      .append("g")
      .attr("fill", "currentColor")
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(drag(simulation))
      

    node
      .append("circle")
      .attr("stroke", "white")
      .attr("stroke-width", 1.5)
      .attr("r", 4)
      .on("mouseover", nodeMouseOverHandler)
      .on("mouseout", mouseOutFunction);


    
    //add text to the nodes
    node
      .append("text")
      .text((d) => d.id) 
      .clone(true)
      .lower()
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 3)
      
    
    

    simulation.on("tick", () => {
      console.log("ticking");
      node.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
      // link.attr("d", linkArc)
      link
        .attr("x1", (link) => link.source.x)
        .attr("y1", (link) => link.source.y)
        .attr("x2", (link) => link.target.x)
        .attr("y2", (link) => link.target.y);
    });

    //   function to draw the links
    //   function linkArc(d) {
    //     const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
    //     return `
    //       M${d.source.x},${d.source.y}
    //       A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
    //     `;
    //   }
  }, []);

  return <svg ref={ref} />;
};

export default Test;
