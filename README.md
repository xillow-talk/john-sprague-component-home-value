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
    *[Comments](#Comments)
        *[GET /songs/:songId/comments](#get-song-comments)
        *[POST /songs/:songId/comments](#post-song-comment)
        *[PUT /songs/:songId/comments](#put-song-comment)
        *[DELETE /songs/:songId/comments](#delete-song-comment)

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

### GET /songs/:songId/comments

> Given a songId, fetch messages for that given song

**URL** 
  * `songID` _(Number)_ : 
  * song/:songId/comments

  * GET
  * URL Params
  *  Required: songId=[integer]

**Success Response**
  * **Status Code:** 200 
    * **Sample Content**:

      |Key              |Type    |
      |:--------------- |:------ |
      |`id`             |Number  |
      |`songId`         |Number  |
      |`profilePic`     |String  |
      |`username`       |String  |
      |`message`        |String  |
      |`postedAt`       |Date    |
      |`songTime`       |String  |
      |`followers`      |Number  |

**Error Response:**
  * **Status Code:** 404 Bad Request Error:
  * **Conetent:** `{ error : "Bad Request Error" }`
  * **Sample Call:**

    fetch('/song/:songId/comments', {
        method: 'GET'
    })
    .then(res => res.json())
    .then(json => console.log(json))

### Post /songs/:songId/comments

> Given a songId and a new comment, create a new comment

**URL**  
  * song/:songId/comments
  * URL Params
    *  Required: songId=[integer]

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format: 

      |Key              |Type    |
      |:--------------- |:------ |
      |`id`             |Number  |
      |`songId`         |Number  |
      |`profilePic`     |String  |
      |`username`       |String  |
      |`message`        |String  |
      |`postedAt`       |Date    |
      |`songTime`       |String  |
      |`followers`      |Number  |


**Success Response:**
  * **Status Code:** 201 Created
  * **Content:** `{ id: id (Number) }`
    
**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

  * **Sample Call:** 
    Required: :songId=[json]
    fetch('/song/:songId', {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(data)
    })

### PUT /songs/:songId/comments
  
> Given a songid and a newComment, update old comment
    
**URL**  
  * song/:songId/comments

**URL Params**
    Required: songId=[integer]

**Payload Params**
  * Valid `{ JSON }` object conforming to the following format: 
  
    |Key              |Type    |
    |:--------------- |:------ |
    |`comment_Id`     |Number  |
    |`message`        |Date    |
    |`date`           |Date    |

**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** `{ id: id (Number) }`
    * **Status Code:** 204

**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

**Sameple Call**
    fetch('/song/:songId/comments', {
        method: 'PUT',
        contentType: 'application/json',
        body: JSON.stringify(data)
    })

## DELETE /songs/:songId/comments
 
> Given a commentId, update that comment


  **URL**
    /song/:songId/comments
    Method:

  **URL Params**
   * Required: songId=[integer]
  
**Success Response:**
  * **Status Code:** 200 OK
  * **Content:** `{ Reservation }` conforming to the following format:

    |Key              |Type    |
    |:--------------- |:------ |
    |`comment_Id`     |Number  |
    |`message`        |Date    |
    |`date`           |Date    |


**Error Response:**
  * **Status Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
    * **Status Code:** 404 NOT* ** FOUND 
    
**Sample Call**
    fetch('/song/:songId/comments', {
        method: 'DELETE'
    })