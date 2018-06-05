import React, { Component } from 'react';
import './SocialCard.css';
import Icon from 'react-icons-kit';
import {ic_chat_bubble_outline} from 'react-icons-kit/md/ic_chat_bubble_outline'
import {retweet} from 'react-icons-kit/fa/retweet'
import {heart} from 'react-icons-kit/fa/heart'
import {envelopeO} from 'react-icons-kit/fa/envelopeO'

class SocialCard extends Component {
  render() {
    return (
      <div className="outer-card">
        <div className="oc-top-box">
          <h4>Progger Blogger<p className="twitter-link">@proggerblogger &middot; Jun 4</p></h4>
          <p>{this.props.question}</p>
        </div>


        <div className="inner-card">

          <div className="card-top">
            <img src={this.props.image} alt="band-logo" width="50" height="50" />
            <h2>{this.props.tagline}</h2>
          </div>

          <div className="card-bottom">
            <div className="card-bottom-text">
              <p><strong>{this.props.urgeOn}</strong></p>
              <p>{this.props.callToAction}</p>
            </div>
          </div>
        </div>

        <div className="oc-bottom-box">
          <div className="oc-bottom-box__icons" id="chat"><Icon icon={ic_chat_bubble_outline} />
            <strong>{this.props.chats}</strong>
          </div>
          <div className="oc-bottom-box__icons" id="retweet"><Icon icon={retweet} />
            <strong>{this.props.retweets}</strong>
          </div>
          <div className="oc-bottom-box__icons" id="heart"><Icon icon={heart} />   
            <strong>{this.props.hearts}</strong>
          </div>
          <div className="oc-bottom-box__icons" id="mail"><Icon icon={envelopeO} /></div>
        </div>
      </div>
    );
  }
}

export default SocialCard;