import React, {FC, useEffect, useState} from "react";

import {ScrollView} from "react-native";

import {BASIC_URL} from "../../constants";
import {useFetch, useFilter} from "../../hooks";
import {Animal} from "../../interfaces";
import {Box} from "../box";
import {CardDetails} from "../item_card";
import {Loader} from "../loader";

interface ItemsListProps {
  query: string;
}

export const ItemsList: FC<ItemsListProps> = ({query}) => {
  const {fetchData, loading} = useFetch();
  const [data, setData] = useState<Animal[]>([]);

  const filteredData = useFilter(data, query);

  const getData = () => {
    fetchData(BASIC_URL).then((res: any) => {
      setData(res.data);
    });
  };

  const onDelete = (id: number) => {
    fetchData(`${BASIC_URL}${id}`, "DELETE").then((response: any) => {
      if (response.status === 200) {
        getData();
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box py={16} mx={1} mb={200}>
      {loading && <Loader />}
      <ScrollView>
        {!loading &&
          filteredData.map((item: any) => (
            <CardDetails
              key={item.id}
              item={item}
              onDelete={onDelete}
              loading={loading}
            />
          ))}
      </ScrollView>
    </Box>
  );
};
