import React from 'react';
import './sidebar.css'
import People from '../findPeople/findPeople';

class Sidebar extends React.Component {

    findFriends() {
        var popup = document.getElementById("people-popup");
        if (popup.style.visibility === "visible") {
            popup.style.visibility = "hidden";
        } else {
            popup.style.visibility = "visible";
        }
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-top">
                    <span className="chat-title">
                        <h1 id="title">Chats</h1>
                    </span>
                    <span className="add-chat">
                        <button className="add-chat-button" onClick={this.findFriends.bind(this)}>
                            <h1 id="addition-sign">
                                +
                            </h1>
                        </button>
                        <div className="show-people" id="people-popup">
                            <People></People>
                        </div>
                    </span>
                    
                </div>
                <div className="chats">
                    <ul className="chat-names">
                        <li>
                            <div className="chat-name">
                                <h2>Group Chat Chat</h2>
                            </div>
                        </li>
                        <li>
                            <div className="chat-name">
                                <h2>Group DM Chat</h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;