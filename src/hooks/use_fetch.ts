import {useCallback} from "react";
import {useState} from "react";

import axios, {AxiosError} from "axios";
import {Alert} from "react-native";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (url: string, requestType: string = "GET", payload: any = {}) => {
      setLoading(true);
      const response = await axios({
        method: requestType,
        url,
        data: requestType === "GET" ? null : payload,
      }).catch((err: AxiosError) => {
        setLoading(false);
        Alert.alert(err.message);
        return err;
      });
      setLoading(false);
      return response;
    },
    [],
  );

  return {fetchData, loading};
};
