import React from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
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

    render() {
        const { books } = this.state;

        return (
            <div>
                <h1>[Rails+React]~Bookshelf~</h1>
                <div>
                    {books.map(function (book) {
                        return (
                            <div>
                                <span>{book.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Index;