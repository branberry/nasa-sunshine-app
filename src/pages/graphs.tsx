import { Card, Grid } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';
import SolarLevelGraph, { ChartData } from '../components/SolarLevelGraph';

const FAKE_SOLAR_DATA =  [
  { x:  dayjs(new Date(2021, 5, 1)).format('DD/MM/YY'), y: 8 },
  { x: dayjs(new Date(2021, 5, 2)).format('DD/MM/YY'), y: 10 },
  { x: dayjs(new Date(2021, 5, 3)).format('DD/MM/YY'), y: 7 },
  { x: dayjs(new Date(2021, 5, 4)).format('DD/MM/YY'), y: 4 },
  { x: dayjs(new Date(2021, 5, 5)).format('DD/MM/YY'), y: 6 },
  { x: dayjs(new Date(2021, 5, 6)).format('DD/MM/YY'), y: 3 },
  { x: dayjs(new Date(2021, 5, 9)).format('DD/MM/YY'), y: 7 },
  { x: dayjs(new Date(2021, 5, 8)).format('DD/MM/YY'), y: 9 },
  { x: dayjs(new Date(2021, 5, 9)).format('DD/MM/YY'), y: 6 }
];

interface GraphsPageProps {
  data?: Array<ChartData>;
}

const GraphsPage: React.FC<GraphsPageProps> = props => {
  const { data } = props;

  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
      <Card
        style={{
          margin: 6
        }}
        variant="outlined"
      >
        <SolarLevelGraph
          data={data || FAKE_SOLAR_DATA}
        />
      </Card>

    </Grid>
  </Grid>
  );
};

export default GraphsPage;