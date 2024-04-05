const allData = new Object
allData["palajit29@gmail.com"] = {
    email: "palajit29@gmail.com",
    name: "Ajitkumar pal",
    password: "Password"
}
export const jobsList = new Object
jobsList[1] = {
    email: "palajit29@gmail.com",
    "job_category": "Non Tech",
    "job_designation": "HR SDE",
    "job_location": "Pune IND On-Site",
    "company_name": "yahoo",
    "salary": "1 - 2 LPA",
    "number_of_openings": "5",
    "skills_required": [
        "React",
        "NodeJs",
        "Angular",
        "MongoDB",
        "SpringBoot",
        "Data Structures &amp; Algo"
    ],
    "apply_by": "2024-05-11"
}
jobsList[2] = {
    email: "palajit29@gmail.com",
    "job_category": "Tech",
    "job_designation": "Angular Developer",
    "job_location": "Gurgaon HR IND Remote",
    "company_name": "yahoo",
    "salary": "15 - 16 LPA",
    "number_of_openings": "5",
    "skills_required": [
        "React",
        "NodeJs",
        "Angular",
        "SpringBoot",
    ],
    "apply_by": "2024-05-11"
}
jobsList[gunrateId()] = {
    email: "palajit29@gmail.com",
    "job_category": "Tech",
    "job_designation": "HR SDE",
    "job_location": "Bangalore IND",
    "company_name": "yahoo",
    "salary": "20-26lpa",
    "number_of_openings": "5",
    "skills_required": [
        "React",
        "NodeJs",
        "Angular",
        "Mysql",
        "SpringBoot",
        "Data Structures &amp; Algo"
    ],
    "apply_by": "2024-05-11"
}

export const postJobMetaData = {
    jobCategory: ["Tech", "Non Tech"],
    jobDesignation: [
        "HR SDE",
        "DevOps",
        "MERN Developer",
        "MEAN Developer",
        "JAVA Developer",
        "Front-End Developer",
        "Back-End Developer",
        "Full-Stack Developer"],
    skills: [
        "React",
        "NodeJs",
        "Angular",
        "MongoDB",
        "SQL",
        "Express",
        "Java",
        "SpringBoot",
        "C++",
        "Data Structures &amp; Algo"
    ]
}
export class userMetaData {
    addNewJob(obj){
        jobsList[gunrateId()] = obj;
    }
    addResume(job, obj){
        if(!jobsList[job].applys){
            jobsList[job].applys = []
        }
        jobsList[job].applys.push(obj)
        
        return jobsList[job]
    }
    getParticularJob(id){
        return jobsList[id];
    }
    addUser(obj) {
        obj.dateTime = Date();
        allData[obj.email] = obj
    }
    getuser(email, password, req) {
        console.log(email, password, req)
        if (allData[email]) {
            if (password == allData[email].password) {
                req.session.email = email;
                return true
            }
        }
        return false
    }
    getByMail(email) {
        if (allData[email]) {
            return allData[email]
        }
        return null
    }
}
function gunrateId() {
    const timestamp = new Date().getTime(); // Current timestamp
    const randomString = Math.random().toString(36).substring(2, 8); // Random string (6 characters)
    return `_-${randomString}${timestamp}`;
}