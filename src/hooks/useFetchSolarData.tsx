import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { NASA_POWER_API, PowerAPIParameter, Resolution } from '../utils/constants';
import dayjs from 'dayjs';

interface FetchSolarDataProps {
  parameters: Array<PowerAPIParameter>;
  param: PowerAPIParameter;
  startDate: string;
  endDate: string;
  resolution: Resolution;
  lat?: number;
  lng?: number;
};

const useFetchSolarData = (props: FetchSolarDataProps) => {
  const { parameters, lat, lng, startDate, endDate, resolution} = props;

  const [data, setData] = useState<any>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
      
  let requestParams = '';
  parameters.forEach((curr: PowerAPIParameter) => { requestParams += ( curr + ',')});

  requestParams = requestParams.substring(0, requestParams.length - 1);
  console.log(props);
  const fetcher = useCallback(async () => {
    setIsLoading(true);


    const DATA_REQUEST_URL = `${NASA_POWER_API}?parameters=${(requestParams === "SI_EF_TILTED_SURFACE_OPTIMAL") ? "SI_EF_TILTED_SURFACE" : requestParams}&resolution=${resolution}&community=SB&longitude=${lng|| 0}&latitude=${lat || 0}&start=${dayjs(startDate).format(resolution !== 'climatology' ? "YYYYMMDD" : "YYYY")}&end=${dayjs(endDate).add(resolution === 'climatology' ? 1 : 0, 'year').format(resolution !== 'climatology' ? "YYYYMMDD" : "YYYY")}&format=JSON`;

    try {


      const result = await axios.get<any>(DATA_REQUEST_URL, {
        headers: {
          'Content-Type': 'application/json',

        },
      });
      console.log(result.data);
      setData(result.data);


      setIsLoading(false);
    } catch (e) {
      setError((e as Error).message);
    }

  }, [lat, lng, endDate, startDate, requestParams, resolution]);
  console.log(error)

  useEffect(() => {
    fetcher();
  },[fetcher]);

  return { isLoading, data };
};

export default useFetchSolarData;
