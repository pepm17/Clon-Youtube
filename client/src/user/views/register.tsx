import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser, registerUser } from "../";
import { AppState } from "../../common/redux/rootStore";
import { useHistory, Redirect } from "react-router-dom";
import { useEffect } from "react";
import "./register.scss";

const Register = () => {
  const token = localStorage.getItem("token");

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
    data.photo = ((data.photo as unknown) as FileList)[0];

    dispatch(registerUser(data));
  });

  return (
    <>
      {token ? (
        <Redirect to="/" />
      ) : (
        <div className="register">
          <h3>Register</h3>
          <div className="register_form">
            <form onSubmit={onSubmit} className="register_form">
              <input
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span style={{ color: "red" }}>This field is required</span>
              )}

              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span style={{ color: "red" }}>This field is required</span>
              )}

              <input type="file" {...register("photo")} />

              <input
                type="text"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password?.message}
              {errors.password && (
                <span style={{ color: "red" }}>This field is required</span>
              )}

              <input
                type="text"
                placeholder="Confirm Password"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <span style={{ color: "red" }}>This field is required</span>
              )}

              <input type="submit" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
