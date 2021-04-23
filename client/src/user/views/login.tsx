import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { UserReturned, loginUser } from "../";
import { AppState } from "../../common/redux/rootStore";
import { LoginUser } from "../";
import "./login.scss";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserReturned>();
  const dipatch = useDispatch();
  const history = useHistory();
  const { response, loading, error } = useSelector(
    (state: AppState) => state.user
  );
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!loading && error === "" && (response as LoginUser).token) {
      localStorage.setItem("token", (response as LoginUser).token);
      localStorage.setItem(
        "user",
        JSON.stringify((response as LoginUser).user)
      );

      history.push("/");
      history.go(0);
    }
  }, [history, loading, error, response]);

  const onSubmit = handleSubmit((data) => dipatch(loginUser(data)));

  return (
    <>
      {token ? (
        <Redirect to="/" />
      ) : (
        <div className="login">
          <h3>Login</h3>
          <form onSubmit={onSubmit} className="login_form">
            <input
              type="text"
              placeholder="UserName"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
            <input
              type="text"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span style={{ color: "red", transition: "0.3s" }}>
                This field is required
              </span>
            )}
            <input type="submit" value="Login" />
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
