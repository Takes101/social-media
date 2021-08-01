const { User } = require('../models');

const userData = [{
        email: 'william@william.com',
        password: 'abcdefg12345678'

    },
    {
        email: 'willy@willy.com',
        password: '12345123456789'
    },
    {
        email: 'bagels@bread.com',
        password: '123456789012'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;