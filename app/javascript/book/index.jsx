import React from 'react';
import Show from './show'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            book: [],
            showFlag: false,
        }
        this.getBooks = this.getBooks.bind(this);
    }

    componentDidMount() {
        this.getBooks()
    }

    getBooks() {
        let request = new Request('/api/books', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        fetch(request).then(function (response) {
            return response.json();
        }).then(function (books) {
            this.setState({
                books: books
            });
        }.bind(this)).catch(function (error) {
            console.error(error);
        });
    }

    showDetail(id) {
        this.getBook(id);
        this.hideToggle();
    }

    getBook(id) {
        let request = new Request(`/api/books/${id}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        fetch(request).then(function (response) {
            return response.json();
        }).then(function (book) {
            this.setState({
                book: book
            });
        }.bind(this)).catch(function (error) {
            console.error(error);
        });
    }

    hideToggle() {
        this.setState({
            showFlag: !this.state.showFlag
        });
    }

    render() {
        const { books, book, showFlag } = this.state;

        return (
            <div>
                <h1>[Rails+React]~Bookshelf~</h1>
                <div>
                    {books.map(function (book) {
                        return (
                            <div key={book.id} onClick={() => this.showDetail(book.id)}>
                                <span>{book.title}</span>
                            </div>
                        )
                    }.bind(this))}
                    <Show
                        book={book}
                        showFlag={showFlag}
                    />
                </div>
            </div>
        )
    }
}

export default Index;