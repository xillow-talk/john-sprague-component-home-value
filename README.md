# Project Name

> Microservice which handles display of any home comparisons for a single property to the Xillow Talk application.

## Related Projects

  - https://github.com/xillow-talk/brian-component-neighborhood
  - https://github.com/xillow-talk/steve-component-agent-contact
  - https://github.com/xillow-talk/leighton-component-photo-carousel

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

>  From the root directory of this service, grab dependencies (see below). Ensure that mongodb is running (mongod in the terminal). Then use the command npm run start to get the server going on localhost:3000. Then use the command npm run react-dev to transpose the es6 files into a bundle using webpack. Next, npm run seed-db. This script will create a properties database with 3 tables (properties comparablehomes and localhomes), and then populate the three tables with 100 documents each. 

After the above steps, navigate to localhost:3001 and view the component!
## Requirements
> Must have mongodb installed and running on your workstation. 

## Development

### Installing Dependencies

From within the root directory:

npm install -g webpack
npm install