import React, { Component } from 'react';
import { SideNav } from './SideNav';
import { User } from './User';
import { Breadcrumbs } from './Breadcrumbs';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import {
    faPencil,
    faTrash
} from '@fortawesome/free-solid-svg-icons'

export class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            rating: 1,
            Books: [],
        };
    }
    componentDidMount() {
        fetch("/api/Books")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        Books: result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: "Ooops something went wrong! Please wait..."
                    });
                }
            )
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }
    render() {
        const { error, isLoaded, Books, rating } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="loading">Loading...</div>;
        } else {
            return (
                <div className="container_pages">
                    <Breadcrumbs />
                    <SideNav />
                    <User />
                    <div className="container_content">
                        <div className="books_row">
                            <div>
                                {Books.map(book => (
                                    <div key={book.bookId}>
                                        <div className="book_content">
                                            <div className="book_info">
                                                <h3>{book.bookName}</h3>
                                                <h4>{book.author}</h4>
                                                <p>{book.bookDescription}</p>
                                            </div>
                                            <div className="book_stars">
                                                <div className="book_stars_component">
                                                    <StarRatingComponent
                                                        key={book.ratings[0].RatingId}
                                                        name="rate1"
                                                        starCount={5}
                                                        value={book.ratings[0].countStars}
                                                    />
                                                    <div className="book_stars_icons">
                                                        <FontAwesomeIcon icon={faPencil} size="sm" />
                                                        <FontAwesomeIcon icon={faTrash} size="sm" />
                                                    </div>
                                                </div>
                                                <p><b>{book.ratings[0].title}</b></p>
                                                <p>{book.ratings[0].description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}