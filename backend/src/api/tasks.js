const express = require('express');
const router = express.Router();
const tasks = [
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
    res.status(200).json(tasks);
});
module.exports = router;