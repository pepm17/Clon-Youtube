import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser, registerUser } from "../";
import { AppState } from "../../common/redux/rootStore";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector((res: AppState) => res.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>();
  const redirect = useHistory();

  useEffect(() => {
    if (user.response) {
      redirect.push("/");
    }
  }, [user.response, redirect]);

  const onSubmit = handleSubmit((data) => {
    dispatch(registerUser(data));
  });

  return (
    <>
      <div className="register">
        <h3>Register</h3>
        <div className="register_form">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
            />

            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
            />

            <input
              type="text"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password?.message}

            <input
              type="text"
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword?.message}

            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
