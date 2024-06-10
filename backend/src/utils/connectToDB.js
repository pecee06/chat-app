import { connect } from "mongoose"

async function connectToDB() {
  try {
    const res = await connect(`${process.env.ATLAS_URI}/${process.env.DB_NAME}`)
    return res.connection.host
  } catch (error) {
    throw error
  }
}

export default connectToDB
