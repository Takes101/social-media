const { Post } = require('../models');

const postData = [{
        title: 'Lorem Ipsum I',
        content: 'Lorem ipsum dolor sit amet',
        user_id: 1

    },
    {
        title: 'Lorem Ipsum II',
        content: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
        user_id: 2
    },
    {
        title: 'Lorem Ipsum III',
        content: 'Ut etiam sit amet nisl purus in mollis.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;