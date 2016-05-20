import React, { Component } from 'react'

import Layout from './layout/layout'

import MapComponent from './components/MapComponent'
import InfoBox from './components/InfoBox'

export default class Index extends Component{
  render(){
    return(
      <Layout player={this.props.player}>

        <MapComponent />

        <div className="container-fluid">
          <InfoBox title='Leaders'/>
          <InfoBox title='Armies'/>
          <InfoBox title='Recent Battles'/>
        </div>

      </Layout>
    )
  }
}
