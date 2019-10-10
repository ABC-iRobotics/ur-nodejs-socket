const net = require('net')

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    const buf = Buffer.from(data)
    var msgInt = buf.readInt32BE()
    var msgString = buf.toString()
    console.log('socket read than integer: ', msgInt)
    console.log('socket read than string: ', msgString)
  })
})

server.listen(30002, () => {
  console.log('opened server on', server.address())
})
