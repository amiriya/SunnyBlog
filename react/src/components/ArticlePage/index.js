import React, { Component } from 'react';
import './index.scss';

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

    fetch(`/article?articleId=${url}`, {method: 'GET'})
    .then(res => res.json())
    .then(
      (res) => {
        let { retCode, article } = res;
        if(retCode === 0){
          article && this.setState({
            article: article
          });
        }
      }
    ).catch((e) => {
      console.log(`something goes wrong! details: ${e}`);
    });
  }

  render() {
    const { title, markdownContent } = this.state.article;
  
    return (
      <div className='article-page'>
        <h2 className="article-title">{title}</h2>
        { this.getArticleInfo() }
        <div className="article-content">
          <ReactMarkdown source={markdownContent} />
        </div>
      </div>
    );
  }

  getArticleInfo(){
    const { author, createDate, browserCount, labels } = this.state.article;

    const  articleInfo = (<div className="article-info">
      { !!author && <img src="images/orange/author_32.png" alt="作者" /> }
      { !!author && <span className="author">{author}</span> }

      { !!createDate && <img src="images/orange/time_32.png" alt="日期" /> }
      { !!createDate && <span className="create_date">{createDate}</span> }

      { !!browserCount && <img src="images/orange/browse_history_32.png" alt="浏览量" /> }
      { !!browserCount && <span className="page_view">{browserCount}</span> }

      {!!labels && labels.length > 0 && <span className="labels">
        <img src="images/orange/label_32.png" alt="标签" />
        {labels.map((label, index) => {
          return (<a href={label.url} key={index}>{label.title}</a>);
        })}
      </span>}
    </div>);

    return Object.keys(this.state.article).length > 0 ? articleInfo : null;
  }
}

export default ArticlePage;
