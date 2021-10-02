import React from 'react';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './App.css';
import SolarLevelGraph from './components/SolarLevelGraph';

const FAKE_SOLAR_DATA =  [
  { x: new Date(2021, 5, 1), y: 8 },
  { x: new Date(2021, 5, 2), y: 10 },
  { x: new Date(2021, 5, 3), y: 7 },
  { x: new Date(2021, 5, 4), y: 4 },
  { x: new Date(2021, 5, 7), y: 6 },
  { x: new Date(2021, 5, 8), y: 3 },
  { x: new Date(2021, 5, 9), y: 7 },
  { x: new Date(2021, 5, 10), y: 9 },
  { x: new Date(2021, 5, 11), y: 6 }
];

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SolarLevelGraph
            data={FAKE_SOLAR_DATA}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
