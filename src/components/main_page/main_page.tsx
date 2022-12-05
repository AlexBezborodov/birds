import React, {useState} from "react";

import {Appbar} from "react-native-paper";
import {useNavigate} from "react-router-native";

import {AppHeader} from "../header";
import {ItemsList} from "../items_list";
import {Layout} from "../layout";
import {Search} from "../search";

export const MainPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <>
      <AppHeader title="Animals">
        <Appbar.Action icon="plus-circle" onPress={() => navigate("/create")} />
      </AppHeader>
      <Layout>
        <Search query={query} setQuery={setQuery} />
        <ItemsList query={query} />
      </Layout>
    </>
  );
};
