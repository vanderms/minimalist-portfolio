import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().max(30, "max 30 characters").required("field is required"),
        email: Yup.string().email().required("field is required"),
        message: Yup.string().required("field is required").max(600, "max 600 characters"),
      })}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      {(formik) => (
        <Form
          className={`flex flex-col gap-6
          [&_input]:bg-[#33323D1A] [&_input]:w-full [&_input]:border
          [&_input]:h-12 [&_input]:px-4 [&_input]:text-[0.8125rem]
          [&_input:focus]:border-primary [&_input:focus]:[outline:none]
          [&_textarea]:bg-[#33323D1A] [&_textarea]:w-full [&_textarea]:border 
          [&_textarea]:h-24 [&_textarea]:px-4  [&_textarea]:text-[0.8125rem]  
          [&_textarea:focus]:border-primary [&_textarea]:py-2  [&_textarea:focus]:[outline:none]
        `}
        >
          <label>
            <span className="text-[0.8125rem] leading-[1.875rem] text-neutral-800 font-bold mb-2">
              Name
            </span>
            <Field
              name="name"
              type="text"
              placeholder="Jane Appleseed"
              className={
                formik.errors.name && formik.touched.name
                  ? "border-danger"
                  : "border-neutral-50"
              }
            />
            <span className="text-[0.75rem] text-danger font-bold">
              <ErrorMessage name="name" />
            </span>
          </label>
          <label>
            <span className="text-[0.8125rem] leading-[1.875rem] text-neutral-800 font-bold mb-2">
              Email Address
            </span>
            <Field
              name="email"
              type="email"
              placeholder="email@example.com"
              className={
                formik.errors.email && formik.touched.email
                  ? "border-danger"
                  : "border-neutral-50"
              }
            />
            <span className="text-[0.75rem] text-danger font-bold">
              <ErrorMessage name="email" />
            </span>
          </label>
          <label>
            <span className="text-[0.8125rem] leading-[1.875rem] text-neutral-800 font-bold mb-2">
              Message
            </span>
            <Field
              as="textarea"
              name="message"
              type="text"
              placeholder="How can I help?"
              className={
                formik.errors.message && formik.touched.message
                  ? "border-secondary"
                  : "border-neutral-50"
              }
            />
            <span className="text-[0.75rem] text-danger font-bold">
              <ErrorMessage name="message" />
            </span>
          </label>
          <div>
            <button
              type="submit"
              className="h-12 w-[12.5rem] bg-secondary text-neutral-50 text-[0.75rem] hover:bg-primary"
            >
              SEND MESSAGE
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
