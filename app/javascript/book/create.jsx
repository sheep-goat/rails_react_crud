import React from 'react';

class Create extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            publisher: '',
            genre: ''
        }
        this.createBook = this.createBook.bind(this);
    }

    createBook(event) {
        let request = new Request('/api/books', {
            method: 'POST',
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
                title: '',
                author: '',
                publisher: '',
                genre: ''
            })
        });

        event.preventDefault();
    }

    render() {
        const { title, author, publisher, genre } = this.state;

        return (
            <form className="form-inline" onSubmit={this.createBook}>
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
                <input className="btn btn-primary btn-sm" type="submit" value="Create" />
            </form>
        )
    }
}

export default Create;