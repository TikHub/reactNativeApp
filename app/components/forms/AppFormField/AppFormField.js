import React from "react";
import { useFormikContext } from "formik";

import AppErrorMessage from "../AppErrorMessage";
import AppInput from "../../AppInput";

import styles from "./styles";

export default function AppFormField({ name, width, ...restProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppInput
        hasError={touched[name] && errors[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...restProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
