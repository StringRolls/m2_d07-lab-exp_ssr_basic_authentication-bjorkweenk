const isLoggedin = (req , res, next)=> {
    if(req.session.currentUser) next()
    else next(new Error("you must login"))
  };
  
  module.exports = {
    isLoggedin,
  
  };