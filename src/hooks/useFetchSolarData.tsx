import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { NASA_POWER_API, PowerAPIParameter } from '../utils/constants';
import dayjs from 'dayjs';

interface FetchSolarDataProps {
  parameters: Array<PowerAPIParameter>;
  param: PowerAPIParameter;
  startDate: string;
  endDate: string;
  lat?: number;
  lng?: number;
};

const useFetchSolarData = (props: FetchSolarDataProps) => {
  const { parameters, lat, lng, startDate, endDate } = props;

  const [data, setData] = useState<any>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
      
  let requestParams = '';
  parameters.forEach((curr: PowerAPIParameter) => { requestParams += ( curr + ',')});

  requestParams = requestParams.substring(0, requestParams.length - 1);
  console.log(props);
  const fetcher = useCallback(async () => {
    setIsLoading(true);


    const DATA_REQUEST_URL = `${NASA_POWER_API}?parameters=${requestParams}&community=SB&longitude=${lng|| 0}&latitude=${lat || 0}&start=${dayjs(startDate).subtract(2, 'year').year()}&end=${dayjs(endDate).subtract(1, 'year').year()}&format=JSON`;

    try {


      const result = await axios.get<any>(DATA_REQUEST_URL, {
        headers: {
          'Content-Type': 'application/json',

        },
      });
      console.log(result.data);
      setData(result.data);


      setIsLoading(false);
    } catch (error) {
      setError((error as Error).message);
    }

  }, [lat, lng, endDate, startDate, requestParams]);

  useEffect(() => {
    fetcher();
  },[fetcher]);

  return { isLoading, data };
};

export default useFetchSolarData;
