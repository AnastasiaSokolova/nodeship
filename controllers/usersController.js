import dataUsers from '../mocks/users.js';

module.exports = {
    getUsers: (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        console.log(dataUsers);
        res.send(dataUsers.users);
    }
}