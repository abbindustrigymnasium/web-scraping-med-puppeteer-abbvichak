const fs = require('fs');
const { Router } = require('express');

// This function returns a new function that wraps the given function with error handling middleware.
const handleErrorAsync = (func) => async (request, response, next) => {
 try {
 await func(request, response, next);
 } catch (err) {
 next(err);
 }
}

// This function loads a single route file.
function load_route_file(app, path, file) {
 const folder_router = Router();

 // If the file is a directory, recursively load all files in the directory.
 if (fs.lstatSync(`./routes${path}${file}`).isDirectory()) {
 load_routes(app, `${path}${file}/`);
 } else {
 const event = require(`./routes${path}${file}`);
 const name = file.split('.')[0];

 // Check that the required properties are present and have the correct types.
 if (typeof event.run !== 'function' || typeof event.method !== 'string' || typeof event.subpath !== 'string') {
 console.log(`\t${name}: ERROR Incorrect file format`);
 return;
 }

 // Add a new route to the router instance with the specified method and subpath and call the run function with error handling middleware.
 folder_router[event.method](`/${event.subpath}`, handleErrorAsync(event.run.bind(null)));
 console.log(`\t${event.method.toUpperCase()}\t${name}: ${path}${event.subpath}`);
 }

 // Mount the router instance at the specified path.
 app.use(path, folder_router);
}

// This function loads all route files in the specified directory.
function load_routes(app, path = '/') {
 fs.readdirSync(`./routes${path}`)
 .forEach((file) => load_route_file(app, path, file));
}

// This function sets the maximum number of listeners to 10 and loads all route files.
function load(app) {
 app.setMaxListeners(10);
 load_routes(app);
} 

module.exports = { load }
