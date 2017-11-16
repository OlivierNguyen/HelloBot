import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

export default class ChatInput extends Component {
    static propTypes = {
        onSendMessage: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage() {
        this.props.onSendMessage(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        const S = {
            container: {
                display: 'flex',
                alignItems: 'center',
                height: 60,
                paddingLeft: 15,
                paddingRight: 10,
            },
            buttonContainer: {
                marginLeft: 10,
            },
        };
        return (
            <div style={S.container}>
                <TextField
                    id="inputText"
                    value={this.state.value}
                    onChange={(event, value) => this.setState({ value })}
                    onKeyPress={event => {
                        if (event.key === 'Enter' && this.state.value) {
                            event.preventDefault();
                            this.sendMessage();
                        }
                    }}
                />
                <div style={S.buttonContainer}>
                    <FlatButton
                        label="Envoyer"
                        primary={true}
                        onClick={this.sendMessage}
                        disabled={!this.state.value}
                    />
                </div>
            </div>
        );
    }
}
