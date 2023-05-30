// Importing required modules
const puppeteer = require("puppeteer");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

let data;

// Creating an express app
const app = express();
const port = process.env.PORT || 5000;

(async () => {
  // Launching puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigating to the page with motivational quotes
  await page.goto('https://www.shopify.com/blog/motivational-quotes');

  // Extracting data from the page
  const list = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('ol>li')).slice(3).map((item) => item.innerText);
    return items;
  });

  // Closing the browser
  await browser.close();

  // Setting the data in the app object
  app.set("data", list);
})();

// Adding middleware to the app
app.use(cors({
  origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Starting the server
const server = app.listen(port, () => {
  
  // Logging that the server is listening on a specific port
  console.log(`[Server] Listening on http://localhost:${port}`);
});

// Loading routes
console.log("[Server] Loading routes:");
require("./loader").load(app);

// Closing the server gracefully
async function close() {
  
  // Closing the server and exiting the process with status code of zero (success)
  server.close();
  process.exit(0);
}

process.on("uncaughtException", (error) => {
  
  // Logging that an error occurred in the process and printing it to console.
  console.log("[PROCESS] An error occured:")
  console.error(error);
});

process.on("exit", () => close());
process.on("SIGTERM", () => close());
process.on("SIGINT", () => close());
process.on("SIGHUP", () => close());
process.on("SIGUSR2",() => close());
process.on("beforeExit", () => close());