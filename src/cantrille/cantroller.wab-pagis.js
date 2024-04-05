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
    console.log(req.query)
    if(!req.query.search){
      res.render("sub-child/jobs",{
        data : userData(req.session.email),
        jobsList : jobsList
      });
    }else{
      res.render("sub-child/jobs",{
        data : userData(req.session.email),
        jobsList : UMD.search(req.query.search) /* yhape */
      });
    }
    
  }
  job(req, res) {
    /* console.log(UMD.getParticularJob(req.params.jobId)) */
    
    const GPJ = UMD.getParticularJob(req.params.jobId);
    if(GPJ){
      res.render("sub-child/job",{
        data : userData(req.session.email),
        jobData : GPJ,
        aplyId: req.params.jobId
      });
    }
    else{
      res.render("404",{data : userData(req.session.email)
        ,error:"This Job was removed or URL is incarect 🤡"
      }); 
    }
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
    res.render("404",{data : userData(req.session.email),error:"only recruiter is allowed to access this page, login as recruiter to continue"}); 
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
  notFound(req,res){
    res.render("404",{data : userData(req.session.email)
      ,error:"Page Not Found 🙄"
    }); 
  }
}