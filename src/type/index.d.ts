declare global {
     interface MyFormValues {
          email: string
          password: string
     }
     interface userType {
          userName: string
          passWord: string
     }
     interface MyFormValuesRegister {
          name: string
          email: string
          password: string
          passwordConfirm: string
     }
     interface ResponseSignIn {
          message: string
          access_token: string
          refresh_token: string
     }
}

export {}
