import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppSubmitButton,
} from "../../components/forms";
import AppButton from "../../components/AppButton";
import AppImageInput from "../../components/AppImageInput";
import AppImageInputSingle from "../../components/AppImageInputSingle";
import AppImageInputList from "../../components/AppImageInputList";
import AppScreen from "../../components/AppScreen";

import defaultStyles from "../../config/defaultStyles";
import keyboardTypes from "../../config/keyboardTypes";
import styles from "./styles";
import regexps from "../../config/regexps";
import mockData from "../../config/mockData";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).trim().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().max(255).label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

export default function ListingEditScreen(props) {
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return (
    <AppScreen style={{ paddingHorizontal: 10 }}>
      <AppImageInputList
        allowsEditing
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />

      {/* <AppImageInputSingle
        // allowsEditing
        background={defaultStyles.colors.lightGrey}
        color={defaultStyles.colors.mediumGrey}
        name="camera"
        radius={15}
        size={100}
      /> */}
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType={keyboardTypes.common.numeric}
          maxLength={8}
          name="price"
          placeholder="Price"
          width={"50%"}
        />
        <AppFormPicker
          items={mockData.categories}
          name="category"
          text="Category"
          width={"50%"}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <AppSubmitButton title="Post" />
      </AppForm>
    </AppScreen>
  );
}
