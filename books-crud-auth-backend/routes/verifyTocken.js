const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
   const tocken = req.header('auth-tocken');
   if (!tocken) return res.status(401).send('Access Denied');

   try{
       const verified = jwt.verify(tocken, process.env.TOKEN_SECRET);
       req.user = verified;
       next();
   } catch (err) {
       res.status(400).send('Invalid Tocken');
   }

}