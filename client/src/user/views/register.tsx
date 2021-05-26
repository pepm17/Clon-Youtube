import React from "react";
import { useForm } from "react-hook-form";
import { RegisterUser, registerUser } from "../";
import { AppState } from "../../common/redux/rootStore";
import { useHistory, Redirect } from "react-router-dom";
import { useEffect } from "react";
import "./register.scss";
import { UserState } from "../user.reducer";
import { connect } from "react-redux";

interface StateProps {
  user: UserState;
}

interface DispatchProps {
  registerUserDispatch: (data: RegisterUser) => void;
}

type Props = StateProps & DispatchProps;

const Register = (props: Props) => {
  const token = localStorage.getItem("token");

  const { user, registerUserDispatch } = props;
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
    data.photo = (data.photo as unknown as FileList)[0];

    registerUserDispatch(data);
  });

  return (
    <>
      {token ? (
        <Redirect to="/" />
      ) : (
        <div className="register">
          <h3>Register</h3>
          <form onSubmit={onSubmit} className="register_form">
            <input
              type="email"
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
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password?.message}
            {errors.password && (
              <span style={{ color: "red" }}>This field is required</span>
            )}

            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <span style={{ color: "red" }}>This field is required</span>
            )}

            <input type="submit" />
          </form>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  registerUserDispatch: (data: RegisterUser) => dispatch(registerUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
