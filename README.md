# JWTAuthentication

Backend deployed at: https://jwtauthentication-6.onrender.com/

Frontend deployed at: https://jwtauthentication-vr8f.onrender.com/

Dashboard lists all the users in database:
![Untitled](https://github.com/user-attachments/assets/894a3785-c09e-418c-9af8-089941af7f35)

Login Page looks like:
![Untitled](https://github.com/user-attachments/assets/f0cd2245-5202-4686-b94e-057b722d7a99)

To use the application in localhost

clone repo in local system using these commands

git clone repo
cd AUTHENTICATION/JWT-node/src
npm install
set the DB_URL of your mongodb cluster in .env file
node app.js

Backend starts to run now change directory to frontend

cd jwt-react
change the urls from deployed backend url to your localhost URL
npm start
