import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

import fields from "./fields";

const RegisterForm = ({ submitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...fields.username}
        register={register}
        error={errors.username}
      />
      <TextField {...fields.email} register={register} error={errors.email} />
      <TextField
        {...fields.password}
        register={register}
        error={errors.password}
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
