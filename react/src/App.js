import React, { Component } from 'react';
import './App.scss';

import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showArticle : '',   // 展示文章详情 or 文章列表
      jumpUrl: ''         // 跳转文章详情文章链接
    }
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  render() {
    const { showArticle, jumpUrl } = this.state;

    return (
      <div className='entry'>
        <div className='header'>
          <h1 className="site-title">
            <span className="left">文艺范</span>
            <span className="blank">.</span>
            <span className="right"> 技术控</span>
          </h1>
        </div>

        { !showArticle && <HomePage {...showArticle} onClick = {this.onBtnClick}></HomePage> }
        { showArticle && <ArticlePage url={jumpUrl}></ArticlePage> }

        <div className='footer'>
          <p>~~ 一枚装文艺的女程序猿 ~~</p>
          <p className="author">@ by reya滴水心❤</p>
        </div>
      </div>
    );
  }

  onBtnClick(jumpUrl){
    this.setState({
      showArticle: 'show',
      jumpUrl: jumpUrl
    });
  }
}

export default App;
