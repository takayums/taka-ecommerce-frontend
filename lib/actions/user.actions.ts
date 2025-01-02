"use server";
import axios from "axios";

export const SignUp = async (userData: SignUpPorps) => {
  const { name, email, password } = userData;
  const existingUser = await axios
    .post(`${process.env.URL_SERVER}/users/`, { name, email, password })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log("Error Response");
        return {
          error: true,
          status: error.response.status,
          message: error.response.data.errors,
        };
      } else if (error.request) {
        console.log("Error Request");
        console.log(error.request);
      } else {
        console.log("Error Message");
        console.log("Error", error.message);
      }
      console.log(error.config);
    });

  return existingUser;
};

export const SignIn = async (userData: SignInProps) => {
  const { email, password } = userData;
  const existingUser = await axios
    .post(`${process.env.URL_SERVER}/users/login`, { email, password })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log("Error Response");
        return {
          error: true,
          status: error.response.status,
          message: error.response.data.errors,
        };
      } else if (error.request) {
        console.log("Error Request");
        console.log(error.request);
      } else {
        console.log("Error Message");
        console.log("Error", error.message);
      }
      console.log(error.config);
    });

  return existingUser;
};
