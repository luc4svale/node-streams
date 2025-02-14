import { Readable } from 'node:stream'
import { OneToHundredStream } from "../readable.js";
import { MultiplyByTenStream } from '../writable.js';


async function request() {
  const res = await fetch('http://localhost:3333', {
    method: 'POST',
    body: Readable.toWeb(new OneToHundredStream()),
    duplex: 'half'
  })

  Readable.fromWeb(res.body).pipe(process.stdout)
}

request()