// https://stormy-castle-80530.herokuapp.com/
let nodes;
let edges;
let network;
var initialpages =[];
const container = document.getElementById('container');

const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', () => {
    var list = document.getElementById("pagename").value;
    initialpages.push(list);

    // Global options
const options = {
  nodes: {
    shape: 'dot',
    scaling: {
      min: 20,
      max: 30,
      label: { min: 14, max: 30, drawThreshold: 9, maxVisible: 20 },
    },
    font: { size: 14, face: 'Helvetica Neue, Helvetica, Arial' },
  },
  interaction: {
    hover: true,
    hoverConnectedEdges: false,
    selectConnectedEdges: true,
  },
};

nodes = new vis.DataSet();
edges = new vis.DataSet();

initialpages.forEach((page)=>{
    nodes.add([
      {
        id: page,
        label: page,
        value: 2,
        level: 0,
        x: 0,
        y: 0,
        parent: page, // Parent is self
      },
    ]);

});


   let data = { nodes, edges };


  network = new vis.Network(container, data, options);
  network.on('click', expantion);

  });



