import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import EditorModeComment from 'material-ui/svg-icons/editor/mode-comment';

export default class OpenChatButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChatOpen: false,
        };
    }
    render() {
        return (
            <FloatingActionButton
                onClick={() =>
                    this.setState(prevState => ({
                        isChatOpen: !prevState.isChatOpen,
                    }))}
            >
                {this.state.isChatOpen ? (
                    <ContentClear />
                ) : (
                    <EditorModeComment />
                )}
            </FloatingActionButton>
        );
    }
}
