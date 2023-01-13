import React from 'react';

const TweetHeader = () => (
    <div className="tweet-header">
        <img
            src="./pic.png"
            alt="avatar"
        />
        <div>
            <span className="tweet-header__name">Leigh Halliday</span>
            <span className="tweet-header__user">@leighchalliday</span>
        </div>
    </div>
);
export default TweetHeader;