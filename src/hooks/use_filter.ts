import React, {useState, useEffect} from "react";

import {Animal} from "../interfaces";

export const useFilter = (data: Animal[], query: string) => {
  const [filteredData, setFilteredData] = useState<Animal[]>([]);

  useEffect(() => {
    if (query.length) {
      setFilteredData(
        data.filter((animal: Animal | any) =>
          animal?.title.toLowerCase().includes(query.toLowerCase()),
        ),
      );
    } else {
      setFilteredData(data);
    }
  }, [data, query]);

  return filteredData;
};
