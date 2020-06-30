require('dotenv').config()
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(logger('dev'));
app.use('/api', require('./routes/api'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/osullivanalutrim', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
