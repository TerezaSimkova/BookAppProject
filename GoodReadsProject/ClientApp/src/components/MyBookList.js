import React, { Component } from 'react';
import { SideNav } from './SideNav';
import { User } from './User';
import { Breadcrumbs } from './Breadcrumbs';
import { Modal } from './Modal';
import { ModalDelete } from './ModalDelete';
import TriggerButtonEdit from './TriggerButtonEdit';
import TriggerButtonDelete from './TriggerButtonDelete';
import StarRatingComponent from 'react-star-rating-component';
import './Popup.css';

export class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            rating: 1,
            countStars:0,
            isShown: 0,
            isDelete: 0,
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
    closeModal = () => {
        this.setState({ isShown: false });
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
                                {Books.map((book) => (
                                    <div key={book.bookId}>
                                        <div className="book_content">
                                            <div className="book_info">
                                                <h3>{book?.bookName}</h3>
                                                <h4>{book?.author}</h4>
                                                <p>{book?.bookDescription}</p>
                                            </div>
                                            <div className="book_stars">
                                                <div className="book_stars_component">
                                                    <StarRatingComponent
                                                        key={book.ratings[0]?.ratingId}
                                                        name="rate1"
                                                        starCount={5}
                                                        value={book.ratings[0]?.countStars}
                                                    />
                                                    <div className="book_stars_icons">
                                                        <TriggerButtonEdit
                                                            showModal={() => (this.showModal(book))}                                                            
                                                            buttonRef={(n) => (this.TriggerButton = n)}
                                                            triggerText={this.props.triggerText}
                                                        />                                                      
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
                                                        <TriggerButtonDelete
                                                            showModalDelete={() => (this.showModalDelete(book))}
                                                            buttonRef={(n) => (this.TriggerButton = n)}
                                                            triggerText={this.props.triggerText}
                                                        />
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
                                                <div key={book.ratings[0]?.ratingId}>
                                                    <p><b>{book.ratings[0]?.title}</b></p>
                                                    <p>{book.ratings[0]?.description}</p>
                                                </div>
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