import proj1 from "../component/images/Screenshot (408).png";

import proj2 from "../component/images/3529848.jpg"

import proj3 from "../component/images/iphone-4699057_1920.jpg"

import proj4 from "../component/images/2028991.png";

export const ProjectList = [
  {
    name: "Dynamic Weather-app",
    image: proj1,

    skills: "Nodejs,Ejs,Html,css,Api",
    projectlink: (
      <div>
        <a href="https://github.com/lalatendu65/Dynamic-Weather-app">
          Weather_APP
        </a>
      </div>
    ),
  },
  {
    name: "Usermangement-App ",
    image: proj2,

    skills: "Node.js,Mysql,Ejs,Html,css",
    projectlink: (
      <div>
        <a href="https://github.com/lalatendu65/UserManagement">
          Usermangement
        </a>
      </div>
    ),
  },
  {
    name: "User-login-singup-API",
    image: proj3,

    skills: "Nodejs,expressjs,Api,postman",
    projectlink: (
      <div>
        <a href="https://github.com/lalatendu65/User-login-singup-API">
          login-singup-Api
        </a>
      </div>
    ),
  },
  {
    name: "MERN-CRUD-Application",
    image: proj4,

    skills: "Recatjs,Nodejs,Monogodb",

    projectlink: (
      <div>
        <a href="https://usermanagement-crud.netlify.app/">CRUD_APP</a>
      </div>
    ),
  },
];
