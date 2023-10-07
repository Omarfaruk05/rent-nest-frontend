"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  options: SelectOptions[];
  defaultValue?: SelectOptions;
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
};
const FormSelectField = ({
  name,
  size,
  placeholder,
  value,
  options,
  label,
  defaultValue,
  placement,
}: SelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            defaultValue={defaultValue}
            placeholder={placeholder}
            placement={placement}
            size={size}
            onChange={onChange}
            options={options}
            value={value}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
