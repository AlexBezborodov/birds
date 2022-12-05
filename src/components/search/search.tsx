import * as React from "react";

import {TextInput} from "react-native-paper";

interface QueryProps {
  query: string;
  setQuery: (val: string) => void;
}

export const Search: React.FC<QueryProps> = ({query, setQuery}) => {
  return (
    <TextInput
      label="Search"
      mode="outlined"
      activeOutlineColor="#26D826"
      left={<TextInput.Icon icon="magnify" />}
      value={query}
      onChangeText={setQuery}
    />
  );
};
