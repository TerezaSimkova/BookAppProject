import React, { Component } from 'react';
import { SideNav } from './SideNav';
import { Breadcrumbs } from './Breadcrumbs';
import { Modal } from './Modal';
import { ModalDelete } from './ModalDelete';
import { ModalRating } from './ModalRating';
import TriggerButtonEdit from './TriggerButtonEdit';
import TriggerButtonDelete from './TriggerButtonDelete';
import StarRatingComponent from 'react-star-rating-component';
import TriggerButtonAddRating from './TriggerButtonRating';
import Spinner from './loader';
import './Popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import {
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'


export class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            rating: 1,
            countStars: 0,
            isShown: 0,
            isDelete: 0,
            isRating: 0,
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
    showModal = (book) => {
        this.setState({ isShown: book.bookId });
        this.toggleScrollLock();
    };
    showModalDelete = (book) => {
        this.setState({ isDelete: book.bookId });
        this.toggleScrollLock();
    };
    showModalRating = (book) => {
        this.setState({ isRating: book.bookId });
        this.toggleScrollLock();
    };
    closeModal = () => {
        this.setState({ isShown: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };
    closeModalRating = () => {
        this.setState({ isRating: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };
    closeDeleteModal = () => {
        this.setState({ isDelete: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };
    onClickOutside = (event) => {
        if (this.modal && this.modal.contains(event.target)) return;
        this.closeModal();
        this.closeDeleteModal();
    };
    onClickOutsideDelete = (event) => {
        if (this.modal && this.modal.contains(event.target)) return;
        this.closeDeleteModal();
    };

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };
    render() {
        const { error, isLoaded, Books } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="loading"><Spinner /></div>;
        } else {
            return (
                <div className="container_pages_books">
                    <Breadcrumbs />
                    <SideNav />
                    <div className="container_content_books">
                        <div className="books_row">
                            <div className="search_container">
                                <input className="search_input" placeholder="Search for book ..." />
                                <FontAwesomeIcon className="search_icon" icon={faMagnifyingGlass} size="lg" />
                            </div>
                            <div className="search_rating_part">
                                <StarRatingComponent
                                    name="rate2"
                                    starCount={5}
                                />
                                <p>*Choose your rating of the book</p>
                                <button type="submit" name="Submit">Submit</button>
                            </div>
                            <div>
                                {Books.map((book, i) => (
                                    <div key={book.bookId}>
                                        <div className="book_content">
                                            <div className="book_info">
                                                <h3>{book?.bookName}</h3>
                                                <h4>{book?.author}</h4>
                                                <p>{book?.bookDescription}</p>
                                                <div className="book_details">
                                                    <p><b>Pages:</b> {book?.numberOfPages}</p>
                                                    <p><b>Price:</b> {book?.price} <b>€</b> </p>
                                                </div>
                                            </div>
                                            <div className="book_stars">
                                                <div className="book_stars_component">
                                                    {book.ratings[i] ? (
                                                    <StarRatingComponent
                                                        key={book.ratings[0]?.ratingId}
                                                        name="rate1"
                                                        starCount={5}
                                                        value={book.ratings[0]?.countStars}
                                                    />
                                                    ) : null}
                                                    <div className="book_stars_icons">                                                       
                                                        <TriggerButtonAddRating
                                                            showModal={() => (this.showModalRating(book))}
                                                            buttonRef={(n) => (this.TriggerButton = n)}
                                                            triggerText={this.props.triggerText}
                                                        />
                                                        {this.state.isRating === book.bookId ? (
                                                        <ModalRating
                                                            key={book.bookId}
                                                            onSubmit={book.ratings[0]?.ratingId}
                                                            modalRef={(n) => (this.modal = n)}
                                                            buttonRef={(n) => (this.closeButton = n)}
                                                            closeModal={this.closeModalRating}
                                                            onKeyDown={this.onKeyDown}
                                                            onClickOutside={this.onClickOutside}
                                                            />
                                                        ) : null}
                                                        {book.ratings[i] ? (
                                                        <TriggerButtonEdit
                                                            showModal={() => (this.showModal(book))}
                                                            buttonRef={(n) => (this.TriggerButton = n)}
                                                            triggerText={this.props.triggerText}
                                                            />
                                                        ) : <p> Rate Me!</p>}
                                                        {this.state.isShown === book.bookId ? (
                                                            <Modal
                                                                key={book.bookId}
                                                                onSubmit={book.ratings[0]?.ratingId}
                                                                modalRef={(n) => (this.modal = n)}
                                                                buttonRef={(n) => (this.closeButton = n)}
                                                                closeModal={this.closeModal}
                                                                onKeyDown={this.onKeyDown}
                                                                onClickOutside={this.onClickOutside}
                                                            />
                                                        ) : null}
                                                        {book.ratings[i] ? (
                                                        <TriggerButtonDelete
                                                            showModalDelete={() => (this.showModalDelete(book))}
                                                            buttonRef={(n) => (this.TriggerButton = n)}
                                                            triggerText={this.props.triggerText}
                                                            />
                                                        ) : null}
                                                        {this.state.isDelete === book.bookId ? (
                                                            <ModalDelete
                                                                key={book.bookId}
                                                                onSubmitDelete={book.ratings[0]?.ratingId}
                                                                modalRef={(n) => (this.modal = n)}
                                                                buttonRef={(n) => (this.closeButton = n)}
                                                                closeDeleteModal={this.closeDeleteModal}
                                                                onKeyDown={this.onKeyDown}
                                                                onClickOutsideDelete={this.onClickOutsideDelete}
                                                            />
                                                        ) : null}

                                                    </div>
                                                </div>
                                                {book.ratings[i] ? (
                                                <div className="review_block" key={book.ratings[i]?.ratingId}>
                                                    <p><b>{book.ratings[0]?.title}</b></p>
                                                    <p>{book.ratings[0]?.description}</p>
                                                    <p className="review_user"><b>Review added by:</b> {book.ratings[0]?.user.name} {book.ratings[0]?.user.surname}</p>
                                                    </div>
                                                ): null}
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