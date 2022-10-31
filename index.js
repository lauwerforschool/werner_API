const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1000;

let user = {
    username: "lauraW100",
    password: "test1",
    email: "laura'srealEmail@realemail.com",
    courses: {
        course1: {
            courseId: "1000",
            courseName: "Math",
            startDate: "10/31/2022",
            endDate: "1/31/2022"
        },
        course2: {
            courseId: "1300",
            courseName: "Science",
            startDate: "6/31/2022",
            endDate: "9/31/2022"
        },
        course3: {
            courseId: "2000",
            courseName: "English 101",
            startDate: "1/31/2022",
            endDate: "1/31/2023"
        }
    }
}

app.get('/getUser',(req, res) => {
    try {
        return res.status(200).json(user);
    } catch {
        return res.status(500);
    }
});

app.post("/addUser", (req,res) => {
    try {
        return res.status(200).json("user added successfully");
    } catch {
        return res.status(500);
    }
});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})