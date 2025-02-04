import { Component } from "react";

class CbCounter extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            name:"name"
        }

    }
    render(){
        const names=["jhony","fayaz","Allu","tiru","omesh","syam","naveen","malli"]

        return(
            <>
            <h1 >{this.state.count}</h1>
            <button 
                    onClick={
                        function(){
                            this.setState({count:this.state.count + 1})
                            this.setState({name:names[(this.state.count+names.length)%names.length]})
                        }.bind(this)
                    }
            >+</button>
            <button 
                        onClick={
                            function (){
                                this.setState({count:this.state.count - 1})
                                this.setState({name:names[(this.state.count-1 + names.length)%names.length]})
                            }.bind(this)
                        }
            
            >-</button>
            <button onClick={
                function (){
                    this.setState({count:0})
                    this.setState({name:"unknown"})
                }.bind(this)
            }>Reset</button>
            <h1>{this.state.name}</h1>
            </>
        )
    }
}
export default CbCounter