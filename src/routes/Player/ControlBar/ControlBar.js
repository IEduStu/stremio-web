import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import debounce from 'lodash.debounce';
import Icon from 'stremio-icons/dom';
import { Slider } from 'stremio-common';
import styles from './styles';

class ControlBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seekTime: -1
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.className !== this.props.className ||
            nextProps.paused !== this.props.paused ||
            nextProps.time !== this.props.time ||
            nextProps.duration !== this.props.duration ||
            nextProps.volume !== this.props.volume ||
            nextState.seekTime !== this.state.seekTime;
    }

    componentWillUnmount() {
        this.resetSeekTime.cancel();
    }

    resetSeekTime = debounce(() => {
        this.setState({ seekTime: -1 });
    }, 3000)

    onSliding = (seekTime) => {
        this.resetSeekTime.cancel();
        this.setState({ seekTime });
    }

    onSlidingCompleted = (seekTime) => {
        this.setState({ seekTime });
        this.props.seek(seekTime);
        this.resetSeekTime();
    }

    onSlidingAborted = () => {
        this.resetSeekTime.cancel();
        this.setState({ seekTime: -1 });
    }

    onPlayPauseButtonClicked = () => {
        this.props.paused ? this.props.play() : this.props.pause();
    }

    formatTime = (time) => {
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
    }

    renderSeekBar() {
        if (this.props.time === null || this.props.duration === null) {
            return null;
        }

        return (
            <Slider
                containerClassName={styles['seek-bar']}
                thumbClassName={styles['thumb']}
                value={this.state.seekTime !== -1 ? this.state.seekTime : this.props.time}
                maxValue={this.props.duration}
                minValue={0}
                onSliding={this.onSliding}
                onSlidingAborted={this.onSlidingAborted}
                onSlidingCompleted={this.onSlidingCompleted}
            />
        );
    }

    renderPlayPauseButton() {
        if (this.props.paused === null) {
            return null;
        }

        return (
            <div className={styles['button']} onClick={this.onPlayPauseButtonClicked}>
                <Icon
                    className={styles['icon']}
                    icon={this.props.paused ? 'ic_play' : 'ic_pause'}
                />
            </div>
        );
    }

    renderTimeLabel() {
        if (this.props.time === null || this.props.duration === null) {
            return null;
        }

        const currentTime = this.state.seekTime !== -1 ?
            this.formatTime(this.state.seekTime)
            :
            this.formatTime(this.props.time);

        return (
            <div className={styles['time-label']}>{currentTime} / {this.formatTime(this.props.duration)}</div>
        );
    }

    render() {
        return (
            <div className={classnames(styles['control-bar-container'], this.props.className)}>
                {this.renderSeekBar()}
                <div className={styles['buttons-bar-container']}>
                    {this.renderPlayPauseButton()}
                    <div className={styles['separator']} />
                    {this.renderTimeLabel()}
                </div>
            </div>
        );
    }
}

ControlBar.propTypes = {
    className: PropTypes.string,
    paused: PropTypes.bool,
    time: PropTypes.number,
    duration: PropTypes.number,
    volume: PropTypes.number,
    play: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    seek: PropTypes.func.isRequired
};

export default ControlBar;
