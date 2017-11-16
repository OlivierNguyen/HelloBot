import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChatBubbleText extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        delay: PropTypes.number,
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    componentDidMount() {
        if (this.props.delay) {
            this.setState({ isLoading: true }, () => {
                setTimeout(
                    () => this.setState({ isLoading: false }),
                    this.props.delay
                );
            });
        }
    }

    render() {
        const { position } = this.props;
        const isSelf = position === 'right';

        const S = {
            container: {
                textAlign: position,
            },
            containerBubble: {
                margin: 8,
            },
            bubble: {
                fontSize: 13,
                backgroundColor: isSelf ? '#00bcd4' : '#e1e1e1',
                padding: 8,
                borderRadius: isSelf ? '10px 10px 0 10px' : '10px 10px 10px 0',
                textAlign: 'left',
                display: 'inline-block',
                maxWidth: 'calc(100% - 100px)',
            },
        };

        return (
            <div style={S.container}>
                <div style={S.containerBubble}>
                    {this.state.isLoading ? (
                        <span style={S.bubble}>...</span>
                    ) : (
                        <span style={S.bubble}>{this.props.text}</span>
                    )}
                </div>
            </div>
        );
    }
}
