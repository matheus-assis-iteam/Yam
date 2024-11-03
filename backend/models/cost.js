const db = require('../db');

class Cost {
  static create(description, value, process_id, callback) {
    const query = 'INSERT INTO costs (description, value, process_id) VALUES (?, ?, ?)';
    db.run(query, [description, value, process_id], function (err) {
      callback(err, this.lastID);
    });
  }

  static getAll(callback) {
    const query = 'SELECT * FROM costs';
    db.all(query, [], (err, rows) => {
      callback(err, rows);
    });
  }

  static delete(id, callback) {
    const query = 'DELETE FROM costs WHERE id = ?';
    db.run(query, [id], callback);
  }
}

module.exports = Cost;
