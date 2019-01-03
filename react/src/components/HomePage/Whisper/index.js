import React, { Component } from 'react';
import './index.scss';

class Whisper extends Component{
    render(){
        return (
            <div className="whisper">
                <h3 className="aside_title"><img src="images/heart_32.png" alt="小情话" width="14px" height="14px"/>&nbsp;小情话&nbsp;<img src="images/heart_32.png" alt="小情话" width="14px" height="14px"/></h3>
                <div className="content">
                    <p>我常想，如果自己不是因为身在异乡，是否对于故乡这两个字就没有深刻的体会，就不会有那种近乡情更怯的感受。</p>
                </div>
            </div>
        );
    }
}

export default Whisper;