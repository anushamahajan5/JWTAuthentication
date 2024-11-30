const express = require("express");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const createAdminAccount = require("./scripts/admin");

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();

app.use("/user", signupRoute);//All routes defined in signupRoute will be prefixed with /user.
//If signupRoute contains a POST /signup route, it will be available at /user/signup.
app.use("/auth",loginRoute);
app.use("/api",userRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
})