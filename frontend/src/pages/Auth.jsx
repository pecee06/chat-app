import { Container, Input, Button } from "../components"
import { useState } from "react"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import { useForm } from "react-hook-form"

const Auth = () => {
  const [signupPage, setSignupPage] = useState(true) // false value means its a login page
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, setValue, formState } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      dp: ""
    }
  })
  const { errors } = formState

  return (
    <Container
      element="main"
      className="min-h-screen flex flex-col items-center gap-10 p-10"
    >
      <h1 className="text-[3vmax] bg-violet-800 text-white font-bold py-2 px-4 rounded-lg">
        Chat App
      </h1>
      <Container className="flex flex-col gap-5 border border-violet-800 p-8">
        <div className="flex justify-evenly">
          <Button
            label="Signup"
            className={`text-gray-700 ${
              signupPage ? "bg-blue-200" : "bg-white"
            } transition-all p-2 rounded-lg text-lg w-full`}
            onClick={() => {
              setSignupPage(true)
            }}
          />
          <Button
            label="Login"
            className={`text-gray-700 ${
              signupPage ? "bg-white" : "bg-blue-200"
            } transition-all p-2 rounded-lg text-lg w-full`}
            onClick={() => {
              setSignupPage(false)
            }}
          />
        </div>
        <form noValidate className="flex flex-col gap-5">
          {signupPage && (
            <Input
              placeholder="Enter Your Name"
              className="w-full focus:outline-0 bg-slate-100 rounded-lg p-2"
              error={errors.name}
              {...register("name", {
                required: {
                  value: true,
                  message: "This is a required field"
                }
              })}
            />
          )}
          <Input
            type="email"
            placeholder="Enter your Email Address"
            className="w-full focus:outline-0 bg-slate-100 rounded-lg p-2"
            error={errors.email}
            {...register("email", {
              required: {
                value: true,
                message: "This is a required field"
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email"
              }
            })}
          />
          <div className="flex items-center gap-4">
            <Input
              type={showPassword ? "text" : "password"}
              className="w-[30vw] focus:outline-0 bg-slate-100 p-2 rounded-lg"
              placeholder="Enter Password"
              error={errors.password}
              {...register("password", {
                required: {
                  value: true,
                  message: "This is a required field"
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/,
                  message:
                    "Enter a strong password (uppercase, lowercase, special-characters, numbers)"
                }
              })}
            />
            {showPassword ? (
              <IoMdEye
                className="cursor-pointer"
                onClick={() => {
                  setShowPassword(false)
                }}
              />
            ) : (
              <IoMdEyeOff
                className="cursor-pointer"
                onClick={() => {
                  setShowPassword(true)
                }}
              />
            )}
          </div>
          {signupPage && (
            <Input
              type="file"
              label="Upload Your Picture"
              className="w-full focus:outline-0 cursor-pointer"
              {...register("dp")}
            />
          )}
          <Button
            className="bg-violet-800 text-white p-2 rounded-lg transition-all hover:bg-violet-700"
            label={signupPage ? "Signup" : "Login"}
            onClick={handleSubmit((formData) => {
              const file = formData.dp[0]
              console.log(formData, file)
            })}
          />
        </form>
      </Container>
    </Container>
  )
}

export default Auth
