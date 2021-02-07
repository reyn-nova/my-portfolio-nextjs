// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Pool } from 'pg'

const { env } = process

console.log(env)

const pool = new Pool({
  user: env['USER'],
  host: env['HOST'],
  database: env['DATABASE'],
  password: env['PASSWORD'],
  port: env['PORT'],
  url: env['URI']
})

export default (req, res) => {
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