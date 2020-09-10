import React from "react";
import { View } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppSubmitButton,
} from "../../components/forms";
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
  return (
    <AppScreen style={{ paddingHorizontal: 10 }}>
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
