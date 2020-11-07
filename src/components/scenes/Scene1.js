
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
     

        this.animate = this.animate.bind( this ); 
        this.setUpLights = this.setUpLights.bind( this ); 
    }

    componentDidMount(){  
        this.renderer = new THREE.WebGLRenderer();   
        this.scene = new THREE.Scene( );
        this.renderer.setPixelRatio( window.devicePixelRatio ); 
        const container = document.querySelector( '#' + this.props.sceneID);
        this.renderer.setSize( container.clientWidth, container.clientHeight)
        this.camera = new THREE.PerspectiveCamera( 50, container.clientWidth / container.clientHeight, 0.1, 1000 );

        const loadingManager = new THREE.LoadingManager( ()=>{
            this.scene.add(this.displayedObject.object)
        })

        const loader = new ColladaLoader( loadingManager ); 
        loader.load('/' + this.props.model, ( collada ) => {
            this.displayedObject.object = collada.scene; 
        })
		
        this.setUpLights(); 	
        this.camera.position.z = 6;
        this.camera.position.y = 1;


        const controls = new OrbitControls( this.camera, this.renderer.domElement);
        controls.minDistance = 2;
        controls.maxDistance = 5;
        controls.enablePan = false;
        controls.enableZoom = false;

        container.appendChild( this.renderer.domElement );
        this.renderer.render(this.scene, this.camera)
        this.animate();
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