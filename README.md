# HNG Back End Stage 0 Project 
We are expected to build a simple RESRful API endpoint that returns my profile information along with a dynamic cat fact fetched with an external api provided "https://catfact.ninja/fact"


# The Back End Project Set Up Instructions
**Step 1**: I chose to use Node.js and Express.js for this project and since I had worked previously with Node, I had it already installed which can be done on any web browser by visiting their website.
**Step 2**: In my command prompt I created the project folder using mkdir (name), cd (name). 
**Step 3**: Next I navigated to the project in VSCode and ran this command in the terminal to create the package.json file - npm init -y.
**Step 4**: Then i installed all the dependencies I needed starting with the important one Express.js which is the backbone of the backend server itself.
**Step 5**: After installing all depenedencies I created a file called server.js which is where the api servers are created and maintained.
**Step 6**: Just before creating the api server end point in the server.js file I created a file called .env to store all my environmental variables that would eventually be used in the server development.
**Step 6**: After my folder structure was complete, I began working on the api server.


# How to run this project locally
## Clone this repository
git clone https://github.com/Avan-Kel/HNG-BE-GRADE-0.git

## Navigate into the project directory
cd HNG-BE-GRADE-0

## Install dependencies
npm install

## Create a .env file in the root directory and add the environmental variables needed:
Example: PORT=3000

## Start the server
node server.js


# Environmental Variables Needed
PORT = 3005
USER_NAME= "full name here"
USER_EMAIL = "email address here"
USER_STACK = "stack here"