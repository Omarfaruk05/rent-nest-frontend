import * as yup from "yup";

export const houseSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  city: yup.string().required("City is required"),
  rentPerMonth: yup.string().required("Rent per month is required"),
  bedrooms: yup.string().required("Bedrooms is required"),
  numberOfBalcony: yup.string().required("Balcony is required"),
  parking: yup.string().required("Parking is required"),
  propertyType: yup.string().required("Category is required"),
  interior: yup.string().required("Interior is required"),
  gas: yup.string().required("GAS is required"),
  roomSize: yup.string().required("Room size is required"),
  address: yup.string().required("Address is required"),
  availabilityDate: yup.string().required("AvailabilityDate is required"),
  yearBuilt: yup.string().required("YearBuilt is required"),
  description: yup.string().required("Description is required"),
  houseImage1: yup
    .string()
    .url("Image link should be a valid URL")
    .required("Link 1 is required"),
  houseImage2: yup
    .string()
    .url("Image link should be a valid URL")
    .required("Link 2 is required"),
  houseImage3: yup
    .string()
    .url("Image link should be a valid URL")
    .required("Link 3 is required"),
});
export const updateHouseSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  city: yup.string().required("City is required"),
  rentPerMonth: yup.string().required("Rent per month is required"),
  bedrooms: yup.string().required("Bedrooms is required"),
  numberOfBalcony: yup.string().required("Balcony is required"),
  parking: yup.string().required("Parking is required"),
  propertyType: yup.string().required("Category is required"),
  interior: yup.string().required("Interior is required"),
  gas: yup.string().required("GAS is required"),
  roomSize: yup.string().required("Room size is required"),
  availabilityDate: yup.string().required("Available date is required"),
  yearBuilt: yup.string().required("Build year is required"),
  address: yup.string().required("Address is required"),
  description: yup.string().required("Description is required"),
  houseImage: yup
    .array()
    .of(
      yup
        .string()
        .url("Image link should be a valid URL")
        .required("Image link is required")
    )
    .required("At least one house image is required"),
});
