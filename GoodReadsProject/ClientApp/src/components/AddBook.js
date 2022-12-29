import { SideNav } from './SideNav';
import React, { useState } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import "../Styles/addBook.css";

const selectedOptions = [
    { value: 0, label: 'Fiction', id: 0 },
    { value: 1, label: 'Science Fiction', id: 1 },
    { value: 2, label: 'Mystery', id: 2 },
    { value: 3, label: 'Thriller', id: 3 },
    { value: 4, label: 'Historical', id: 4 },
    { value: 5, label: 'Romance', id: 5 },
    { value: 6, label: 'Realist Literature', id: 6 },
    { value: 7, label: 'Magical Realism', id: 7 },
    { value: 8, label: 'Dystopian', id: 8 }
]

export const AddBook = () => {
    const getInitialState = () => {
        const value = selectedOptions.map(option => option.value);
        return value;
    };

    const [value, setValue] = useState(getInitialState);

    const handleChangeSelect = (e) => {
        setValue(e.target.value);
    };
    const [data, setData] = useState({
        title: "",
        author: "",
        description: "",
        price: 0,
        pages: 0,
        bookCode: 0,
        bookGenr: 0,
    });

    const { title, author, description, price, pages, bookCode } = data;

    const handleChange = e => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    };
    const clearField = () => {
        // 👇️ clear input value
        setData('');
    };
    const submitForm = () => {
        // 👇️ submit data form
        let book = {
            BookName: title[0],
            Author: author[0],
            BookDescription: description[0],
            Price: parseInt(price[0]),
            NumberOfPages: parseInt(pages[0]),
            BookCode: parseInt(bookCode[0]),
            Genr: parseInt(value)
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(book)
        }

        let response = fetch('/api/Books', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
        if (response.ok) {
            setData('');
        }
        else {
            console.log(response.status, "Chiamata non é andata buon fine.")
        }
    };
    return (
        <div className="add_container_pages">
            <Breadcrumbs />
            <SideNav />

            <div className="add_container_content">
                <div className="inner_container">
                    <h3><b>Do you want add new book that you read to our database?</b></h3>
                    <h4><i>So that everybody can give a review how they like it?</i></h4>
                    <h5>It is simple to add a new book, just fill the main
                        information about your book, give some short
                        description and submit the form.
                    </h5>
                    <div className="form_container">
                        <form className="book_form" onSubmit={submitForm}>
                            <div className="book_form_row">
                                <div className="row">
                                    <label>Book Title</label>
                                    <div className="book_title">
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            value={title}
                                            name="title"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <label>Book Author</label>
                                    <div className="book_author">
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            value={author}
                                            name="author"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="book_form_row_four">
                                <div className="row">
                                    <label>Book Price</label>
                                    <div className="book_price">
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            value={price}
                                            name="price"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <label>N° Pages</label>
                                    <div className="book_pages">
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            value={pages}
                                            name="pages"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <label>ISBN Code</label>
                                    <div className="book_pages">
                                        <input
                                            type="text"
                                            onChange={handleChange}
                                            value={bookCode}
                                            name="bookCode"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="book_form_row_two">
                                <div className="row genr">
                                    <label>Book Genr</label>
                                    <div className="book_genr">
                                        <select className="book_genres" value={value} onChange={handleChangeSelect} multiple={false}>
                                            {selectedOptions.map(option => (
                                                <option key={option.id} name={option.value} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <label>Book Description</label>
                                    <div className="book_title">
                                        <textarea rows="5" cols="69"
                                            type="text"
                                            onChange={handleChange}
                                            value={description}
                                            name="description"
                                            placeholder="Write a few words about this book..."
                                        ></textarea>
                                    </div>
                                </div>

                            </div>
                            <div className="book_form_row_btn">
                                <div className="book_btn">
                                    <button type="submit">Submit</button>
                                    <button className="book_btn_red" type="submit" onClick={clearField}>Clear</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}
