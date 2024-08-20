`# Book Collection API

## Description

The **Book Collection API** project is a full-stack application built with Node.js, Express, and MongoDB. It provides a simple and efficient way to manage a personal library. Users can perform CRUD (Create, Read, Update, Delete) operations on their book collection via a RESTful API. This project is a great example of a basic backend setup and offers insights into the use of Mongoose for data modeling, Express for API development, and MongoDB for data storage.

## Features

- **Add Books**: Users can add new books to their collection by providing details such as title, author, genre, publication year, and description.
- **View Books**: Retrieve a list of all books in the collection or view details of a specific book.
- **Update Books**: Modify the information of an existing book.
- **Delete Books**: Remove a book from the collection.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express**: Web framework for handling routes and HTTP requests.
- **MongoDB**: NoSQL database for storing book data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Module for managing environment variables.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Skylar-Lorena/BookCollectionAPI.git
   cd BookCollectionAPI`

2. **Install dependencies**:

    `npm install express mongoose dotenv`

3. **Set up environment variables**:

    - Create a `.env` file in the root of the project.
    - Add your MongoDB URI:

        `MONGO_URI=your_mongodb_connection_string`

4. **Start the server**:

    `node src/index.js`

    The server will start on `http://localhost:3000`.

## API Endpoints

- `GET /api/books`: Retrieve all books.
- `POST /api/books`: Add a new book.
- `PUT /api/books/:id`: Update an existing book.
- `DELETE /api/books/:id`: Delete a book.

## Usage

- Use a tool like Postman or Curl to interact with the API endpoints.
- Customize the project by extending the schema or adding new features, such as user authentication.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.

## Author

**Lorenah M.**

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Repository Link

[Book Collection API on GitHub](https://github.com/Skylar-Lorena/BookCollectionAPI.git)
