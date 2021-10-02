import React from 'react';
import { 
  VictoryChart, 
  VictoryArea, 
  VictoryTheme, 
  VictoryAxis,
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
      <VictoryArea
        data={data}
      />
      <VictoryAxis/>
    </VictoryChart>
  );
};

export default SolarLevelGraph;