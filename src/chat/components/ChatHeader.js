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
            },
            title: {
                fontSize: 16,
            },
            description: {
                fontSize: 14,
            },
        };
        return (
            <div style={S.container}>
                <div style={S.title}>HelloBot</div>
                <div style={S.description}>Description here</div>
            </div>
        );
    }
}
