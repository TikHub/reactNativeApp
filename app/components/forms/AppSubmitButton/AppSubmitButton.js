import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../../AppButton";

import styles from "./styles";

export default function AppSubmitButton({ title, radius }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} radius={radius} />;
}
