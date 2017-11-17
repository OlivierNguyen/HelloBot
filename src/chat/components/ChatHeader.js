import React, { Component } from 'react';

export default class ChatHeader extends Component {
    render() {
        const S = {
            container: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: 80,
                backgroundColor: '#ffc525',
                color: '#fff',
                borderRadius: '5px 5px 0 0',
            },
            title: {
                fontSize: 16,
                marginBottom: 5,
            },
            description: {
                fontSize: 14,
            },
        };
        return (
            <div style={S.container}>
                <div style={S.title}>HelloBot</div>
                <div style={S.description}>This bot is using Recast.ai API</div>
            </div>
        );
    }
}
