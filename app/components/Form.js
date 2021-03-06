import React from "react";
import { Form as FinalForm } from "react-final-form";
export { FORM_ERROR } from "final-form";
export function Form({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}) {
  return <FinalForm initialValues={initialValues} validate={values => {
    if (!schema) return;

    try {
      schema.parse(values);
    } catch (error) {
      return error.formErrors.fieldErrors;
    }
  }} onSubmit={onSubmit} render={({
    handleSubmit,
    submitting,
    submitError
  }) => <form onSubmit={handleSubmit} className="form" {...props}>
          {
      /* Form fields supplied as children are rendered here */
    }
          {children}

          {submitError && <div role="alert" style={{
      color: "red"
    }}>
              {submitError}
            </div>}

          <button type="submit" disabled={submitting}>
            {submitText}
          </button>

          <style global jsx>{`
            .form > * + * {
              margin-top: 1rem;
            }
          `}</style>
        </form>} />;
}
export default Form;