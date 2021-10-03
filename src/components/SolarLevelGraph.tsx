import React from 'react';
import { 
  VictoryChart, 
  VictoryTheme, 
  VictoryAxis,
  VictoryLabel,
  VictoryBar,
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
      <VictoryLabel text="Hours of Sun per Day" x={170} y={30} textAnchor="middle"/>
      <VictoryBar
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        data={data}
      />
      <VictoryAxis
        width={400}
        height={400}
        style={{
          tickLabels: {
            fontSize: 8,
          }
        }}
      />
    </VictoryChart>
  );
};

export default SolarLevelGraph;