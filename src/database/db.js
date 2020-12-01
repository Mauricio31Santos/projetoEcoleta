//importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto de banco de dados, para operações
db.serialize(()=>{

    /*//com commandos SQL eu vou

    // 1 criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

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
        "",
        "Colectoria",
        "Guilherme Geballa, Jardim América",
        "Numero 260",
        "Santa Catarina",
        "Rio do Sul",
        "Residuos Eletronicos, Lampadas"
    ]

    function afterInsertData(err){
        if (err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    
    }
    db.run(query, values, afterInsertData)*/

    //Consultar um dado da tabela
   /*db.all(`SELECT * FROM places`, function(err, rows){
        if (err){
            return console.log(err)
        }
        console.log("Aqui estão seus registo")
        console.log(rows)
    })*/

    // Deletar um dado da tabela
  /* db.run(`DELETE FROM places WHERE id = ?`, [5], function(err){
        if(err){
            return console.log(err)
        }
        console.log("Registro deletado com sucesso!")
    
    })*/
    
})