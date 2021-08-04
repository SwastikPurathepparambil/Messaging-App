import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Board from '../../components/whiteboard/Board';
import './main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <Sidebar></Sidebar>
                <Board></Board>
            </div>
        );
    }
}

export default Main;