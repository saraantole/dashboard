const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/dashboardDao', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const db = mongoose.connection

module.exports = db