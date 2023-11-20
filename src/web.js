import { Component } from "react";
import { FcRating } from "react-icons/fc"
import './web.css'

class Web extends Component{
    render(){
        const {data}=this.props
        console.log(data);
        const data2=data.map((e,i)=>{
        return(
              <div className="edit" key={i} >
                <img src={e.Image}/>
                <div className="edit3">
                <h3>{e.hotelName}</h3>
                <h3><FcRating />{e.Rating}</h3>
                <p>{e.location}</p>
                </div>
              </div>
        )
        })
        return(
              <div className="edit2">
                {data2}
              </div>
        )
    }
}
export default Web;