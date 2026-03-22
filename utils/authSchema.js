import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .matches(/^[A-Za-z0-9._%+-]+@gmail\.com$/, "Email must end with @gmail.com")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default validationSchema;
