import React, {useEffect, useState} from "react";

import {Alert} from "react-native";
import {Card, Button, MD2Colors, TextInput} from "react-native-paper";
import {useNavigate, useParams} from "react-router-native";

import {BASIC_URL} from "../../constants";
import {useFetch} from "../../hooks";
import {Animal} from "../../interfaces";
import {Box} from "../box";
import {AppHeader} from "../header";
import {Layout} from "../layout";

export const EditCard = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const {fetchData, loading} = useFetch();
  const [editData, setEditData] = useState<Animal | null>(null);
  const isDisabled = !editData?.text || !editData?.title || !editData?.image;

  const getItem = () => {
    fetchData(`${BASIC_URL}${id}`).then((res: any) => {
      setEditData(res.data);
    });
  };

  const onSave = () => {
    fetchData(`${BASIC_URL}${id}`, "PUT", editData).then((response: any) => {
      if (response.status === 200) {
        Alert.alert("Item successfully updated");
      }
    });
  };

  const onCreate = () => {
    const newItemId = new Date().getTime();
    console.log("newItemId", newItemId);
    const newItem = {
      ...editData,
      id: newItemId,
      url: editData?.image,
    };
    fetchData(`${BASIC_URL}`, "POST", newItem).then((response: any) => {
      console.log("Create resp", response);
      if (response.status === 200) {
        Alert.alert("Item successfully created");
      }
    });
  };

  const inputHandler = (name: string, value: string) => {
    setEditData((prev: any) => ({...prev, [name]: value}));
  };

  const backAction = () => {
    navigate("/birds");
    setEditData(null);
  };

  const switchAction = () => {
    if (id) {
      onSave();
    } else {
      onCreate();
    }
  };

  useEffect(() => {
    if (id) getItem();
  }, []);

  return (
    <>
      <AppHeader
        title={id ? editData?.title : "Create new item"}
        backAction={backAction}
      />
      <Layout>
        <Box my={8}>
          <Card elevation={1}>
            <Card.Cover source={{uri: editData?.image}} />
            <Card.Content>
              <Box m={8}>
                <Box>
                  <TextInput
                    label="Image url"
                    style={{backgroundColor: "transparent"}}
                    activeUnderlineColor="#26D826"
                    value={editData?.image || ""}
                    onChangeText={text => inputHandler("image", text)}
                  />
                  <Box my={8}>
                    <TextInput
                      label="Title"
                      style={{backgroundColor: "transparent"}}
                      activeUnderlineColor="#26D826"
                      value={editData?.title || ""}
                      onChangeText={text => inputHandler("title", text)}
                    />
                  </Box>
                  <TextInput
                    label="Text"
                    style={{backgroundColor: "transparent"}}
                    onChangeText={text => inputHandler("text", text)}
                    activeUnderlineColor="#26D826"
                    value={editData?.text || ""}
                  />
                </Box>
              </Box>
            </Card.Content>

            <Card.Actions>
              <Button
                mode="elevated"
                textColor="#fff"
                onPress={switchAction}
                loading={loading}
                disabled={Boolean(isDisabled)}
                buttonColor={MD2Colors.blue300}>
                {id ? "Update" : "Create"}
              </Button>
            </Card.Actions>
          </Card>
        </Box>
      </Layout>
    </>
  );
};
