import { Transform }from 'node:stream'
import { OneToHundredStream } from './readable.js'
import { MultiplyByTenStream } from './writable.js'

export class InverseNumberStream extends Transform  {
  _transform(chunck, encoding, callback) {
    const transformed = Number(chunck.toString()) * -1

    callback(null, transformed.toString())
  }
}

/*
new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())
*/