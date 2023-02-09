import { useFormik } from "formik";
import React, { useRef } from "react";
import { accountSchema, requiredSchema } from "../../validation/validate";
import { Input, PhoneInput } from "../other";

const BasketPerson: React.FC = () => {

	const onFormChange = () => {
		console.log('хуй');
	}

  const formRef: any = useRef();
  const formik = useFormik({
    initialValues: {
      name: "Artur",
      surname: "Musienko",
      phone: "+380997580121",
      email: "musienkoartur45@gmail.com",
    },
    validationSchema: accountSchema,
    onSubmit: async () => {}
  });

  return (
    <form ref={formRef} onChange={onFormChange} className="basket-form">
      <div className="basket-form__field">
        <Input
          name="surname"
          label="Прізвище"
          message={formik.errors.surname}
          onChange={formik.handleChange}
          touched={formik.touched.surname}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
        />
      </div>
      <div className="basket-form__field">
        <Input
          name="name"
          label="Ім'я"
          message={formik.errors.name}
          onChange={formik.handleChange}
          touched={formik.touched.name}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
      </div>
      <div className="basket-form__field">
        <PhoneInput
          name="phone"
          label="Номер телефону"
          message={formik.errors.phone}
          onChange={formik.handleChange}
          touched={formik.touched.phone}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className="basket-form__field"
        />
      </div>
      <div className="basket-form__field">
        <Input
          type="email"
          name="email"
          label="Пошта"
          message={formik.errors.email}
          onChange={formik.handleChange}
          touched={formik.touched.email}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
    </form>
  );
};

export default BasketPerson;
