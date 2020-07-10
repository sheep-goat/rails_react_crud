import React from 'react';
import {Link} from "react-router-dom";

class Show extends React.Component {
    constructor(props) {
        super(props);

        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook(id) {
        let request = new Request(`/api/books/${this.props.book.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        });

        fetch(request).then(function (response) {
            return response;
        }).then(() => {
            this.props.getBooks();
        }).catch(function (error) {
            console.error(error);
        });
    }

    render() {
        const location = {
            pathname: "/books/update/" + this.props.book.id,
            state: {book: this.props.book}
        }
        return (
            <div style={{display: this.props.showFlag ? 'block' : 'none'}}>
                <div className="col">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">【{this.props.book.title}】</span>
                            <div className="detail">・著者：{this.props.book.author}</div>
                            <div className="detail">・出版社：{this.props.book.publisher}</div>
                            <div className="detail">・ジャンル：{this.props.book.genre}</div>
                            <Link to={location}>本の編集</Link>
                            <button onClick={this.deleteBook.bind(this, this.props.book.id)}>削除</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Show;