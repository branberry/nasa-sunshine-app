import React from 'react';
import { 
  VictoryChart, 
  VictoryArea, 
  VictoryTheme, 
  VictoryAxis,
  VictoryLabel,

} from 'victory';

type ChartXAxis = string | number | Date;

export interface ChartData {
  x: ChartXAxis;
  y: number;
}

interface SolarLevelData {
  data: Array<ChartData>
}

const SolarLevelGraph: React.FC<SolarLevelData> = props => {
  const { data } = props;

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      scale={{x: "time"}}
      
    >
      <VictoryLabel text="Solar Irradiance" x={200} y={30} textAnchor="middle"/>
      <VictoryArea
        data={data}
      />
      <VictoryAxis/>
    </VictoryChart>
  );
};

export default SolarLevelGraph;