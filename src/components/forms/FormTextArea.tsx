import { getErrorMessageByPropertyName } from "@/utils/schema.validation";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
}: TextAreaProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <div className={`text-md ml-1 flex flex-col text-gray-400 w-full`}>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
            style={{
              minHeight: "100px",
            }}
          />
        )}
      />
      <small
        className="ml-3"
        style={{
          color: "red",
        }}
      >
        {errorMessage}
      </small>
    </div>
  );
};

export default FormTextArea;
