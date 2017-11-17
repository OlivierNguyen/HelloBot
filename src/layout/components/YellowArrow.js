import React, { Component } from 'react';
import TweenMax from 'gsap';
import PropTypes from 'prop-types';

export default class YellowArrow extends Component {
    static propTypes = {
        description: PropTypes.string,
        show: PropTypes.bool,
    };

    static defaultProps = {
        description: '',
        show: true,
    };

    constructor(props) {
        super(props);
        this.bounceAnimation = this.bounceAnimation.bind(this);
        this.hideArrowAnimation = this.hideArrowAnimation.bind(this);
    }

    componentDidMount() {
        if (this.props.show) {
            this.bounceAnimation();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.show) {
            this.bounceAnimation();
        } else {
            this.hideArrowAnimation();
        }
    }

    bounceAnimation() {
        TweenMax.set(this.arrow, { opacity: 1 });
        return TweenMax.to(this.arrow, 0.3, {
            display: 'block',
            width: 200,
            repeat: -1,
            yoyo: true,
            opacity: 1,
        });
    }

    hideArrowAnimation() {
        TweenMax.killAll();
        return TweenMax.to(this.arrow, 0.5, {
            opacity: 0,
            onComplete: () => {
                TweenMax.set(this.arrow, {
                    opacity: 1,
                    display: 'none',
                    width: 190,
                });
            },
        });
    }

    render() {
        return [
            <div
                key="description"
                style={{
                    width: 75,
                    marginBottom: 10,
                    color: '#fff',
                    opacity: this.props.show ? 1 : 0,
                }}
            >
                {this.props.description}
            </div>,
            <img
                key="image"
                style={{
                    width: 190,
                    textAlign: 'right',
                }}
                alt="arrowRight"
                ref={ref => (this.arrow = ref)}
                src="/images/arrow-right.svg"
                height="140"
            />,
        ];
    }
}
