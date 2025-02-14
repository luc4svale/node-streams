import http from 'node:http'
import { InverseNumberStream } from '../transform.js'

const server = http.createServer(async (req, res) => {
  const buffers = []
  for await (const chunck of req) {
    buffers.push(chunck)
  }

  const completeStream = Buffer.concat(buffers).toString()
  res.end(completeStream)



  /*
  req
  .pipe(new InverseNumberStream())
  .pipe(res)
  */
})

server.listen(3333).on('listening', () => [
  console.log('Server is running on port 3333!')
])