/*
 *  Document    : SignupForm.js
 *  Author      : Novac
 *  Description : SignUpValidation
 */

import { useState } from "react";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { Spinner, Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import Cookies from "js-cookie";
//components
import Buttons from "../Components/Controls/Buttons";
import Forms from "../Components/Controls/Forms";
import FormikErrorMessage from "../Components/Controls/ErrorMessage";
import axios from "../../axios";

const SignupForm = () => {
  //usestate
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const router = useNavigate();

  //Formik InitialValue
  const initialvalue = {
    email: "",
    password: "",
  };
  //formik validation
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialvalue,
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Enter Email"),
      password: Yup.string().required("Enter password"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      router("/");
      const data = {
        email: values.email,
        password: values.password,
      };
      console.log("%c Line:55 🍪 data", "color:#4fff4B", data);
      router("/");
      //   axios
      //     .post("/v1/BugToolAdmin/login", data)
      //     .then((res) => {
      //       setLoading(false);
      //       //   Cookies.set("UserData", res.data.users._id);
      //       router.push("/");
      //     })
      //     .catch((error) => {
      //       if (error.response) {
      //         setLoading(false);
      //         seterrorMessage(error.response.data.message);
      //       }
      //     });
    },
  });

  return (
    <div className="grid grid-cols-12 font-light relative">
      <div className="col-span-12">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex-col w-5/6 justify-self-center">
            {errorMessage && (
              <div className="pb-5">
                <Alert status="error">
                  <AlertIcon />
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              </div>
            )}
            <Forms className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="relative">
                <input
                  name="email"
                  autoComplete="on"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.email && formik.errors.email
                      ? "input-primary font-semibold ring-2 ring-secondary border-none"
                      : "input-primary font-semibold"
                  }
                />
                <div className="hidden lg:block">
                  <span className="input-inline-icon text-xl">
                    <i className="cursor-pointer">
                      <BsFillPersonFill />
                    </i>
                  </span>
                </div>
              </div>
              {formik.touched.email && formik.errors.email ? (
                <FormikErrorMessage>{formik.errors.email}</FormikErrorMessage>
              ) : null}
              <div className="relative">
                <input
                  type={showPwd ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.password && formik.errors.password
                      ? "input-primary font-semibold ring-2 ring-secondary border-none "
                      : "input-primary font-semibold"
                  }
                />
                <span className="input-inline-icon text-base">
                  <i
                    onClick={() => setShowPwd(!showPwd)}
                    className="cursor-pointer"
                  >
                    {showPwd ? (
                      <BsFillEyeFill className="text-primary" />
                    ) : (
                      <BsFillEyeSlashFill />
                    )}
                  </i>
                </span>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <FormikErrorMessage>
                  {formik.errors.password}
                </FormikErrorMessage>
              ) : null}
              <Buttons
                type="submit"
                className="w-full h-12 rounded-xl font-semibold bg-primary text-whitecolor mt-4"
              >
                {loading ? (
                  <Spinner size="xs" colorScheme="whiteAlpha" />
                ) : (
                  "SignUp"
                )}
              </Buttons>
            </Forms>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
