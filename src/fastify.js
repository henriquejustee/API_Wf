const Fastify = require('fastify');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3001;


const fastify = Fastify({
    logger : false
})

fastify.get(('/'), (req, res) => {
    res.send("HEHEHEHE!");
});


fastify.listen(port, () => {
    console.log("Connected!");
});
