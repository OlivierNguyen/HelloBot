import React, { Component } from 'react';
import TweenMax from 'gsap';
import OpenChatButton from './OpenChatButton';
import ChatContainer from '../../chat/components/ChatContainer';
import { HEIGHT_CHAT_CONTAINER } from '../../constants';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChatOpen: false,
        };
    }

    componentDidMount() {
        TweenMax.set(this.chat, { height: 0, opacity: 0 });
    }

    componentDidUpdate() {
        TweenMax.to(this.chat, 0.5, {
            opacity: this.state.isChatOpen ? 1 : 0,
            height: this.state.isChatOpen ? HEIGHT_CHAT_CONTAINER : 200,
            onComplete: () =>
                TweenMax.set(this.chat, {
                    height: this.state.isChatOpen ? HEIGHT_CHAT_CONTAINER : 0,
                }),
        });
    }

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
            logo: {
                padding: 20,
            },
        };

        return (
            <div style={S.container}>
                <img
                    style={S.logo}
                    src="/images/recast-ai-logo-inline.svg"
                    height="120"
                />
                <div style={S.chatContainer} ref={ref => (this.chat = ref)}>
                    <ChatContainer />
                </div>
                <div style={S.buttonContainer}>
                    <OpenChatButton
                        isChatOpen={value =>
                            this.setState({ isChatOpen: value })}
                    />
                </div>
            </div>
        );
    }
}
