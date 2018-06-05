import React, { Component } from 'react';
import './App.css';
import SocialCard from './SocialCard';

class App extends Component {
  constructor() {
    super()

    this.state = {
      cardContents: [
        { id: 1, question: "Looking for better music?", 
          tagline: "Great music, great minds.  Can Prog make you a better coder?", 
          urgeOn: "Can Prog make you a better coder?", 
          callToAction: "Don't have enough time for a long song? Perhaps it's time to rethink your schedule.",
          chats: 2, retweets: 32, hearts: 90, image: "rushicon.jpg"
        },
        { id: 2, 
          question: "Have you checked out Ghost yet?", 
          tagline: "Ghost's new album 'Prequelle' out now!",
          urgeOn: "Ghost drops new album!",
          callToAction: "If you haven't listened to Ghost yet, now's the time.  Hard, psychedelic, and just the right mix of prog.",
          chats: 23, retweets: 189, hearts: 431, image: "prequelle.jpg"
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        {
          this.state.cardContents.map((card) =>
            <SocialCard
              question={card.question}
              tagline={card.tagline}
              urgeOn={card.urgeOn}
              callToAction={card.callToAction}
              chats={card.chats}
              retweets={card.retweets}
              hearts={card.hearts}
              image={card.image}
              key={card.id} />
          )
        }
      </div>
    );
  }
}

export default App;
