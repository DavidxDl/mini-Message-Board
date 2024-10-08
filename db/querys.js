const db = require("./pool.js");

async function getAllMessages() {
  const messages = await db.query("SELECT username, message FROM messages")
  return messages.rows;
}

async function insertMessage(username, message) {
  console.log(username, message);
  const results = await db.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [username, message])
  return results;
}

module.exports = {
  getAllMessages,
  insertMessage
}
