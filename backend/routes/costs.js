const express = require('express');
const router = express.Router();
const Cost = require('../models/Cost');

router.post('/', (req, res) => {
  const { description, value, process_id } = req.body;
  Cost.create(description, value, process_id, (err, id) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id });
  });
});

router.get('/', (req, res) => {
  Cost.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Cost.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Cost deleted successfully' });
  });
});

module.exports = router;