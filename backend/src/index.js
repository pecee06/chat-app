import dotenv from "dotenv"
dotenv.config()

import connectToDB from "./utils/connectToDb.js"
import app from "./app.js"

connectToDB()
  .then((res) => {
    console.log(res)
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening at http://localhost:${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.error(error)
  })
