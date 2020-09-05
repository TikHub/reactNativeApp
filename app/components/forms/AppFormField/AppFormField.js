import React from "react";
import { useFormikContext } from "formik";

import AppErrorMessage from "../AppErrorMessage";
import AppInput from "../../AppInput";

import styles from "./styles";

export default function AppFormField({ name, ...restProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        hasError={touched[name] && errors[name]}
        {...restProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
