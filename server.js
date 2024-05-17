import server from "./index.js"

/* server.listen(process.env.PORT, () => {
    console.log(`server is runig on port ${process.env.PORT}`)
})
 */
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});