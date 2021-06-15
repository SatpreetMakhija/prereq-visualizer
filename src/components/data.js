export const nodes = [
    {"id": "ICP"},
    {"id": "DM"},
    {"id": "New Geography"},
    {"id": "Algorithms"}
];
export const links = [
    {source: 0, target: 1},
    {source: 2, target: 1},
    {source: 1, target: 3}
];

export const NODE_SIZE = 20;

// const addNodeAndLinks = (node, prereqs ) => {
//     node.size = NODE_SIZE;
//     nodes.push(node);
//     if (prereqs) {
        
//         for (var i=0; i<prereqs.length; i++) {
//             if ()
//             links.push({source: node, target: prereqs})
        
//     }
// }
// addNodeAndLinks({"id": "DM"})
// addNodeAndLinks({"id": "New "} ); 
// addNodeAndLinks({"id": "Algorithms"}, {"id": "DM"})
// addNodeAndLinks({"id": "ICP"});
// addNodeAndLinks({"id": "DM"}, [ {"id": "DM"}])




