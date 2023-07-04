const express= require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const app=express();

dotenv.config();

const Port=process.env.PORT
console.log(process.env.DB)

app.listen(Port,()=>{
    console.log('server is running on port',Port);
})

mongoose
  .connect(process.env.DB, {
    // useNewUrlParser: true, // The underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser.
    // useCreateIndex: true, // Again previously MongoDB used an ensureIndex function call to ensure that Indexes exist and, if they didn't, to create one. This too was deprecated in favour of createIndex . the useCreateIndex option ensures that you are using the new function calls.
    // useFindAndModify: false, // findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
    // useUnifiedTopology: true, // Set to true to opt in to using the MongoDB driver's new connection management engine. You should set this option to true , except for the unlikely case that it prevents you from maintaining a stable connection.
  })
  .then((con) => {
    console.log("DB Connection successful");
  });
// mongoose.connect(process.env.DB)
// .then((con) => {
//     console.log("DB Connection successful");
//   });

app.use(express.json());
app.use(require("./routes/cab"));
app.use(require("./routes/driver"));