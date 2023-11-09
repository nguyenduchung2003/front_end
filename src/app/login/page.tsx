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
import logo from "../../../public/img/logo.svg"
import axios, { AxiosResponse } from "axios"
import { useRouter } from "next/navigation"
const Login = () => {
     const router = useRouter()
     const [checkEye, setCheckEye] = useState<boolean>(true)
     const initialValues: MyFormValues = {
          email: "",
          password: "",
     }
     const fectchData = async (account: {
          email: string
          password: string
     }) => {
          const response: AxiosResponse<ResponseSignIn> = await axios.post(
               "http://localhost:8080/auth/sign_in",
               {
                    email: `${account.email}`,
                    password: `${account.password}`,
               }
          )
          return response.data
     }
     return (
          <>
               <Box className="bg-[#f0f2f5] w-screen h-screen  flex justify-center items-center">
                    <Box className="w-[400px] h-[400px] shadow-lg bg-white rounded-lg flex  flex-col gap-5 justify-center items-center">
                         <Typography variant="h3" className="">
                              Login
                         </Typography>
                         <Formik
                              initialValues={initialValues}
                              onSubmit={async (values, actions) => {
                                   console.log(values)
                                   const account = {
                                        email: values.email,
                                        password: values.password,
                                   }

                                   try {
                                        const data = await fectchData(account)
                                        console.log(data.access_token)
                                        console.log(data.refresh_token)

                                        router.push("/")
                                   } catch (error) {
                                        alert(
                                             "Email hoặc mật khẩu không chính xác"
                                        )
                                   }
                              }}
                         >
                              {(props) => (
                                   <Form className="flex flex-col gap-5  justify-center items-center">
                                        <TextField
                                             variant="outlined"
                                             label="Email"
                                             className="h-[52px] w-[365px]"
                                             onChange={props.handleChange}
                                             onBlur={props.handleBlur}
                                             name="email"
                                        ></TextField>

                                        <TextField
                                             variant="outlined"
                                             label="Mật khẩu"
                                             name="password"
                                             onChange={props.handleChange}
                                             onBlur={props.handleBlur}
                                             type={
                                                  checkEye ? "password" : "text"
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
                                        <Button
                                             type="submit"
                                             variant="contained"
                                             className="h-[52px] w-[365px] normal-case text-2xl"
                                        >
                                             Đăng nhập
                                        </Button>
                                        {/* <Divider variant="inset" /> */}
                                   </Form>
                              )}
                         </Formik>

                         <Link
                              href={"/register"}
                              className="hover:bg-[#469436] h-[52px] w-[180px] bg-[#42b72a] rounded-lg flex text-white justify-center items-center no-underline "
                         >
                              Tạo tài khoản mới
                         </Link>
                    </Box>
               </Box>
          </>
     )
}
export default Login
