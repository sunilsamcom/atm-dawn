// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {logger} from '@app/services/logger'
export default function handler(req, res) {
  try {
    console.group("start group log")
    console.log("Hello world")
    console.groupEnd()
    logger.info("JSON: ", JSON.stringify({hello: "world"}))
    throw new Error("some error on some error.")
  } catch (error) {
    logger.error(error.stack)
  }
  res.status(200).json({ name: 'John Doe' })
}
