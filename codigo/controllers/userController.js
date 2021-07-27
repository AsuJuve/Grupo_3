const controller = {
    register: (req, res) => {
        return res.render("users/register",{title:"Registro"});
    },
    login: (req, res) => {
        return res.render("users/login",{title:"Inicia Sesión"});
    },
    loginProcess: (req,res) => {
        return res.send(req.body);
    }
}

module.exports = controller;