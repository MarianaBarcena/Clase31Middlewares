const admins = ['Ada','Greta','Vim','Tim']
const accessAdmin = (req,res,next) =>{
    if (admins.includes(req.query.username)){
      return next()
}
return res.redirect ('/noAccess')
}



module.exports = accessAdmin