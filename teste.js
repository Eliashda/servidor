const http = require('http')
const url = require('url')
const { soma } = require('./script')
const PORT = 8000

const server = http.createServer((req,res) => {
    const urlCapturada= url.parse(req.url, true)
    console.log(urlCapturada)
    const {querry} = urlCapturada
    let resultado = soma(Number(querry.a), Number(querry.b))
    res.end(`o resultado ficou em ${resultado}`)
})



server.listen(PORT,() => {
    console.log(`o server foi iniciado na porta ${PORT}`)
})
