module.exports = {
    subpath: 'data',
    method: 'get',
    run: async function(request, response) {
        response.send("Hello, Data!");
    }
}