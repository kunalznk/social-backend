# Social-Backend

## Description
The Social Media Platform is a GraphQL-based application that allows users to create posts, like and comment on posts, follow other users, and interact with each other in a social media environment. This project demonstrates the implementation of a basic social media platform using Node.js, Apollo Express Server, PostgreSQL, Prisma, and GraphQL Validation.

## Features
- User registration and login functionality.
- Create, read, update, and delete (CRUD) operations for posts.
- Like and comment on posts.
- User following and follower management.
- Resetting passwords through email verification.
- GraphQL-based API for data manipulation.

## Tech Stack
The Social Media Platform is built using the following technologies:

- Node.js
- Apollo Express Server
- PostgreSQL
- Prisma (ORM - Object Relational Mapping)
- GraphQL (Query Language for API)
- GraphQL Validation (Data validation for GraphQL)

## Database Schema

### User Table

| Column Name       | Data Type      | Description                              |
|-------------------|---------------|------------------------------------------|
| id                | ID (Primary Key) | Unique identifier for the user.         |
| username          | String        | User's username.                        |
| full_name         | String        | User's full name.                       |
| email_id          | String        | User's email address.                   |
| profile_pic       | String        | URL of the user's profile picture.      |
| is_public         | Boolean       | Indicates if the user's profile is public (true) or private (false). |
| follower          | Int           | Number of followers for the user.       |
| following         | Int           | Number of users the user is following.  |

### Post Table

| Column Name       | Data Type      | Description                              |
|-------------------|---------------|------------------------------------------|
| id                | ID (Primary Key) | Unique identifier for the post.         |
| title             | String        | Title of the post.                      |
| content           | String        | Content of the post.                    |
| media_path        | String        | URL of the media (image/video) attached to the post. |
| media_format      | String        | Format of the attached media (e.g., JPEG, PNG, MP4, etc.). |
| author_id         | Int           | Foreign key referencing the user who authored the post. |

### Like Table

| Column Name       | Data Type      | Description                              |
|-------------------|---------------|------------------------------------------|
| post_id           | Int (Foreign Key) | Foreign key referencing the post to which the like belongs. |
| user_id           | Int (Foreign Key) | Foreign key referencing the user who liked the post. |

### Comment Table

| Column Name       | Data Type      | Description                              |
|-------------------|---------------|------------------------------------------|
| id                | ID (Primary Key) | Unique identifier for the comment.      |
| comment           | String        | Content of the comment.                 |
| user_id           | Int (Foreign Key) | Foreign key referencing the user who made the comment. |
| post_id           | Int (Foreign Key) | Foreign key referencing the post to which the comment belongs. |

### Media Table

| Column Name       | Data Type      | Description                              |
|-------------------|---------------|------------------------------------------|
| id                | ID (Primary Key) | Unique identifier for the media.        |
| media_get_path    | String        | URL for retrieving the media.           |
| media_post_path   | String        | URL for posting the media.              |
| media_format      | String        | Format of the media (e.g., JPEG, PNG, MP4, etc.). |



The main entities in the database schema are:
- User: Represents users of the social media platform.
- Post: Represents individual posts created by users.
- Like Represents likes given by users to posts.
- Comment: Represents comments made by users on posts.
- Media: Represents media files (images, videos) associated with posts.


## API Endpoints

- `/graphql`: The main GraphQL API endpoint for executing queries and mutations.

## GraphQL Schema

The GraphQL schema is defined in the `schema.graphql` file and includes all the available types, queries, and mutations.

## Usage

You can use tools like Postman or GraphQL Playground to interact with the API and test various queries and mutations.


## Getting Started

### Prerequisites
Before running the application, make sure you have the following installed:
- Node.js
- PostgreSQL

### Installation
1. Clone the repository: 
   ```bash
   git clone https://github.com/your_username/social-media-platform.git
   cd social-media-platform

   npm install
   
2. Set up PostgreSQL database and update the connection details in the .env file.
    
### Running the Application

   To start the application, run the following command:
   ```bash
   npm start
   ```

The server will be running at http://localhost:PORT, where PORT is the specified port number.


Feel free to contribute to this project by opening issues or submitting pull requests.

## Author

[Kunalznk](https://github.com/kunalznk)

