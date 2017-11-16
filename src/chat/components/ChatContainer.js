import React, { Component } from 'react';
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import ChatInput from './ChatInput';

export default class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heightList: 0,
        };
    }

    componentDidMount() {
        this.setState({
            heightList: this.chat.clientHeight - 140, // 140 is the sum of ChatHeader and ChatInput height
        });
    }
    
    render() {
        const S = {
            container: {
                width: 360,
                height: 500,
                border: 'solid 1px #ababab',
            },
        };
        return (
            <div ref={ref => (this.chat = ref)} style={S.container}>
                <ChatHeader />
                <ChatList height={this.state.heightList}/>
                <ChatInput />
            </div>
        );
    }
}
