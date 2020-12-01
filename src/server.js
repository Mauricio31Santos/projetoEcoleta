const express = require("express")
const server = express()
// pegar o banco de dados

const db = require("./database/db")
//configurar pastar public
server.use(express.static("public"))

//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true}))

//utilizando template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminha da minha aplicação

// pagina inicial

// req: Requisição

// res: Resposta

server.get("/", (req, res) =>{
    return res.render("index.html", { title: "Um Titulo" })
})

server.get("/create-point", (req, res) =>{

    //console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) =>{
    //req.body: o corpo do nosso formulario

     // 2 Inserir os dados na tabela
     const query = `
     INSERT INTO places(
         image, 
         name,
         address,
         address2,
         state,
         city,
         items
     ) VALUES (?,?,?,?,?,?,?);
`
const values = [
 req.body.image,
 req.body.name,
 req.body.address,
 req.body.address2,
 req.body.state,
 req.body.city,
 req.body.items
 
]

function afterInsertData(err){
 if (err){
     console.log(err)
     return res.send("Erro no cadastro!")
 }

 console.log("Cadastrado com sucesso")
 console.log(this)

 return res.render("create-point.html", {saved: true})

}
db.run(query, values, afterInsertData)

//Consultar um dado da tabela
db.all(`SELECT * FROM places`, function(err, rows){
 if (err){
     return console.log(err)
 }
 console.log("Aqui estão seus registo")
 console.log(rows)
})


server.get("/search", (req, res) =>{

    const search = req.query.search

    if(search == ""){
        return res.render("search.html", { total: 0 })
    }
    //pegar as informações do banco de dados
    //Consultar um dado da tabela
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if (err){
            return console.log(err)
        }

        const total = rows.length
        // mostrar a pagina html com o dados do banco de dados
        return res.render("search.html", { places: rows, total})
    })
    
})

// ligar o servidor

})
server.listen(3000)