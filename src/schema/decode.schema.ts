import { object, string } from "yup";

export default object({
  body: object({
    shortUrl: string()
      .required("shortUrl is required"),
  }),
});