const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const userRoutes = require('./routes/userRoutes');
const globalErrHandler = require('./controllers/errorController');
const postRoutes=require('./routes/postRoutes');
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "TIKUR Backend REST API",
      version: "1.0.0",
    },
  },
  apis: ['src/routes/userRoutes.js','src/routes/postRoutes.js'],
};
const port = process.env.PORT || "3008";

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/api/v1/users', userRoutes);
app.use('/api/v1/post', postRoutes);
app.get("*", (req, res) => {
  res.send("tikur tech");
});
app.use(globalErrHandler);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports=app;