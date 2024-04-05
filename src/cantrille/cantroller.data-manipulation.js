import { userMetaData } from "../models/usare.model.js";
/* name: Ajit kumar pal
email: palajit29@gmail.com
password: Password */
const userData = new userMetaData 
export class metaData{
    register(req, res){
        console.log(req.body)
        userData.addUser(req.body)
        res.redirect("/login")
    }
    getuser(req, res){
        const responce = userData.getuser(req.body.email, req.body.password, req);
        if(responce){
            res.redirect("/")
        }else{
            res.render("login",{layout:false})
        }
    }
    logout(req, res){
        req.session.destroy((err) => {
            if (err) {
              console.log(err);
            } else {
                res.redirect("/")
            }
          });
        
    }
    job(req, res){
        userData.addNewJob(req.body)
        console.log(req.body)
        res.redirect("/jobs")
    }
    apply(req, res){
        req.body.resumeUrl = "cv/"+req.file.filename;
        const responce = userData.addResume(req.params.jobId,req.body)
        res.send(responce)
    }
    
}