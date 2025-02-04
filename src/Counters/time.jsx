import  { Component } from "react";

class Time extends Component {
    constructor() {
        super();
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
            intervalId: null,
        };
    }

    StartTime = () => {
        if (this.state.intervalId) return; // Prevent multiple intervals

        let intervalId = setInterval(() => {
            let now = new Date();
            this.setState({
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds(),
                milliseconds: now.getMilliseconds(),
            });
        }, 1); // Update every 1 millisecond

        this.setState({ intervalId });
    };

    StopTime = () => {
        clearInterval(this.state.intervalId);
        this.setState({ intervalId: null });
    };

    ResetTime = () => {
        this.StopTime();
        this.setState({
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        });
    };

    render() {
        return (
            <>
                <h1>{`${this.state.hours}:${this.state.minutes}:${this.state.seconds}:${this.state.milliseconds}`}</h1>
                <button onClick={this.StartTime}>Start</button>
                <button onClick={this.StopTime}>Stop</button>
                <button onClick={this.ResetTime}>Reset</button>
            </>
        );
    }
}

export default Time;
