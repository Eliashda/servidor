const http = require('http')
const { soma } = require('./script')
const PORT = 8000

const server = http.createServer((req,res) => {
    let valores = (req.url
        .replace('/','')
        .replace('?','')
        .split('&'))
        let parametros = {}
        for (item in valores){
            let chaveValor = valores[item].split('=')
            parametros[chaveValor[0]] = Number(chaveValor[1])
        }
        console.log(parametros)
    let resultado = soma(parametros.a,parametros.b)
    res.end(`o resultado ficou em ${resultado}`)
})



server.listen(PORT,() => {
    console.log(`o server foi iniciado na porta ${PORT}`)
})

