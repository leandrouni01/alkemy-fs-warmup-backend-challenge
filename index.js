const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const db = require('./database/DatabaseConection');

require('./models/PostCategory');
require('./models/Post');

db.sync()
.then(()=> {
  console.log("Database synchronized correctly");
})
.catch((err) => {
  console.log(err.message);
})

//Midlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
const postCategoryRoutes = require('./routes/postCategory');

app.use('/post-categories', postCategoryRoutes);

app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
})
