import swaggerJSDoc from "swagger-jsdoc";
import { _dirname } from "../routes/v1/post.js";


const options = {
  definition: {
    openapi: "3.0.0", // Correct OpenAPI version
    info: {
      title: "ImageGram API Documentation",
      version: "1.0.0",
      description: "This is a sample API documentation using Swagger JSDoc",
    },
    servers: [
      {
        url: "http://localhost:3000", //base url of your api
      },
    ],
  },
  apis: [`${_dirname}/*.js`], // files containing annotations as above
};

const swaggerDocs = swaggerJSDoc(options);
export default swaggerDocs;
