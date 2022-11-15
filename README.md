<p align="center">
  <img  src="https://i.imgur.com/M2UoUVM.png"
    width=100%" >
</p>
<h1 align="center">
  Tweetero
</h1>

<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

## Description

Tweetero is a simple API for a Twitter-like app, where you can post and read messages from users.

It was my 1ˢᵗ back-end project and the 11ᵗʰ of the Driven Full Stack Bootcamp.

##  Demo

<div align="center">
<img src="https://i.imgur.com/Na6tO3T.png" width=90%>
</div>

## Features

-   Log in with name and picture url
-   Post a message
-   Get all the messages
-   Get messages from specific user


## API Reference

### User

* Sign Up
  
  ```http
  POST /sign-up
  ```

  ##### Request:

  | Body       | Type     | Description                     |
  | :--------- | :------- | :------------------------------ |
  | `username` | `string` | **Required**. valid username    |
  | `avatar`   | `string` | **Required**. valid picture url |

### Tweets

* Post a new tweet

  ```http
  POST /tweets
  ```

  #### Request body:

  ```json
  {
    "tweet": "string"
  }
  ```

  #### Headers:

  | Name   | Description            |
  | :----- | :--------------------- |
  | `user` | **Required**. username |

* Get all tweets

  ```http
  GET /tweets
  ```

  #### Query strings:

  | Parameter | description              |
  | :-------- | :----------------------- |
  | `page`    | **Required** page number |

  #### Response:

  ```json
  [
    {
      "username": "string",
      "avatar": "string",
      "tweet": "string"
    },
    {
      "username": "string",
      "avatar": "string",
      "tweet": "string"
    }
  ]
  ```

* Get tweets from specific user

  ```http
  GET /tweets/:username
  ```

  #### Path parameters:

  | Parameter  | description |
  | :--------- | :---------- |
  | `username` | username    |

  #### Response:

  ```json
  [
    {
      "username": "string",
      "avatar": "string",
      "tweet": "string"
    },
    {
      "username": "string",
      "avatar": "string",
      "tweet": "string"
    }
  ]
  ```

## Run Locally

Clone the project

```bash
  git clone https://github.com/lemoscaio/tweetero-api.git
```

Go to the project directory

```bash
  cd tweetero-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```

## Tech Features

* API created using nodeJS with express
* Fetches user image to assure it's available

## Lessons Learned

In this project I learned how to build a simple API using NodeJS and Express.

## Acknowledgements

-   [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

