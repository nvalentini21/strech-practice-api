const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors({
allowedOrigins: ['localhost:3000']
}));

app.set('port', process.env.PORT || 3001);
app.locals.title = 'F1 Vegas';

app.get('/', (request, response) => {
  response.send('Welcome to F1 Vegas');
});

app.locals.drivers = [
  { id: '1', name: 'Charles', constructor: 'Ferrari' },
  { id: '2', name: 'Max', constructor: 'Red Bull' },
  { id: '3', name: 'Lando', constructor: 'McLaren' }
];

app.get('/api/v1/drivers', (request, response) => {
  const drivers = app.locals.drivers;

  response.json({ drivers });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
