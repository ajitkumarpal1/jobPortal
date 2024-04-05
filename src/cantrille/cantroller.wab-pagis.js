import path from "path"
import { userMetaData , postJobMetaData, jobsList } from "../models/usare.model.js";

/* const viewPath = path.join(path.resolve(), "src", "view")  */
const UMD = new userMetaData()
const userData = (email) => {
  return (UMD.getByMail(email));
}; 
export default class pages {
  home = (req, res) => {
    console.log(req.session)
    res.render("sub-child/home",{data : userData(req.session.email)});
  };
  jobs(req, res) {
    res.render("sub-child/jobs",{
      data : userData(req.session.email),
      jobsList : jobsList
    });
  }
  job(req, res) {
    /* console.log(UMD.getParticularJob(req.params.jobId)) */
    console.log(userData(req.session.email))
    res.render("sub-child/job",{
      data : userData(req.session.email),
      jobData : UMD.getParticularJob(req.params.jobId),
      aplyId: req.params.jobId
    });
  }
  applicants(req, res) {
    console.log(UMD.getParticularJob(req.params.applicantId))
    res.render("sub-child/applicants",{
      data : userData(req.session.email),
      applicant: UMD.getParticularJob(req.params.applicantId)
    });
  }
  postjob(req, res) {
    if(userData(req.session.email)){
      return res.render("sub-child/postjob",{
        data : userData(req.session.email),
        jobMetaData:postJobMetaData,
      });
    }
    res.render("404",{data : userData(req.session.email)}); 
  }
  login(req, res) {
    res.render("login", { "layout": false });
  }
  register(req, res) {
    res.render("register", { 
      data : userData(req.session.email),
      /* "layout": false */
   });
  }
}