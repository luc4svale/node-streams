import http from 'node:http'
import { InverseNumberStream } from './transform.js'

const server = http.createServer((req, res) => {
  console.log(req)

  req
  .pipe(new InverseNumberStream())
  .pipe(res)
})

server.listen(3333).on('listening', () => [
  console.log('Server is running on port 3333!')
])