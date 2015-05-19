/**
 * Created by lmarkus on 5/19/15.
 */
module.exports = function(){
    return function(req,res,next){
        console.log('Middleware 1 says hi');
        req.mw1 = true;
        next();
    }
};
