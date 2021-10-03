import { Card, CardActions, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import SolarLevelGraph, { ChartData } from '../components/SolarLevelGraph';
import { CLIMATOLOGY, DAILY, PowerAPIParameter, Resolution, SOLAR_GEOMETRY, SOLAR_IRRADIANCE_OPTIMAL } from '../utils/constants';


interface GraphsPageProps {
  data?: any;
  resolution: Resolution;
  parameter: PowerAPIParameter;
  setResolution: React.Dispatch<React.SetStateAction<Resolution>>;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  setParam: React.Dispatch<React.SetStateAction<PowerAPIParameter>>;
}

const GraphsPage: React.FC<GraphsPageProps> = props => {
  const { 
    data, 
    parameter,
    resolution,
    setResolution,
    setStartDate,
    setEndDate,
    setParam,
  } = props;

  const [yAxisLabel, setYAxisLabel] = useState("Hours of Sunshine");
  console.log("DATE!", dayjs("20170101", "YYYYMMDD").format("YYYY"))

  console.log(data);

  const formattedChartData: Array<ChartData> = [];

  if (data?.properties?.parameter?.[parameter]) {
    Object.keys(data.properties.parameter?.[parameter]).forEach((date: string) => {
      if (resolution === 'climatology') {
        let month: string = "01";
        switch(date) {
          case "JAN": 
            break;
          case "FEB":
            month = "02";
            break;
          case "MAR": 
          month = "03";

            break;

          case "APR": 
          month = "04";

            break;

          case "MAY": 
          month = "05";

          break;

          case "JUN": 
          month = "06";

          break;

          case "JUL": 
          month = "07";

          break;

          case "AUG": 
          month = "08";

          break;

          case "SEP": 
          month = "09";

          break;

          case "OCT":       
          month = "10";
    
          break;


          case "NOV":
            month = "11";

            break;

          case "DEC":
            month = "12";
 
            break;

          case "ANN": return;
          default: 
            break;
        }
        formattedChartData.push({
          x: dayjs(`2019-${month}-01`, "YYYYMMDD").format("MM/DD/YYYY"),
          y: data.properties.parameter?.[parameter][date]
        } as ChartData);
      } else {
        formattedChartData.push({
          x: dayjs(date, "YYYYMMDD").format("MM/DD/YYYY"),
          y: data.properties.parameter?.[parameter][date]
        } as ChartData);
      }


    });
  }
  console.log(formattedChartData);

  const handleResolutionChange = (event: SelectChangeEvent) => {
    const res = event.target.value as Resolution;

    if (res === 'climatology') {
      setStartDate('2019-01-01');
      setEndDate('2019-08-01');
    } else {
      setStartDate('2019-01-01');
      setEndDate('2019-08-01');
    }

    setResolution(res);
  };

  const handleParamChange = (event: SelectChangeEvent) => {
    const param: PowerAPIParameter = event.target.value as PowerAPIParameter;
    if (param === "SG_DAY_HOURS") {
      setYAxisLabel("Hours of Sunshine");
    } else {
      setYAxisLabel("Solar Irradiance Levels");
    }
    setParam(param);
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
            yAxisLabel={yAxisLabel}
          />

          <CardActions>
            <FormControl
              style={{
                width: "50%"
              }}
            >
              <InputLabel>Date Resolution</InputLabel>
              <Select
                label="date-resolution"
                defaultValue={CLIMATOLOGY}
                onChange={handleResolutionChange}
              >
                <MenuItem value={CLIMATOLOGY}>Monthly</MenuItem>
                {parameter === "SG_DAY_HOURS" ? <MenuItem value={DAILY}>Daily</MenuItem> : null}

              </Select>
            </FormControl>
            <FormControl
              style={{
                width: "50%"
              }}
            >
              <InputLabel>Data Type</InputLabel>
              <Select
                label="date"
                defaultValue={SOLAR_GEOMETRY}
                onChange={handleParamChange}
              >
                <MenuItem value={SOLAR_GEOMETRY}>Hours of Sunshine</MenuItem>
                <MenuItem value={SOLAR_IRRADIANCE_OPTIMAL}>Solar Irradiance</MenuItem>

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