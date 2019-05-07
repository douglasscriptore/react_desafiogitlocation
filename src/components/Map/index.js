import React, { Component } from 'react'
import MapGL, { Marker } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

export default class Map extends Component {
  // cria o state pro map
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.0821,
      longitude: -52.4622,
      zoom: 14
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this._resize)
    this._resize()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._resize)
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
  }

  render () {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle='mapbox://styles/mapbox/basic-v9'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOXACCESSTOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker
          latitude={-23.0821}
          longitude={-52.4622}
          onClick={this.handleMapClick}
          captureClick
        >
          <img
            style={{
              borderRadius: 100,
              width: 48,
              height: 48
            }}
            src='https://avatars2.githubusercontent.com/u/2254731?v=4'
          />
        </Marker>
      </MapGL>
    )
  }
}
