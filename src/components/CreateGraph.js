import * as d3 from "d3";
import { text } from "d3";
import React, { useEffect, useRef } from 'react';


import { nodes, links, NODE_SIZE } from "./data";

const MANY_BODY_STRENGTH = -10000;
const CreateGraph = () => {
    
    const ref = useRef();

   
    
    

    //executes once svg with id="main-container" is created in the DOM
    useEffect(()=> {
        let simulation = d3.forceSimulation(nodes)
        .force("charge", d3.forceManyBody().strength(MANY_BODY_STRENGTH))
        .force("link", d3.forceLink(links))
        .force("center", d3.forceCenter(300, 200));

        const dragInteraction = d3.drag().on('drag', (event, node) => {
            node.fx = event.x;
            node.fy = event.y;
            simulation.alpha(1);
            simulation.restart();
        });









        const svg = d3.select(ref.current);
        
       

        
        
        const lines = svg
        .selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('stroke', 'black')
        
        
        
        
        

        const circles = svg
        .selectAll('circle')
        .data(nodes).enter()
        .append('circle')
        .attr('fill', 'gray')
        .attr('r', NODE_SIZE)
        .call(dragInteraction);
        

        const text = svg
        .selectAll('text')
        .data(nodes).enter()
        .append('text')
        .attr('text-anchor', "middle")
        .attr("alignment-baseline", "middle")
        .style("pointer-events", 'none') //disables any event listener for text
        .text(node => node.id);


        simulation.on('tick', () => {
            circles
            .attr('cx', (node) => node.x)
            .attr('cy', (node) => node.y);

            text
            .attr('x', (node) => node.x)
            .attr('y', (node) => node.y);
            
         
        lines
          .attr('x1', link => link.source.x)
          .attr('y1', link => link.source.y)
          .attr('x2', link => link.target.x)
          .attr('y2', link => link.target.y);
        })
    
        
       


    }, []);
    
    
    
    


    return (
        <svg id="main-container" width="960" height="600" ref={ref}/>
            
       
        
    )
};

export default CreateGraph;
