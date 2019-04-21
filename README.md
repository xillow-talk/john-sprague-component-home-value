# Project Name

>  This is a complex, yet beautiful front-end responsive microservice that dynamically renders a module on a single page application. This is built with the latest Javascript frameworks including React.js & ES6, Webpack, Babel, Express, Node.js, and mongodb. Some of the key deliverables were to perform a technical spike about my use case (read operations), create React components, build the microservice with react.js, implement custom styling, ensure that the page is dynamic (there are 10,000 products in the database), and deploy to AWS Elastic Bean Stalk. My next task was to tie together the microservices from the team onto one page via a proxy server. 

- Crafted a complex user interface using flex-box and the react.js library for ease of state management. 
- Built composable, state-full and state-less react components using styled components to focus on separation of concerns,  code readability/maintainability and re-usability. 
- Programmed a RESTful API that conforms to the REST architectural style and constraints. 
- Tied together the teams services via proxy server using http-middle-ware.
- Deployed the proxy to AWS beanstalk that provided a 99.9% service uptime rate. 

## Related Projects

  - https://github.com/xillow-talk/brian-component-neighborhood
  - https://github.com/xillow-talk/steve-component-agent-contact
  - https://github.com/xillow-talk/leighton-component-photo-carousel

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Installing Dependencies](#installing dependencies)
4. [License](#license)
5. [Versioning](#versioning)
6. [Authors](#authors)


## Usage

>  From the root directory of this service, grab dependencies (see below). Ensure that mongodb is running (mongod in the terminal). Naviagte to client => src => components => App.jsx. Change the fetch url to localhost:8081; Nagivate to yor terminal, then use the command npm run react-dev to transpose the es6 files into a bundle using webpack. Next, npm run seed-db. This script will create a properties database with 3 tables (properties comparablehomes and localhomes), and then populate the three tables with 100 documents each. Finally, use the command npm start to spin up the server. 
- After the above steps, navigate to localhost:3001 and view the component!

## Requirements
> Must have mongodb installed and running on your workstation.
> Mush have node installed on your workstation


### Installing Dependencies

- From within the root directory:

- npm install -g webpack
- npm install

## License
- This project is licensed under the MIT License - see the LICENSE.md file for details.

## Versioning
- I use Git for versioning.

## Authors
- **John Sprague** - Software Engineer
