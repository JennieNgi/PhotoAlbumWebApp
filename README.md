# Photo Album Web App
This is a web application that displays a photo album and allows users to add comments to photos. It has been built using the MERN (MongoDB, Express, React, Node.js) stack and a custom Web API. The photo album data is stored in a MongoDB database and accessed through the Web API.

## Setup
To get started with the app, you'll need to do the following:

- Clone the repository
- cd to the project folder
- run 
```sh
docker-compose run
```
- open another termimal and run
```sh
dotnet run start
```
This will start both the Product Review Web App in your browser.

## Client-Side Features
The web application includes the following features:

- A photo album with thumbnail images and captions
- The ability to view a larger version of each photo by clicking on it
- The ability to add comments to each photo
- All newly added comments are displayed at the top of the list
- The Web API returns appropriate RESTful status codes for all responses

## RESTful Web API
The Web API includes the following endpoints:
- - GET /photos: Returns a JSON array of all photos in the photo album, including their comments. The photo ID field is called _id in the JSON.
- POST /comments: Adds a new comment to a photo. Expects a JSON object with the following fields: photoId (string), author (string), and comment (string).

## Technologies Used
- MongoDB: A document-oriented NoSQL database used to store the photo album data.
- Express: A web application framework for Node.js used to build the Web API.
- React: A JavaScript library used to build the client-side photo album.
- Node.js: A JavaScript runtime used to run the Web API.
- Bootstrap: A CSS library used to style the photo album.
