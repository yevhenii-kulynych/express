const express = require("express");
const env = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', require("./routes/api"));


async function connect() {

  try {

    await mongoose.connect(process.env.DB_CONNECTION, {

      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    },
      () => console.log('DB Connected..'))

    app.listen(PORT, () => console.log(`Server up and running on port ${PORT}...`))

  } catch (e) {

    console.log('Error', e);
    process.exit(1);
  }

}

connect()



