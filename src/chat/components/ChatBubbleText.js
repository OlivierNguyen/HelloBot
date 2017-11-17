import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TweenMax from 'gsap';

export default class ChatBubbleText extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        delay: PropTypes.number,
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    componentDidMount() {
        TweenMax.to(this.bubble, 0.5, {opacity: 1});
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
        const { text, position, type } = this.props;
        const isSelf = position === 'right';

        const S = {
            container: {
                textAlign: position,
            },
            containerBubble: {
                opacity: 0, // Init to 0 to apply animation
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
                wordWrap: 'break-word',
            },
            image: {
                maxWidth: 200,
                maxHeight: 200,
            },
        };

        let content = <span style={S.bubble}>{text}</span>;
        if (type === 'picture') {
            content = <img style={S.image} src={text} alt="" />;
        }

        return (
            <div style={S.container}>
                <div style={S.containerBubble} ref={ref => this.bubble = ref}>
                    {this.state.isLoading ? (
                        <span style={S.bubble}>...</span>
                    ) : (
                        content
                    )}
                </div>
            </div>
        );
    }
}
