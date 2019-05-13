import React, { Component } from 'react'
import MapGL, { Marker } from 'react-map-gl'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import 'mapbox-gl/dist/mapbox-gl.css'

import { Avatar } from './style.js'

import FormDialog from '../FormDialog'

import { Creators as DialogActions } from '../../store/ducks/dialogs'

class Map extends Component {
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

  static propTypes = {
    users: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          login: PropTypes.string,
          name: PropTypes.string,
          avatar_url: PropTypes.string,
          html_url: PropTypes.string,
          latitude: PropTypes.number,
          longitude: PropTypes.number
        })
      ),
      error: PropTypes.string
    }).isRequired,
    openDialogRequest: PropTypes.func.isRequired
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

  handleMapClick = e => {
    const [longitude, latitude] = e.lngLat
    this.props.openDialogRequest({ open: false, latitude, longitude })
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
        <FormDialog />
        {this.props.users.data.map(user => (
          <Marker
            key={user.id}
            latitude={user.latitude}
            longitude={user.longitude}
            onClick={this.handleMapClick}
            captureClick
          >
            <Avatar src={user.avatar_url} />
          </Marker>
        ))}
      </MapGL>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(DialogActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
