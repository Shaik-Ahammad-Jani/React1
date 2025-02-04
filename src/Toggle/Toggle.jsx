import { Component } from "react";

class Toggle extends Component{
    constructor(){
        super()
        this.state={
            text:true,
            count:0,
            count1:0,
            color:"",
            value:"",
            list:["homework"],
        }

    }
    render(){
        return (
            <>
            <h1>{this.state.text?<p>Hello</p>:<p>---</p>}</h1>
            <button onClick={
                ()=>{
                    this.setState({text:!this.state.text})
                }
            }>{this.state.text?"Hide":"Show"}</button>

            <hr />


            <h1>Likes: {this.state.count}</h1>
            <h1>DisLikes: {this.state.count1}</h1>
            <button onClick={()=>{
                this.setState({count:this.state.count+1})
            }}>Like Me 👍</button>
            <button onClick={()=>{
                this.setState({count1:this.state.count1+1})
            }}>DisLike Me 👍</button>

            <hr/>

            <h1>Cahnge Colors</h1>
            <input type="text" placeholder="Type Color" onChange={(e)=>{this.setState({color:e.target.value})}} />
            
            <br />

            <div style={{height:"300px",width:"300px",backgroundColor:`${this.state.color}`,border:"1px solid",margin:"10px 10px"}}>

            </div>
            <hr />
            <input type="text" placeholder="Type Something" onChange={(e)=>{this.setState({value:e.target.value})}} /> &emsp;
            <button onClick={()=>{
                this.setState({list:[...this.state.list,this.state.value]})
            }}>Click Me!</button>
            <div id="div" style={{height:200,width:200,border:"1px solid"}}>
                {this.state.list.map((task,index)=>(
                    <li key={index}>{task}</li>
                ))}
            </div>

            </>

        )
    }
}
export default Toggle