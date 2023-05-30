module.exports = {
    subpath: '',
    method: 'get',
    run: async function(request, response) {
        console.log(1111);

        const data = request.app.get("data");

        console.log(data)

        response.send(data);
        
    }
}