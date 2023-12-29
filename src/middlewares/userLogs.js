const {appendFileSync} = require('fs')

const userLogs = (req,res,next) => {
    appendFileSync('./src/logs/userLogs.txt' , `El usuario ingreso a la ruta : ${req.url}\n`)
console.log(req.url) 
next()
}





module.exports = userLogs