import React, { Component } from 'react';
import { SideNav } from './SideNav';

export class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
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
                        Books: result
                    });


                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, Books } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container_pages">
                    <SideNav />
                    <div className="container_content">
                        <div>
                            <ul>
                                {Books?.map((book) => (
                                    <li key={book.bookId}>
                                        {book.author} {book.bookDescription}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
    }
}