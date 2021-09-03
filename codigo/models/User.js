const fs = require('fs');

const User = {
    filename: './data/users.json',
    getData: function(){
            return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },
    findAll: function(){
        return this.getData();
    },
    findByField: function(field, text){
        const allUsers = this.findAll();
        const userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    }
}

module.exports = User;
