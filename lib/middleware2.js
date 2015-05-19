/**
 * Created by lmarkus on 5/19/15.
 */
module.exports = function(){
    return function(req,res,next){
        console.log('Middleware 2 says hi, *from beyond the grave...*');
        req.mw2 = true;
        next();
    }
};
