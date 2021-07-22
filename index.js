const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//Midlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
const postCategoryRoutes = require('./routes/postCategory');

app.use('/post-categories', postCategoryRoutes);

app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
})
