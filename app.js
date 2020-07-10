const express = require("express");
//register view engine ejs - dynamic content, not just pages
const app = express();
//listen for requests - same as const server = http.createServer((req, res) => {
app.listen(3000);

app.set("view engine", "ejs"); //allows us set application settings
//app.set("views", "./myViews") auto express and ejs will look in views folder for ejs - if place in ./views -dont need more config

// app.get("/", (req, res) => {
//   //infers content type and sets auto header so dont need header
//   res.send("hi");
// });

// app.get("/", (req, res) => {
//   //infers content type and sets auto header so dont need header
//   res.sendFile("./views/index.html", { root: __dirname }); //need to specify the root otherwise relative path needs to be from root of computer
// });
// with above can also use a path module

app.get("/", (req, res) => {
  const blogs = [
    { title: "Yoshi finds egges", snippet: "words sdssad" },
    { title: "Kevin finds egges", snippet: "cancel the words sdssad" },
    { title: "Josh finds egges", snippet: "wordsds adas d sdssad" },
  ];
  res.render("index", { title: "home", blogs }); //take a view, render it , send back to browser -uses ejs view engine to auto find and send back to browser
});

// app.get("/about", (req, res) => {
//   //infers content type and sets auto header so dont need header
//   res.sendFile("./views/about.html", { root: __dirname });
// });

app.get("/about", (req, res) => {
  //infers content type and sets auto header so dont need header
  res.render("about", { title: "about" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create new blog" });
});

// //redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("/about"); //auto sets status code so dont need 404 like in server.js
// });

// //404 Page had default path in the case switch in the server.js
// app.use((req, res) => {
//   //   res.sendFile("./views/404.html", { root: __dirname });
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
// }); //use is for middleware and fire middleware functions - if app.get matches then it stops working through
// // the code. if it doesnt get match works its way down and hits

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
