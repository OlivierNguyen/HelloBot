import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import ChatBubbleText from './ChatBubbleText';

export default class ChatList extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        height: PropTypes.number,
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    scrollToBottom() {
        this.list.scrollTop = this.list.scrollHeight;
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const S = {
            container: {
                height: this.props.height || '100%',
                overflowY: 'auto',
            },
        };

        return (
            <div style={S.container} ref={ref => (this.list = ref)}>
                {map(this.props.data, (data, index) => (
                    <ChatBubbleText
                        key={index}
                        text={data.text}
                        position={data.position}
                        delay={data.delay}
                    />
                ))}
            </div>
        );
    }
}
