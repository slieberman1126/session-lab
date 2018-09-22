const express = require('express');
const session = require('express-session');
const app = express();

app.use(
  session({
    secret: 'SunnyB3aches',
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  console.log('SESSION', req.session);
  next();
});

app.use((req, res, next) => {
  if (!req.session.counter) req.session.counter = 0;
  console.log('counter', ++req.session.counter);
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello');
});

app.listen(8080, () => console.log('Listening at http://localhost:8080'));
