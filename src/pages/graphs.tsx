import { Card, CardActions, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';
import SolarLevelGraph, { ChartData } from '../components/SolarLevelGraph';
import { DAILY, MONTHLY, PowerAPIParameter, Resolution } from '../utils/constants';


interface GraphsPageProps {
  data?: any;
  resolution: Resolution;
  parameter: PowerAPIParameter;
  setResolution: React.Dispatch<React.SetStateAction<Resolution>>;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

const GraphsPage: React.FC<GraphsPageProps> = props => {
  const { 
    data, 
    parameter,
    setResolution,
    setStartDate,
    setEndDate,
  } = props;
  console.log("DATE!", dayjs("20170101", "YYYYMMDD").format("YYYY"))

  console.log(data);

  let formattedChartData;

  if (data?.properties?.parameter?.[parameter]) {
    formattedChartData = Object.keys(data.properties.parameter?.[parameter]).map((date: string) => {
      return {
        x: dayjs(date, "YYYYMMDD").format("MM/DD/YYYY"),
        y: data.properties.parameter?.[parameter][date]
      } as ChartData;
    });
  }
  console.log(formattedChartData);

  const handleResolutionChange = (event: SelectChangeEvent) => {
    const res = event.target.value as Resolution;

    if (res === 'monthly') {
      setStartDate('2019-01-01');
      setEndDate('2019-08-01');
    } else {
      setStartDate('2019-01-01');
      setEndDate('2019-08-01');
    }

    setResolution(res);
  };

  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
      <Card
        style={{
          margin: 6
        }}
        variant="outlined"
      >
        <CardContent>
          <SolarLevelGraph
            data={formattedChartData || []}
          />

          <CardActions>
            <FormControl
              style={{
                width: "50%"
              }}
            >
              <InputLabel>Date Resolution</InputLabel>
              <Select
                label="date"
                defaultValue={DAILY}
                onChange={handleResolutionChange}
              >
                <MenuItem value={MONTHLY}>Monthly</MenuItem>
                <MenuItem value={DAILY}>Daily</MenuItem>

              </Select>
            </FormControl>
            
          </CardActions>
        </CardContent>
      </Card>

    </Grid>
  </Grid>
  );
};

export default GraphsPage;