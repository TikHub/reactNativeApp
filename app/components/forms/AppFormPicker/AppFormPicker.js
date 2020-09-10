import React from "react";
import { useFormikContext } from "formik";

import AppErrorMessage from "../AppErrorMessage";
import AppPicker from "../../AppPicker";

import styles from "./styles";

export default function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  text,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        closeIconPosition="center"
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        text={text}
        width={width}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
