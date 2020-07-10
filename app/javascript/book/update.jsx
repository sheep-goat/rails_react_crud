import React from 'react';

class Update extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.location.state.book.title,
            author: this.props.location.state.book.author,
            publisher: this.props.location.state.book.publisher,
            genre: this.props.location.state.book.genre
        }
        this.updateBook = this.updateBook.bind(this);
    }

    updateBook(event) {
        let request = new Request(`/api/books/${this.props.location.state.book.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                publisher: this.state.publisher,
                genre: this.state.genre
            })
        });

        fetch(request).then(function(response) {
            return response;
        }).then(() => {
            this.props.history.push('/books');
        }).catch(function (error) {
            console.log(error);
        }).finally(() => {
            this.setState({
                title: this.props.location.state.book.title,
                author: this.props.location.state.book.author,
                publisher: this.props.location.state.book.publisher,
                genre: this.props.location.state.book.genre
            })
        });

        event.preventDefault();
    }

    render() {
        const { title, author, publisher, genre } = this.state;

        return (
            <form className="form-inline" onSubmit={this.updateBook}>
                <label>Title</label>
                <input
                    type="text" value={title}
                    placeholder="Title"
                    onChange={(e) => {
                        this.setState({
                            title: e.target.value
                        })
                    }}
                />
                <label className="mr-sm-2">Author</label>
                <input
                    type="text" value={author}
                    placeholder="Author"
                    onChange={(e) => {
                        this.setState({
                            author: e.target.value
                        })
                    }}
                />
                <label className="mr-sm-2">Publisher</label>
                <input
                    type="text" value={publisher}
                    placeholder="Publisher"
                    onChange={(e) => {
                        this.setState({
                            publisher: e.target.value
                        })
                    }}
                />
                <label className="mr-sm-2">Genre</label>
                <input
                    type="text" value={genre}
                    placeholder="Genre"
                    onChange={(e) => {
                        this.setState({
                            genre: e.target.value
                        })
                    }}
                />
                <input className="btn btn-primary btn-sm" type="submit" value="Update" />
            </form>
        )
    }
}

export default Update;