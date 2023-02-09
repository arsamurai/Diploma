import { useFormik } from "formik";
import React, { useRef } from "react";
import cn from "classnames";
import { createDeviceSchema } from "../../../validation/validate";
import { Button, Input, TextArea } from "../../other";

interface CreteDeviceProps {
	index: number,
	activePage: number
}

const CreteDevice: React.FC<CreteDeviceProps> = ({index, activePage}) => {
  const formRef: any = useRef();
  const formik = useFormik({
    initialValues: {
      title: "Товар",
      price: 13300,
      discount: 15,
      shortDescr: "Норм",
      image: "/image",
      brandId: 2,
      typeId: 2,
      name: "Супер",
      longDescr: "Норм Норм Норм Норм Норм",
    },
		validationSchema: createDeviceSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className={cn("page-content", "create-device-page", {active: index === activePage})} data-index={index}>
      <h4 className="page-content__title">Створити товар</h4>
      <form
        className="create-form"
        ref={formRef}
        onSubmit={formik.handleSubmit}
      >
        <div className="create-form__field">
          <Input
            name="title"
            label="Назва"
            message={formik.errors.title}
            onChange={formik.handleChange}
            touched={formik.touched.title}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
        </div>
        <div className="create-form__field">
          <Input
            name="price"
            label="Ціна"
            message={formik.errors.price}
            onChange={formik.handleChange}
            touched={formik.touched.price}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
        </div>
        <div className="create-form__field">
          <Input
            name="discount"
            label="Скидка"
            message={formik.errors.discount}
            onChange={formik.handleChange}
            touched={formik.touched.discount}
            onBlur={formik.handleBlur}
            value={formik.values.discount}
          />
        </div>
        <div className="create-form__field">
          <Input
            name="shortDescr"
            label="Короткий опис"
            message={formik.errors.shortDescr}
            onChange={formik.handleChange}
            touched={formik.touched.shortDescr}
            onBlur={formik.handleBlur}
            value={formik.values.shortDescr}
          />
        </div>
        <div className="create-form__field">
          <Input
            name="image"
            label="Картинка"
            message={formik.errors.image}
            onChange={formik.handleChange}
            touched={formik.touched.image}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
        </div>
        <div className="create-form__field">
          <Input
            name="brandId"
            label="Бренд"
            message={formik.errors.brandId}
            onChange={formik.handleChange}
            touched={formik.touched.brandId}
            onBlur={formik.handleBlur}
            value={formik.values.brandId}
          />
        </div>
        <div className="create-form__field">
          <Input
            name="typeId"
            label="Тип"
            message={formik.errors.typeId}
            onChange={formik.handleChange}
            touched={formik.touched.typeId}
            onBlur={formik.handleBlur}
            value={formik.values.typeId}
          />
        </div>
        <div className="create-form__field">
          <Input
            name="name"
            label="Доп. назва"
            message={formik.errors.name}
            onChange={formik.handleChange}
            touched={formik.touched.name}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>
        <div className="create-form__field">
					<TextArea
						name="longDescr"
            label="Довгий опис"
						rows={3}
            message={formik.errors.longDescr}
            onChange={formik.handleChange}
            touched={formik.touched.longDescr}
            onBlur={formik.handleBlur}
            value={formik.values.longDescr}
					/>
        </div>
        <div className="create-form__btn">
          <Button type="submit">
            Створити товар
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreteDevice;
