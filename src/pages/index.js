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
      <Scene1 rotateRight="true" model="object0.dae" sceneID="scene0" /> 
      <Scene1 model="object1.dae" sceneID="scene1" /> 
      <Scene1 model="object2.dae" rotateRight="true" sceneID="scene2" />
      <Scene1 model="object3.dae" rotateRight ="false" sceneID="scene3" />
      <Scene1 model="object5.dae" sceneID="scene5" />
      <Scene1 model="object6.dae" rotateRight="true" sceneID="scene6" />
      </div>

  </Layout>
)

export default IndexPage
