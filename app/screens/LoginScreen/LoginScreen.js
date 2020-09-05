import React from "react";
import { View } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, AppSubmitButton } from "../../components/forms";
import AppHeading from "../../components/AppHeading";
import AppScreen from "../../components/AppScreen";

import defaultStyles from "../../config/defaultStyles";
import keyboardTypes from "../../config/keyboardTypes";
import styles from "./styles";
import regexps from "../../config/regexps";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().trim().label("Email"),
  password: Yup.string()
    .required()
    .max(16)
    .matches(regexps.securePassword.pattern, regexps.securePassword.error)
    .trim()
    .label("Password"),
});

export default function LoginScreen(props) {
  return (
    <AppScreen style={{ paddingHorizontal: 10 }}>
      <AppHeading tagName="Benebis Delivery" />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconColor={defaultStyles.colors.mediumGrey}
          iconName={"email"}
          name="email"
          keyboardType={keyboardTypes.common.emailAddress}
          placeholder={"Email"}
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconColor={defaultStyles.colors.mediumGrey}
          iconName={"lock"}
          name="password"
          placeholder={"Password"}
          secureTextEntry
          textContentType="password"
        />
        <AppSubmitButton title="Login" />
      </AppForm>
    </AppScreen>
  );
}
