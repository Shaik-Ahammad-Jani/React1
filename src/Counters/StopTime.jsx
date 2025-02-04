import { Component } from "react";

class TimeStop extends Component{
    constructor(){
        super()
        this.state={
            hours:0,
            minutes:0,
            seconds:0,
            milliseconds:0,
            intervalId:null,
        }
    }
    StartTime = () =>{
        if (this.state.intervalId) return;

        let id=setInterval(() => {
            let a=new Date()
            this.setState({
                hours:a.getHours(),
                minutes:a.getMinutes(),
                seconds:a.getSeconds(),
                milliseconds:a.getMilliseconds()
            })
        }, 1);
        this.setState({intervalId:id})
    }
    StopTime = () =>{
        clearInterval(this.state.intervalId)
        this.setState({intervalId:null})
    }
    Reset = () =>{
        this.StopTime()
        this.setState({
            hours:0,
            minutes:0,
            seconds:0,
            milliseconds:0
        })
    }
    render(){
        return(
            <>
            <h1>{`${this.state.hours}:${this.state.minutes}:${this.state.seconds}:${this.state.milliseconds}`}</h1>
            <button onClick={this.StartTime}>Start</button>
            <button onClick={this.StopTime}>Stop</button>
            <button onClick={this.Reset}>Reset</button>
            
            </>
        )
    }
}
export default TimeStop