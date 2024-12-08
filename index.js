// =========================Class 6 express ======================
// ============================Node js route creating=================
// const http = require("http");
// const chalk = require("chalk");

// http
//   .createServer((req, res) => {
//     if (req.url == "/" && req.method == "GET") {
//       req.on("data", (chunk) => {
//         let { name, email } = JSON.parse(chunk);
//         res.end(email);
//       });
//     } else {
//       res.end("404 not found");
//     }
//   })
//   .listen(3000, () => {
//     console.log(chalk.bgYellow.black("surver is running!"));
//   });

// const chalk = require("chalk");
// const http = require("http");

// http
//   .createServer((req, res) => {
//     if (req.url == "/" && req.method == "GET") {
//       res.end("Home route");
//     } else if (req.url == "/about" && req.method == "POST") {
//       req.on("data", (chunk) => {
//         let { name, email } = JSON.parse(chunk);
//         res.end(email);
//       });
//     } else {
//       res.end("404 not found");
//     }
//   })
//   .listen(3000, () => {
//     console.log(chalk.bgRed.green("surver is running"));
//   });

// const chalk = require("chalk");
// const http = require("http");

// http
//   .createServer((req, res) => {
//     if (req.url == "/" && req.method == "GET") {
//       res.end("HOME ROUTE");
//     } else if (req.url == "/About" && req.method == "POST") {
//       req.on("data", (chunk) => {
//         let { name, email } = JSON.parse(chunk);
//         res.end(email);
//       });
//     } else {
//       res.end("404 Not Found");
//     }
//   })
//   .listen(3000, () => {
//     console.log(chalk.bgBlue.red("surver is running"));
//   });

// ==============================Express=====================================

// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json());

// app.get("/user", (req, res) => {
//   let data = [
//     {
//       name: "kayesmolla",
//       email: "kayesmolla124@gmail.com",
//     },
//     {
//       name: "fahmida",
//       email: "fahmida@gmail.com",
//     },
//     {
//       name: "Ashik",
//       email: "Ashik@gmail.com",
//     },
//     {
//       name: "Rabbani",
//       email: "Rabbani@gmail.com",
//     },
//     {
//       name: "Nafisa",
//       email: "Nafisa@gmail.com",
//     },
//   ];
//   res.status(201).send(data);
// });
// app.post("/About", (req, res) => {
//   res.send(req.body);
// });

// app.listen(port, () => {
//   console.log(`surver is running at port number ${port}`);
// });
// ============================end=========================
// ===============================Class 07 start ============================

// const fs = require("fs");

// fs.readFile("newfile.txt", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });
// ==================Buffer=======================
// let buffer = Buffer.from("Hello Node js");

// console.log(buffer);
// =====================================================
// ========================stream==========================

// const fs = require("fs");

// const readFileStream = fs.createReadStream("newfile.txt", "utf-8");
// const writeFileStream = fs.createWriteStream("Output.txt", "utf-8");

// readFileStream.pipe(writeFileStream);
// =================================================================
// ============================nodejs event emitter==========================

// const express = require("express");
// const app = express();
// const EvenEmitter = require("events");
// const event = new EvenEmitter();
// let count = 0;
// const port = 3000;

// event.on("visit", () => {
//   count++;
//   console.log(`visited user ${count}`);
// });

// app.get("/", (req, res) => {
//   res.end("User home route");
//   event.emit("visit");
// });
// app.post("/post", (req, res) => {
//   res.end("user post route");
//   event.emit("visit");
// });
// app.listen(port, () => {
//   console.log(`server is running at port number ${port}`);
// });
// ==========================================================================
// =============================Query Parameter=================================

// FULL CLASS-7 REVIEW:

// const chalk = require("chalk");//USING CHALK
// const express = require("express");//REQUIRE EXPRESS
// const app = express();
// const port = 3000;
// const EvenEmitter = require("events");//EVENT EMITTER
// const event = new EvenEmitter();
// let count = 0;

