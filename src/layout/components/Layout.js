import React, { Component } from 'react';
import OpenChatButton from './OpenChatButton';

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
        };

        return (
            <div style={S.container}>
                <div style={S.buttonContainer}>
                    <OpenChatButton />
                </div>
            </div>
        );
    }
}
