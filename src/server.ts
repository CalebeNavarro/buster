import app from "./app";

const PORT = process.env.PORT || 3000;

( async () => {
  app.listen(PORT, () => console.log("Running at http://localhost:" + PORT));
})();

// (async () => {
//   await AppDataSource.initialize().catch((err) => {
//     console.error("Error during Data Source initialization", err);
//   })

//   app.listen(3000, () => console.log("Running at http://localhost:3000"));
// })()
