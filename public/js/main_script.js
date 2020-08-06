// https://serene-river-18118.herokuapp.com/
let nodes;
let edges;
let network;


const container = document.getElementById('container');
    // Global options
    nodes = new vis.DataSet();
edges = new vis.DataSet();






const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', () => {
  var initialpages =[];
types=(chbut==true)?'syn':'ant';
    var list = document.getElementById("pagename").value;
    initialpages.push(list);



initialpages.forEach((page)=>{
    if(page.length>0){

     if (nodes.getIds().indexOf(page) === -1) {
    nodes.add([
      {
        id: lash(page),
        label: lash(page),
        value: 2,
        level: 0,

            color: {
      border: '#02b0d3',
      background: '#03C4EB',
      highlight: {
        border: '#03C4EB',
        background: '#02b0d3'
      },
      hover: {
        border: '#02b0d3',
        background: '#b3edf9'
      }
    },
        x: 0,
        y: 0,
        parent: lash(page), // Parent is self
      },
    ]);
    }
    }

});

const options = {
  nodes: {
    shape: 'dot',
    scaling: {
      min: 20,
      max: 30,
      label: { min: 14, max: 30, drawThreshold: 9, maxVisible: 20 },
    },

    font: { size: 14, face: 'Helvetica Neue, Helvetica, Arial' },
     shadow:{
      enabled: true,
      color: 'rgba(0,0,0,0.5)',
      size:10,
      x:5,
      y:5
    },
    shape: 'ellipse',
    shapeProperties: {
      borderDashes: false, // only for borders
      borderRadius: 6,     // only for box shape
      interpolation: false,  // only for image and circularImage shapes
      useImageSize: false,  // only for image and circularImage shapes
      useBorderWithImage: false,  // only for image shape
      coordinateOrigin: 'center'  // only for image and circularImage shapes
    }
  },
  interaction: {
     dragNodes:true,
    dragView: true,
    hideEdgesOnDrag: false,
    hideEdgesOnZoom: false,
    hideNodesOnDrag: false,
    hover: false,
    hoverConnectedEdges: true,
    keyboard: {
      enabled: false,
      speed: {x: 10, y: 10, zoom: 0.02},
      bindToWindow: true
    },
    multiselect: true,
    navigationButtons: false,
    selectable: true,
    selectConnectedEdges: true,
    tooltipDelay: 300,
    zoomView: true
  },
  physics:{
    enabled: true,
    barnesHut: {
      theta: 0.5,
      gravitationalConstant: -2000,
      centralGravity: 0.3,
      springLength: 95,
      springConstant: 0.04,
      damping: 0.09,
      avoidOverlap: 0
    },
    forceAtlas2Based: {
      theta: 0.5,
      gravitationalConstant: -50,
      centralGravity: 0.01,
      springConstant: 0.08,
      springLength: 100,
      damping: 0.4,
      avoidOverlap: 0
    },
    repulsion: {
      centralGravity: 0.2,
      springLength: 200,
      springConstant: 0.05,
      nodeDistance: 100,
      damping: 0.09
    },
    hierarchicalRepulsion: {
      centralGravity: 0.0,
      springLength: 100,
      springConstant: 0.01,
      nodeDistance: 120,
      damping: 0.09,
      avoidOverlap: 0
    },
    maxVelocity: 50,
    minVelocity: 0.1,
    solver: 'barnesHut',
    stabilization: {
      enabled: true,
      iterations: 1000,
      updateInterval: 100,
      onlyDynamicEdges: false,
      fit: true
    },
    timestep: 0.5,
    adaptiveTimestep: true,
    wind: { x: 0, y: 0 }
  },
   manipulation: {
    enabled: true,
    initiallyActive: false,
    addNode: false,
    addEdge: true,

    editEdge: true,

    deleteNode: function(data,callback) {

        var dat=network.getConnectedNodes(data.nodes);
        data.nodes.push(...dat);
        console.log(dat);
        console.log(data);
        callback(data);

    },
    deleteEdge:true,
    controlNodeStyle:{
      // all node options are valid.
    }
  },
  layout: {
    improvedLayout:true,
    clusterThreshold: 150,
    hierarchical: {
      enabled:false,
      levelSeparation: 150,
      nodeSpacing: 100,
      treeSpacing: 200,
      blockShifting: true,
      edgeMinimization: true,
      parentCentralization: true,
      direction: 'UD',        // UD, DU, LR, RL
      sortMethod: 'hubsize',  // hubsize, directed
      shakeTowards: 'leaves'  // roots, leaves
    }
  },
  edges:{
    arrows: {
      to: {
        enabled: true,

        scaleFactor: 0.5,
        src: nodes[0],
        type: "arrow"
      }

    },
    endPointOffset: {
      from: 0,
      to: 0
    },
    arrowStrikethrough: true,

    dashes: false,
    font: {
      color: '#343434',
      size: 14, // px
      face: 'arial',
      background: 'none',
      strokeWidth: 2, // px
      strokeColor: '#ffffff',
      align: 'horizontal',
      multi: false,
      vadjust: 0,
      bold: {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        vadjust: 0,
        mod: 'bold'
      },
      ital: {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        vadjust: 0,
        mod: 'italic',
      },
      boldital: {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        vadjust: 0,
        mod: 'bold italic'
      },
      mono: {
        color: '#343434',
        size: 15, // px
        face: 'courier new',
        vadjust: 2,
        mod: ''
      }
    },
    hidden: false,
    hoverWidth: 1.5,

    labelHighlightBold: true,
    physics: true,
    scaling:{
      min: 1,
      max: 15,
      label: {
        enabled: true,
        min: 14,
        max: 30,
        maxVisible: 30,
        drawThreshold: 5
      },
      customScalingFunction: function (min,max,total,value) {
        if (max === min) {
          return 0.5;
        }
        else {
          var scale = 1 / (max - min);
          return Math.max(0,(value - min)*scale);
        }
      }
    },
    selectionWidth: 1,
    selfReferenceSize: 20,
    selfReference:{
        size: 20,
        angle: Math.PI / 4,
        renderBehindTheNode: true
    },
    shadow:{
      enabled: false,
      color: 'rgba(0,0,0,0.5)',
      size:10,
      x:5,
      y:5
    },
    smooth: {
      enabled: true,
      type: "dynamic",
      roundness: 0.5
    },
    title:undefined,
    value: undefined,
    width: 1,
    widthConstraint: false
  }

};
const rButton = document.getElementById('refresh');
  rButton.addEventListener('click', () => {
      nodes = new vis.DataSet();
edges = new vis.DataSet();
let data = { nodes, edges };


  network = new vis.Network(container, data, options);
  });

   let data = { nodes, edges };


  network = new vis.Network(container, data, options);

  network.on('doubleClick', expantion);

  });



