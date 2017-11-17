import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import EditorModeComment from 'material-ui/svg-icons/editor/mode-comment';
import PropTypes from 'prop-types';

export default class OpenChatButton extends Component {
    static propTypes = {
        isChatOpen: PropTypes.func.isRequired,
    };

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
                    this.setState(
                        prevState => ({
                            isChatOpen: !prevState.isChatOpen,
                        }),
                        () => this.props.isChatOpen(this.state.isChatOpen)
                    )}
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
