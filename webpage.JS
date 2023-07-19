var layout = {
  title: {
    text:'Reflectance Spectrum ALTA 5 - Orange Folder',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'Wavelength',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Reflectance Percentage',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};	

TESTER = document.getElementById('tester');
	Plotly.newPlot( 
    TESTER, 
    [
      {
	      x: [470, 525, 560, 585, 600, 645, 700, 735, 810, 880, 940],
	      y: [-0.1904761905,
8.551483421,
21.30584192,
78.5840708,
98.47972973,
111.7073171,
118.5314685,
118.9716312,
117.2302738,
116.252073,
120.9775967]
        
      }
    ], 
    layout
  );