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

export interface SolarLevelData {
  data: Array<ChartData>
}

const SolarLevelGraph: React.FC<SolarLevelData> = props => {
  const { data } = props;

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      scale={{x: "time"}}
      
    >
      <VictoryLabel text="Solar Irradiance" x={170} y={30} textAnchor="middle"/>
      <VictoryArea
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        data={data}
      />
      <VictoryAxis
        width={400}
        height={400}
      />
    </VictoryChart>
  );
};

export default SolarLevelGraph;