'use strict';
// const mongoose = require('mongoose'),
//     Book = mongoose.model('Books');
const Book = require('../models/bookListModel.js');


exports.list_all_books = (req, res) => {
    Book.find({}, (err, book) => {
        if (err)
            res.status(500).send(err);
        res.json(book);
    });
};
exports.create_a_book = (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({ message: "Please enter the book name!" });
    }

    let new_book = new Book(req.body);
    new_book.save((err, book) => {
        if (err)
            res.send(err);
        res.json(book);
    });


};

exports.read_a_book = (req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
        if (err)
            res.status(404).send(err);
        res.json(book);
    });
};
exports.update_a_book = (req, res) => {
    Book.findOneAndUpdate({ _id: req.params.bookId }, req.body, { new: true }, (err, task) => {
        if (err)
            res.send(err);
        res.json(book);
    });
};
exports.delete_a_book = (req, res) => {
    Book.deleteOne({ _id: req.params.bookId }, (err, book) => {
        if (err)
            res.send(err);
        res.json({ message: 'Book successfully deleted' });
    });
};