import React, { Component } from "react"
import {useDispatch,useSelector} from "react-redux";
import {movieData} from "../store/actions";
import {connect} from 'react-redux'


class movie extends Component{
    getMoviesHandeler(){
        this.props.dispatch(movieData())
    }
    
    render(){
        console.log(this.props)
        return(
          <div>
              <button onClick={()=>this.getMoviesHandeler()}>Get novies</button>

          </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{movies:state.movies}
}


export default connect(mapStateToProps)(movie);
