# Project Name

> Open source platform simulating a single song sound experience. This microservice will dynamically render comments related to a single song 

## Related Projects

  - https://github.com/cloud-vibes/tim-luu-musicplayer-service
  - https://github.com/cloud-vibes/andrew-mitchell-related-component
  - https://github.com/cloud-vibes/angela-lee-description-service

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [CRUD API ROUTES](#CRUD)

## Usage

>  From the root directory of this service, grab dependencies (see below). Ensure that mmysql server is running. Nagivate to yor terminal, then use the command npm run dev to transpose the es6 files into a bundle using webpack and sping up the server on localhost:3000. Next, npm run seed. This script will create a database with 1 table and then populate the. 

After the above steps, navigate to localhost:3000 and view the component!

## Requirements

> Must have mysql installed and running on your workstation.
> Mush have node installed on your workstation

## Development

### Installing Dependencies

From within the root directory:

npm install -g webpack
npm install

## CRUD API ROUTES

### Get 

> Given a songId, fetch messages for that given song

    URL

    /song/:songId/comments
    Method:

    GET
    URL Params

    Required: songId=[integer]
    Success Response:

    Code: 200 Sample Content:
    [
        {
            "id": comments,
            "songId": "2",
            "profilePic": "https://s3-us-west-1.amazonaws.com/kevin-zoundcloud/imgs/user37.jpg",
            "username": bd,
            "message": "this is a sample message",
            "postedAt": date,
            "songTime": "2:51",
            "followers": "45"
        }
    ]
    Error Response:

    Code: 404 NOT FOUND Content: { error : "" }
    Sample Call:

    fetch('/song/:songId/comments', {
        method: 'GET'
    })
    .then(res => res.json())
    .then(json => console.log(json))

###POST

> Given a songId and a new comment, create a new comment
    Body Params

    URL
    /song/:songId/comments

    Required: :songId=[json]
    Success Response:

    Code: 201
    Error Response:

    Code: 404 NOT FOUND Content: { error : "" }
    Sample Call:

    fetch('/song/:songId', {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(data)
    })

## PUT
  
> Given a songid and a newComment, update old comment
    
    URL
    /song/:songId/:url
    
    URL Params

    Required: songId=[integer]
    Body Params

    Required: :songId=[json]
    Success Response:

    Code: 204
    Error Response:

    Code: 404 NOT FOUND Content: { error : "" }
    Sample Call:

    fetch('/song/:songId/comments', {
        method: 'PUT',
        contentType: 'application/json',
        body: JSON.stringify(data)
    })

## DELETE
 
> Given a commentId, update that comment

    URL

    /song/:songId/comments
    Method:

    URL Params

    Required: songId=[integer]
    Success Response:

    Code: 204
    Error Response:

    Code: 404 NOT FOUND Content: { error : "" }
    Sample Call:

    fetch('/song/:songId/comments', {
        method: 'DELETE'
    })