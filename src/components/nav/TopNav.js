import React, {useContext} from 'react';
import { Link } from "gatsby"
import "./TopNav.css"


class TopNav extends React.Component {

    constructor( props ) {
     
        super(props);  
    }
    
    render(){
        return ( 
            <header>
            <div className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className ="text-white">About</h4>
                            <p className ="text-muted">By Franck Binard, 
                            Demo masterPiece, integrating
                            3D models in a gatsby site</p> </div>
                    </div>
                </div>
            </div> 
            
            <div className ="navbar navbar-dark bg-dark box-shadow">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Modeling something, step by step</strong>
                    </a>
                    <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className ="navbar-toggler-icon"></span>
                    </button>
            </div>
            </div>
            </header>
        )
    }
}

export default TopNav; 