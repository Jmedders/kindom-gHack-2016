import React, { Component } from 'react'

export default class Layout extends Component{
  render(){
    return(
      <html lang="en">
        <head>
          <title>express-nested-views</title>
          <meta name="HandheldFriendly" content="true" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="css/main.css" />

          <script src="bower_components/jquery/dist/jquery.min.js"></script>
        </head>
        <body className="container-fluid">

          <div id="nav-header">

            <header>
              <span>Kingdom</span>
            </header>

            <nav id="nav">
              <a href="/" >Home</a>
              <span> | </span>
              <a href="/auth" >Login/Signup</a>
            </nav>

          </div>

          <main>
            {this.props.children}
          </main>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGCCxLOiPANGpNZzVA0NSL1_BLns4MXKY&libraries=places&callback=initAutocomplete"
          async defer></script>
          <script src="js/map.js"></script>
          <script src="js/active-link.js"></script>
          <script src="js/eventBoxes.js"></script>
        </body>
      </html>
    )
  }
}
