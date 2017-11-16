import React, { Component } from 'react';
import OpenChatButton from './OpenChatButton';
import ChatContainer from '../../chat/components/ChatContainer';

export default class Layout extends Component {
    render() {
        const S = {
            container: {},
            buttonContainer: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                padding: 20,
            },
            chatContainer: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                marginRight: 15,
                marginBottom: 100,
            },
        };

        return (
            <div style={S.container}>
                <div style={S.chatContainer}>
                    <ChatContainer />
                </div>
                <div style={S.buttonContainer}>
                    <OpenChatButton />
                </div>
            </div>
        );
    }
}
