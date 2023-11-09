"use client"
import { Formik, Form, ErrorMessage } from "formik"
import {
     Button,
     TextField,
     Box,
     Typography,
     InputAdornment,
     Divider,
} from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { useState } from "react"
import Link from "next/link"

import { useSchemasRegister } from "../../validate/validate"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
const Register = () => {
     const router = useRouter()
     const fectchData = async (account: {
          email: string
          password: string
          username: string
     }) => {
          const response = await axios.post(
               "http://localhost:8080/auth/sign_up",
               {
                    email: `${account.email}`,
                    password: `${account.password}`,
                    username: `${account.username}`,
               }
          )
          return response.status
     }
     // const [emailRegister, setEmailRegister] = useState<string>("")
     // const { status } = useQuery({
     //      queryKey: ["checkEmail", emailRegister],
     //      queryFn: () => fectchData(emailRegister),
     // })

     const [checkEye, setCheckEye] = useState<boolean>(true)
     const [checkEyeConfirm, setCheckEyeConfirm] = useState<boolean>(true)
     const initialValues: MyFormValuesRegister = {
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
     }
     return (
          <>
               <Box className="bg-[#f0f2f5] w-screen h-screen  flex justify-center items-center">
                    <Box className="w-[430px] h-[570px]  shadow-lg bg-white rounded-lg flex  flex-col gap-5 justify-center items-center">
                         <Typography variant="h3" className="">
                              Register
                         </Typography>
                         <Formik
                              initialValues={initialValues}
                              validationSchema={useSchemasRegister}
                              onSubmit={async (values, actions) => {
                                   // actions.preventDefault();
                                   const account = {
                                        email: values.email,
                                        password: values.password,
                                        username: values.name,
                                   }

                                   try {
                                        const data = await fectchData(account)
                                        console.log(data)
                                        router.push("/login")
                                   } catch (error) {
                                        alert("Email đã tồn tại")
                                   }

                                   actions.setSubmitting(false)
                              }}
                         >
                              {(formikProps) => (
                                   <Form className="flex flex-col gap-[30px] justify-center items-center">
                                        <Box className=" relative">
                                             <TextField
                                                  variant="outlined"
                                                  label="Tên người dùng"
                                                  className="h-[52px] w-[365px]"
                                                  name="name"
                                                  onChange={
                                                       formikProps.handleChange
                                                  }
                                                  onBlur={
                                                       formikProps.handleBlur
                                                  }
                                                  error={
                                                       formikProps.touched
                                                            .name &&
                                                       Boolean(
                                                            formikProps.errors
                                                                 .name
                                                       )
                                                  }
                                             ></TextField>
                                             <ErrorMessage
                                                  name="name"
                                                  className=""
                                             >
                                                  {(msg) => (
                                                       <Typography className="text-base text-red-600 absolute top-[54px]">
                                                            {msg}
                                                       </Typography>
                                                  )}
                                             </ErrorMessage>
                                        </Box>
                                        <Box className=" relative">
                                             <TextField
                                                  variant="outlined"
                                                  label="Email"
                                                  className="h-[52px] w-[365px]"
                                                  name="email"
                                                  onChange={
                                                       formikProps.handleChange
                                                  }
                                                  onBlur={
                                                       formikProps.handleBlur
                                                  }
                                                  error={
                                                       formikProps.touched
                                                            .email &&
                                                       Boolean(
                                                            formikProps.errors
                                                                 .email
                                                       )
                                                  }
                                             ></TextField>
                                             <ErrorMessage name="email">
                                                  {(msg) => (
                                                       <Typography className="text-base text-red-600 absolute top-[54px]">
                                                            {msg}
                                                       </Typography>
                                                  )}
                                             </ErrorMessage>
                                        </Box>
                                        <Box className=" relative">
                                             <TextField
                                                  variant="outlined"
                                                  type={
                                                       checkEye
                                                            ? "password"
                                                            : "text"
                                                  }
                                                  label="Mật khẩu"
                                                  name="password"
                                                  onChange={
                                                       formikProps.handleChange
                                                  }
                                                  onBlur={
                                                       formikProps.handleBlur
                                                  }
                                                  error={
                                                       formikProps.touched
                                                            .password &&
                                                       Boolean(
                                                            formikProps.errors
                                                                 .password
                                                       )
                                                  }
                                                  InputProps={{
                                                       endAdornment: (
                                                            <InputAdornment
                                                                 position="start"
                                                                 onClick={() => {
                                                                      setCheckEye(
                                                                           !checkEye
                                                                      )
                                                                 }}
                                                            >
                                                                 {checkEye ? (
                                                                      <VisibilityIcon />
                                                                 ) : (
                                                                      <VisibilityOffIcon />
                                                                 )}
                                                            </InputAdornment>
                                                       ),
                                                  }}
                                                  className="h-[52px] w-[365px]"
                                             ></TextField>
                                             <ErrorMessage name="password">
                                                  {(msg) => (
                                                       <Typography className="text-base text-red-600 absolute top-[54px]">
                                                            {msg}
                                                       </Typography>
                                                  )}
                                             </ErrorMessage>
                                        </Box>
                                        <Box className=" relative">
                                             <TextField
                                                  type={
                                                       checkEyeConfirm
                                                            ? "password"
                                                            : "text"
                                                  }
                                                  variant="outlined"
                                                  label="Nhập lại mật khẩu"
                                                  name="passwordConfirm"
                                                  onChange={
                                                       formikProps.handleChange
                                                  }
                                                  onBlur={
                                                       formikProps.handleBlur
                                                  }
                                                  error={
                                                       formikProps.touched
                                                            .passwordConfirm &&
                                                       Boolean(
                                                            formikProps.errors
                                                                 .passwordConfirm
                                                       )
                                                  }
                                                  InputProps={{
                                                       endAdornment: (
                                                            <InputAdornment
                                                                 position="start"
                                                                 onClick={() => {
                                                                      setCheckEyeConfirm(
                                                                           !checkEyeConfirm
                                                                      )
                                                                 }}
                                                            >
                                                                 {checkEyeConfirm ? (
                                                                      <VisibilityIcon />
                                                                 ) : (
                                                                      <VisibilityOffIcon />
                                                                 )}
                                                            </InputAdornment>
                                                       ),
                                                  }}
                                                  className="h-[52px] w-[365px]"
                                             ></TextField>
                                             <ErrorMessage name="passwordConfirm">
                                                  {(msg) => (
                                                       <Typography className="text-base text-red-600 absolute top-[54px]">
                                                            {msg}
                                                       </Typography>
                                                  )}
                                             </ErrorMessage>
                                        </Box>

                                        <Button
                                             type="submit"
                                             variant="contained"
                                             className="h-[52px] w-[365px] normal-case text-2xl"
                                        >
                                             Đăng kí
                                        </Button>
                                   </Form>
                              )}
                         </Formik>

                         <Link
                              href={"/login"}
                              className="hover:bg-[#469436] hover:scale-90 h-[52px] w-[180px] bg-[#42b72a] rounded-lg flex text-white justify-center items-center no-underline "
                         >
                              Đăng nhập
                         </Link>
                    </Box>
               </Box>
          </>
     )
}
export default Register
