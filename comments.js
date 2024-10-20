// Create wev server
// Create RESTful API
// Create a comment object
// Create a comment object array
// Create a GET request to get all comments
// Create a POST request to add a comment
// Create a DELETE request to delete a comment
// Create a PUT request to edit a comment
// Create a GET request to get a comment by ID

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a comment object
class Comment {
  constructor(id, comment) {
    this.id = id;
    this.comment = comment;
  }
}

// Create a comment object array
let comments = [
  new Comment(1, 'This is a comment.'),
  new Comment(2, 'This is another comment.'),
  new Comment(3, 'This is a third comment.')
];

// Create a GET request to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a POST request to add a comment
app.post('/comments', (req, res) => {
  let comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Create a DELETE request to delete a comment
app.delete('/comments/:id', (req, res) => {
  let id = req.params.id;
  comments = comments.filter(comment => comment.id != id);
  res.json({message: `Deleted comment with id ${id}`});
});

// Create a PUT request to edit a comment
app.put('/comments/:id', (req, res) => {
  let id = req.params.id;
  let newComment = req.body;
  comments = comments.map(comment => {
    if (comment.id == id) {
      return newComment;
    }
    return comment;
  });
  res.json(newComment);
});

// Create a GET request to get a comment by ID
app.get('/comments/:id', (req, res) => {
  let id = req.params.id;
  let comment = comments.find(comment => comment.id == id);
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Test the API using Postman
// GET http://localhost:3000/comments
// POST http://localhost:3000/comments
// DELETE http://localhost:3000/comments/









