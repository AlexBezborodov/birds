import React, {useState, useEffect} from "react";
interface UseFilterProps {
  data: any;
  query: string;
}

export const useFilter = (data: any, query: string) => {
  const [filteredData, setFilteredData] = useState<any>([]);

  useEffect(() => {
    if (query.length) {
      setFilteredData(
        data.filter((animal: any) =>
          animal.title.toLowerCase().includes(query.toLowerCase()),
        ),
      );
    } else {
      setFilteredData(data);
    }
  }, [data, query]);

  return filteredData;
};
