import React from "react";
import { View } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, AppSubmitButton } from "../../components/forms";
import AppImageInputSingle from "../../components/AppImageInputSingle";
import AppScreen from "../../components/AppScreen";

import defaultStyles from "../../config/defaultStyles";
import styles from "./styles";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().min(1).label("First Name"),
  lastName: Yup.string().required().min(1).label("Last Name"),
  displayName: Yup.string().label("Display Name"),
  email: Yup.string().email().label("Email"),
  phoneNumber: Yup.string().required().label("Phone Number"),
});

export default function AccountSettingsScreen(props) {
  return (
    <AppScreen style={[styles.container]}>
      <AppImageInputSingle
        allowsEditing
        background={defaultStyles.colors.lightGrey}
        circle
        color={defaultStyles.colors.mediumGrey}
        size={100}
      />
      <AppForm
        initialValues={{
          firstName: "",
          lastName: "",
          displayName: "",
          email: "",
          phoneNumber: "",
        }}
        validationSchema={validationSchema}
      >
        <AppFormField name="firstName" placeholder="First Name" />
        <AppFormField name="lastName" placeholder="Last Name" />
        <AppFormField name="displayName" placeholder="Display Name" />
        <AppFormField name="email" placeholder="Email" />
        <AppFormField name="phoneNumber" placeholder="Phone Number" />
        <AppSubmitButton title="Update" />
      </AppForm>
    </AppScreen>
  );
}
