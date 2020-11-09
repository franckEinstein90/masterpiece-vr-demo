import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Scene1 from "../components/scenes/Scene1"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <div className="row">

      <Scene1 rotateRight="true" model="object0.dae" sceneID="scene0" 
        des="1. starting with a cube" /> 

      <Scene1 model="object1.dae" 
        des="2. extruding some planes" sceneID="scene1" /> 

      <Scene1 model="object2.dae" rotateRight="true" sceneID="scene2" 
        des="3. adding some angles" />

      <Scene1 model="object3.dae" des="4. subsurf modifier" 
        rotateRight ="false" sceneID="scene3" />

      <Scene1 model="object5.dae" des="5. free-hand sculpting" 
        sceneID="scene5" />

      <Scene1 model="object6.dae" des="6. greater detailing" 
        rotateRight="true" sceneID="scene6" />

      </div>

  </Layout>
)

export default IndexPage
