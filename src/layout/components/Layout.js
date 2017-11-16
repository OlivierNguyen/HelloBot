import React, { Component } from 'react';
import OpenChatButton from './OpenChatButton';

export default class Layout extends Component {
    render() {
        const S = {
            container: {},
            buttonContainer: {},
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
