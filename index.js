import express from "express";
import ejsLayouts from 'express-ejs-layouts';
import pages from "./src/cantrille/cantroller.wab-pagis.js";
import { metaData } from "./src/cantrille/cantroller.data-manipulation.js";
import path from "path";
import session from "express-session";
import { uploadFile } from "./src/models/model.uplod-cv.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(ejsLayouts);
app.use(
    session({
      secret: 'SecretKey',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );

app.set("view engine", "ejs")
app.set("views", path.resolve("src", "views"))
const page = new pages
const data = new metaData
app.get("/",page.home) 
app.get("/jobs",page.jobs)
app.get("/job/:jobId",page.job)
app.get("/job/applicants/:applicantId",page.applicants)
app.get("/postjob",page.postjob)
app.get("/login",page.login)
app.get("/register",page.register)

app.get("/logout",data.logout)
app.post("/register",data.register) //ragistration of new user
app.post("/login",data.getuser) 
app.post("/job",data.job) //post jobs
app.post("/apply/:jobId", uploadFile.single('resume'), data.apply)
export default app