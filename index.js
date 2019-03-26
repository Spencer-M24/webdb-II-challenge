// Moduels IMports


const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile.js');






const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here
// CRud start
const db = knex(knexConfig.development);


server.get('/', (req, res) => {
	res.send('Testing Test');
});


server.get('/api/zoos', (req, res) => {
  db('zoos')
    .then(zoos => {
      res.status(200).json(zoos);
    })
    .catch(err => res.status(500).json(err));
});










const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
