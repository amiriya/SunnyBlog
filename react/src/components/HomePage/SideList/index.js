import React, { Component } from 'react';
import './index.scss';

class SideList extends Component{
    render(){
        const { title, items } = this.props;

        return (
            <div className="slide">
                <h3 className="title">{title}</h3>
                <ul>
                    {items && items.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.jumpUrl} title={item.title}>{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };
}

export default SideList;