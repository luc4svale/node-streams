import { Writable } from 'node:stream'
import { OneToHundredStream } from './readable.js'

class MultiplyByTenStream extends Writable {
  _write(chunck, encoding, callback) {
    const result = Number(chunck.toString()) * 10

    process.stdout.write(`${result.toString()}\n`)

    callback()
  }
}

new OneToHundredStream().pipe(new MultiplyByTenStream())


