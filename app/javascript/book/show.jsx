import React from 'react';

class Show extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: this.props.showFlag ? 'block' : 'none'}}>
                <div className="col">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">【{this.props.book.title}】</span>
                            <div className="detail">・著者：{this.props.book.author}</div>
                            <div className="detail">・出版社：{this.props.book.publisher}</div>
                            <div className="detail">・ジャンル：{this.props.book.genre}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Show;