const express = require('express')
const cors = require("cors")

class Server {
  constructor(){
    this.app = express()
    this.port = process.env.PORT || 3000
    this.routePathUsers = "/api/users"

    //Middelwares
    this.middlewares()

    //App routes
    this.routes()
  }

  middlewares() {
    //CORS
    this.app.use(cors())

    //Body parse and read
    this.app.use(express.json())

    //public dir
    this.app.use(express.static("public"))
  }

  routes() {
    this.app.use(this.routePathUsers, require("../routes/user"))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port:", this.port);
    })
  }
}

module.exports = Server
