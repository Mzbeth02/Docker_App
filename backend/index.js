const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/api/users', (req, res) => {
  res.json({ message: 'Hello from Oleey Backend (Node.js)!' });
});

app.get('/', (req, res) => res.json({ message: 'Backend root. Use /api/users' }));

app.listen(port, () => {
  console.log(`Docker backend app listening on port ${port}!`)
})