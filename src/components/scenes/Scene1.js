
"use strict"; 

import React, {useContext} from 'react';

import "./Scene.css"
import * as THREE from 'three'; 
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 
import { LoadingManager } from 'three';


class Scene1 extends React.Component {

    constructor( props ) {
     
        super(props);  
      
        this.displayedObject = {
            object: null
        }; 

        this.animate        = this.animate.bind( this );
        this.loadModel      = this.loadModel.bind( this ) ; 
        this.setUpLights    = this.setUpLights.bind( this ); 
        this.resize         = this.resize.bind( this ); 
    }

    componentDidMount(){  
        const container = document.querySelector( '#' + this.props.sceneID);
        if(!container) throw('Unable to find scene container')
        /*******************************************************************/
        this.renderer = new THREE.WebGLRenderer({antialias:true}); 
        this.renderer.setClearColor( 0x000000, 1 ); 
        this.renderer.setPixelRatio( window.devicePixelRatio ); 
        this.renderer.setSize( container.clientWidth, container.clientHeight)
        /*******************************************************************/
        this.scene = new THREE.Scene( );
        /*******************************************************************/
        this.camera = new THREE.PerspectiveCamera( 50, container.clientWidth / container.clientHeight, 0.1, 1000 );
        this.camera.position.z = 6;
        this.camera.position.y = 1;
        /*******************************************************************/
        this.loadModel(); 
        /*******************************************************************/
        this.setUpLights(); 	
        /*******************************************************************/
        const controls = new OrbitControls( this.camera, this.renderer.domElement);
        controls.minDistance    = 2;
        controls.maxDistance    = 5;
        controls.enablePan      = true;
        controls.enableZoom     = true;
        /*******************************************************************/
        container.appendChild( this.renderer.domElement );
        this.renderer.render( this.scene, this.camera ); 
        /*******************************************************************/
        window.addEventListener('resize', this.resize);
        this.animate();

    }

    loadModel(){
        const loadingManager = new THREE.LoadingManager( ()=>{
            this.scene.add(this.displayedObject.object)
        })

        const loader = new ColladaLoader( loadingManager ); 
        loader.load('/' + this.props.model, ( collada ) => {
            this.displayedObject.object = collada.scene; 
        })
    }

    setUpLights(){
        const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.2 );
        this.scene.add( ambientLight );

        const directionalLight = new THREE.DirectionalLight( 0xff0000, 0.3 );
        directionalLight.position.set( 10, 10, 10 ); 
        this.scene.add( directionalLight );

        const light = new THREE.DirectionalLight( 0xffffff, 0.4 );
        light.position.set( 1, -10, 1 );
        this.scene.add( light );
    }

    resize(){
        const container = document.querySelector( '#' + this.props.sceneID);
        this.renderer.setSize( container.clientWidth, container.clientHeight ); 
        /*******************************************************************/
    
    }
    
    animate() {
        requestAnimationFrame( this.animate );
        if(this.displayedObject.object){
            this.props.rotateRight
            ? this.displayedObject.object.rotation.z += 0.01
            : this.displayedObject.object.rotation.z -= 0.01
        }
        this.renderer.render( this.scene, this.camera );
    }

    render(){
        return (   
            <div className ="col-md-6">
            <div className="card mb6 box-shadow scene-container" id={this.props.sceneID}>
            </div>
            </div>
        )
    }
}

export default Scene1;