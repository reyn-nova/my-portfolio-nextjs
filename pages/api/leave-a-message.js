// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Pool } from 'pg'

const { env } = process

const { USER, HOST, DATABASE, PASSWORD, USED_PORT, URI } = env

const pool = new Pool({
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: USED_PORT,
  url: URI
})

export default (req, res) => {
  console.log("CHECK HERE...", USER, HOST, DATABASE, PASSWORD, USED_PORT, URI)

  const { name, phoneOrEmail, message } = req.body

  pool.query(
    `INSERT INTO messages (name, phone-or-email, message) VALUES ($1, $2, $3)`,
    [name, phoneOrEmail, message],
    (err, results) => {
      if(err) {
        res.status(400).json({ api_status: 0, message: `${err.name} : ${err.message}` })
      } else {
        res.status(200).json({ api_status: 1, message: 'success' })
      }
    }
  )
}