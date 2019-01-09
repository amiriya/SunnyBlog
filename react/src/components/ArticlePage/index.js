import React, { Component } from 'react';
import './index.scss';

import { articles } from '../../libs/articlePgaeData'

import ReactMarkdown from 'react-markdown';

class ArticlePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      article: {}
    }
  }

  componentDidMount(){
    const url = this.props.url;
    const article = articles[url] ? articles[url] : '';

    article && this.setState({
      article: article
    });
  }

  render() {
    const {title, author, createDate, browserCount, labels, markdownContent} = this.state.article;

    return (
      <div className='article-page'>
        <h2 className="article-title">{title}</h2>
        { Object.keys(this.state.article).length > 0 && <div className="article-info">
          { author && <img src="images/orange/author_32.png" alt="作者" /> }
          { author && <span className="author">{author}</span> }

          { createDate && <img src="images/orange/time_32.png" alt="日期" /> }
          { createDate && <span className="create_date">{createDate}</span> }

          { browserCount && <img src="images/orange/browse_history_32.png" alt="浏览量" /> }
          { browserCount && <span className="page_view">{browserCount}</span> }

          {labels && labels.length > 0 && <span className="labels">
            <img src="images/orange/label_32.png" alt="标签" />
            {labels.map((label, index) => {
              return (<a href={label.url} key={index}>{label.title}</a>);
            })}
          </span>}
        </div> }
        <div className="article-content">
          <ReactMarkdown source={markdownContent} />
        </div>
      </div>
    );
  }
}

export default ArticlePage;
