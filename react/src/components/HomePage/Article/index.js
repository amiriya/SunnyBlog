import React, {Component} from 'react';
import './index.scss';

class Article extends Component {
    constructor(props){
        super(props);
        this.onMoreClick = this.onMoreClick.bind(this);
    }

    render(){
        const { title, imgUrl, desc } = this.props;

        return (
            <div className="article">
                <h2 className="title">{title}</h2>
                <div className="detail">
                    <div className="img-wrapper">
                        <img src={imgUrl} alt={title} />
                    </div>
                    <div className="intro">
                        <p>{desc}</p>
                        <span onClick = {this.onMoreClick}> >> 阅读全文 </span>
                    </div>
                </div>
            </div>
        );
    }

    onMoreClick(){
        const jumpUrl = this.props.jumpUrl;
        this.props.onClick(jumpUrl);
    }
}

export default Article;