import { Select } from "antd";
import type { SelectProps } from "antd";
import React from "react";

interface IFormImagePickerProps {
  options: any;
  name: string;
  handleChange: (value: string) => void;
}

const FormImageLinkPicker = ({
  options,
  name,
  handleChange,
}: IFormImagePickerProps) => (
  <Select
    mode="tags"
    style={{ width: "100%" }}
    placeholder="Tags Mode"
    onChange={handleChange}
    options={options}
  />
);

export default FormImageLinkPicker;
