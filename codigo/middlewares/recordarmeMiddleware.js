let fs= require('fs')
function recordarmeMiddleware(req, res, next){
    if(req.cookies.recordarme != undefined && 
        req.session.usuarioLogueado == undefined){
            let usersJSON= fs.readFileSync('users.json',{encoding:'utf-8'});
            let users;
            if (usersJSON== ""){
                users=[];
            }else{
                users= JSON.parse(usersJSON);
            }
            let usuarioLoguearse;
            for(let i=0; i<users.length;i++){
                if(users[i].correo ==req.cookies.recordarme){
                    usuarioLoguearse= users[i];
                    break;
                }
            }
            req.session.usuarioLogueado= usuarioLoguearse;
    }
    next();
}
module.exports=recordarmeMiddleware;