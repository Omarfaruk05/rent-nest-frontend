import * as yup from "yup";

export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required("Password is required"),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is Required"),
      middleName: yup.string().required("Middle name is Required"),
      lastName: yup.string().required("Last name is Required"),
    }),
    email: yup.string().email().required("Email is required."),
    designation: yup.string().required("Designation is required."),
    dateOfBirth: yup.string().required("Date of birth is required."),
  }),
});
