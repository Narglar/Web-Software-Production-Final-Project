const express = require('express');
const router = express.Router();
let todos = [
    {
        id: 1,
        name: 'Wolk dogs',
    },
    {
        id: 2,
        name: 'Feed kids',
    },
    {
        id: 3,
        name: 'Homework',
    },
];
router.get('/', (req, res) => {
    res.status(200).json(todos);
});
module.exports = router;