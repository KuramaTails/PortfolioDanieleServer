const mongoose = require("mongoose");
module.exports = async () => {
  await mongoose
    .connect(process.env.DATABASE_TOKEN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB", err));
  if (mongoose.connection.readyState === 1) {
    console.log("Successfully connected to database");
  }
  return mongoose;
};