// event.on("visit", () => {//TRACKING VISITER
//   count++;
//   console.log(`visited user ${count}`);
// });

// app.get("/Home/:name", (req, res) => {
//   console.log(req.params.name);
//   res.status(201).send(`user id is ${req.params.name}`);
//   event.emit("visit");
// });
// app.get("/query", (req, res) => { //QUERY PARATEMER
//   let { name, id } = req.query;
//   res.send({
//     username: name,
//     userid: id,
//   });
// });
// app.post("/about", (req, res) => {
//   res.end("User about route");
//   event.emit("visit");
// });
// app.use((req, res) => {
//   res.status(404).send("Not found");
// });
// app.listen(port, () => {
//   console.log(chalk.yellow(`Server is running at port number ${port}`));
// });

// =========================CLASS 8===========================================
// const express = require("express");
// const app = express();
// const port = 3000;
// app.use(middlecheck); //middleware set globally
// app.use(express.json());

// function middlecheck(req, res, next) { //middleware
//   let result = true;
//   if (result) {
//     req.id = 123;
//     next();
//   } else res.send("Error");
// }
// app.get("/", middlecheck, (req, res) => { //by using middlecheck we can make middleware to a specific router
//   res.send({ id: req.id });
// });

// app.get("/About", (req, res) => {
//   console.log(req.id);
//   res.send("About route");
// });

// app.get("/users", (req, res) => {
//   res.send({ msg: "success" });
// });
// app.get("/users", (req, res) => {
//   res.send(user);
// });
// app.get("/about", (req, res) => {
//   res.send("about");
// });
// app.use((req, res) => {
//if user searches a route that isnt presented in the website
// this has to placed at the bottom .
//   res.status(400).send("Route not found");
// });

// app.use((err, req, res, next) => {//error handler middleware
//   if (err.message) {
//     res.status(400).send(err.message);
//   } else res.status(400).send("error message");
// });

// app.listen(port, () => {
//   console.log(`Server is Running at port number ${port}`);
// });

// const chalk = require("chalk");
// const express = require("express");
// const app = express();
// app.use(middleware);
// app.use(express.json());
// const port = 3000;

// function middleware(req, res, next) {
//   const result = true;
//   if (result) {
//     req.id = 132;
//     next();
//   } else res.send("error");
// }

// app.get("/Home", middleware, (req, res) => {
//   console.log(req.id);
//   res.send({ id: req.id });
// });
// app.get("/About", (req, res) => {
//   res.send(req.body);
// });
// app.listen(port, () => {
//   console.log(chalk.bgYellow.red("server is running"));
// });
// ===============================================================================
// =================================CLASS 09====================================

const chalk = require("chalk");
const express = require("express");
const {
  usercontroller,
  userInfoController,
} = require("./Controller/UserController");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 4000;

// const info = [
//   {
//     Name: "Kayes",
//     age: 23,
//   },
//   {
//     Name: "Nahid",
//     age: 22,
//   },
//   {
//     Name: "Samim",
//     age: 25,
//   },
//   {
//     Name: "Siyam",
//     age: 10,
//   },
// ];

// app.get("/", (req, res) => {
//   res.send(`
//    <form method="POST" action="/info">
//    <input name="name" type="text"/>
//    <input name="age" type="text"/>
//    <input value="Submit" type="Submit"/>
//    </form>
//     `);
// });
// let info = [];
// app.post("/info", (req, res) => {
//   info.push(req.body);
//   return res.send(info);
// });

// app.post("/Home", (req, res) => {
//   console.log(req.headers.authorization);
//   res.send("authorization is not founded");
// if (req.headers.token == 123456) {
//   console.log(req.headers.token);
//   return res.send(info);
// } else return res.end("Token not found");
//});
app.get("/", usercontroller);

app.post("/user", userInfoController);

app.use((req, res) => {
  res.status(404).send({ msg: "404 not found" });
});

app.listen(port, () => {
  console.log(chalk.bgYellow.red(`server is running at port number ${port}`));
});
