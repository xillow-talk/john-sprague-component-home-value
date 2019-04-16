# Project Name

>  This is a complex, yet beautiful front-end microservice that dynamically renders a module on a single page application. This is build with the lastes Javascript frameworks including React.js & ES6, Webpack, Babel, Express, Node.js, and mongodb. Some of the key deliverables were to perform a technical spike about my use case (read operations), create React components. build the microservice with react.js, implement custom styling, ensure that the page is dynamic (there are 10,000 products in the database),and deploy to AWS Elastic Bean Stalk. After all this was complete, my next tast was to tie together the microservices from the team onto one page via proxy server. 

## Related Projects

  - https://github.com/xillow-talk/brian-component-neighborhood
  - https://github.com/xillow-talk/steve-component-agent-contact
  - https://github.com/xillow-talk/leighton-component-photo-carousel

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

>  From the root directory of this service, grab dependencies (see below). Ensure that mongodb is running (mongod in the terminal). Naviagte to client => src => components => App.jsx. Change the fetch url to localhost:8081; Nagivate to yor terminal, then use the command npm run react-dev to transpose the es6 files into a bundle using webpack. Next, npm run seed-db. This script will create a properties database with 3 tables (properties comparablehomes and localhomes), and then populate the three tables with 100 documents each. Finally, use the command npm start to spin up the server. 

After the above steps, navigate to localhost:3001 and view the component!

## Requirements
> Must have mongodb installed and running on your workstation.
> Mush have node installed on your workstation

## Development

### Installing Dependencies

From within the root directory:

npm install -g webpack
npm install
