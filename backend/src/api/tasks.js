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

router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    const task = todos.find((t) => t.id === Number(id));
    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: 'Not found' });
    }
});

router.post('/', (req, res) => {
    const { id, name } = req.body;
    todos.push({ id, name });
    res.status(201).json({ message: 'Created' });
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const index = todos.findIndex((t) => t.id === Number(id));
    const updatedTask = {
        id: Number(id),
        name,
    };
    todos[index] = updatedTask;
    res.status(200).json({ message: 'Updated' });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter((t) => t.id !== Number(id));
    res.status(200).json({ message: 'Deleted' });
});

module.exports = router;
