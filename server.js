import server from "./index.js"

server.listen(process.env.PORT, () => {
    console.log(`server is runig on port ${process.env.PORT}`)
})
