import { object, string } from "yup";

export default object({
  body: object({
    originalUrl: string()
      .url("Must be a valid URL")
      .required("originalUrl is required"),
  }),
});