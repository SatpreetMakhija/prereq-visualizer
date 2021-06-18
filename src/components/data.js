// const LINKS_DISTANCE = 2;

// export const nodes = [
//     {"id": "ICP"},
//     {"id": "DM"},
//     {"id": "New Geography"},
//     {"id": "Algorithms"}
// ];
// export const links = [
//     {source: 0, target: 1, distance: LINKS_DISTANCE},
//     {source: 2, target: 1, distance: LINKS_DISTANCE},
//     {source: 1, target: 3, distance: LINKS_DISTANCE}
// ];

// export const NODE_SIZE = 20;

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


export let data = {
    nodes: [
        {id: "Microsoft"}, {id: "Amazon"}, {id: "HTC"}, {id: "Samsung"}, {id: "Apple"}, {id: "Motorola"},
        {id: "Nokia"}, {id: "Kodak"}, {id: "Barnes & Noble"}, {id: "Foxconn"}, {id: "Oracle"}, {id: "Google"},
        {id: "Inventec"}, {id: "LG"}, {id: "RIM"}, {id: "Sony"}, {id: "Qualcomm"}, {id: "Huawei"}, {id: "ZTE"},
        {id: "Ericsson"}
    ],
    

    links: [
        {source: "Samsung", target: "Apple", type: "suit"},
        {source: "Motorola", target: "Apple", type: "suit"},
        {source: "Nokia", target: "Apple", type: "resolved"},
        {source: "HTC", target: "Apple", type: "suit"},
        {source: "Kodak", target: "Apple", type: "suit"},
        {source: "Microsoft", target: "Barnes & Noble", type: "suit"},
        {source: "Microsoft", target: "Foxconn", type: "suit"},
        {source: "Oracle", target: "Google", type: "suit"},
        {source: "Apple", target: "HTC", type: "suit"},
        {source: "Microsoft", target: "Inventec", type: "suit"},
        {source: "Samsung", target: "Kodak", type: "resolved"},
        {source: "LG", target: "Kodak", type: "resolved"},
        {source: "RIM", target: "Kodak", type: "suit"},
        {source: "Sony", target: "LG", type: "suit"},
        {source: "Kodak", target: "LG", type: "resolved"},
        {source: "Apple", target: "Nokia", type: "resolved"},
        {source: "Qualcomm", target: "Nokia", type: "resolved"},
        {source: "Apple", target: "Motorola", type: "suit"},
        {source: "Microsoft", target: "Motorola", type: "suit"},
        {source: "Motorola", target: "Microsoft", type: "suit"},
        {source: "Huawei", target: "ZTE", type: "suit"},
        {source: "Ericsson", target: "ZTE", type: "suit"},
        {source: "Kodak", target: "Samsung", type: "resolved"},
        {source: "Apple", target: "Samsung", type: "suit"},
        {source: "Kodak", target: "RIM", type: "suit"},
        {source: "Nokia", target: "Qualcomm", type: "suit"}
    ] 
}



