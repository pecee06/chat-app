import { forwardRef, useId } from "react"
import { Container } from "./"

const Input = forwardRef(
  (
    { label = "", type = "text", placeholder = "", error = {}, ...props },
    ref
  ) => {
    const id = useId()

    return (
      <Container className="flex flex-col gap-3">
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          id={id}
          type={type}
          placeholder={placeholder}
          {...props}
        />
        <p className="text-red-500">{error.message}</p>
      </Container>
    )
  }
)

export default Input
