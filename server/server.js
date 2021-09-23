const express = require('express');
const cors = require('cors');
const db = require('./models/index')
const userRoutes = require('./routes/user.routes');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
}

app.use(cors(corsOptions));

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

// Database connection
db.mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database');
}).catch(err => {
  console.log('Unable to connect to database', err)
  process.exit();
});

// Router
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})