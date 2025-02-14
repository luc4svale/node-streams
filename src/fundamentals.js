import { Readable} from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++
    setTimeout(() => {
      if (i > 100) {
        return this.push(null)
      }
      this.push(String(i)) 
    }, 300)

  }
}

const stream = new OneToHundredStream()
stream.on('data', chunck => {
  console.log(chunck.toString())
})

