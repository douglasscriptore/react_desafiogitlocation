import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { Creators as UserActions } from '../../store/ducks/users'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Map from '../../components/Map'
import LeftBar from '../../components/LeftBar'

class Main extends Component {
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
    removeUserRequest: PropTypes.func.isRequired
  }

  handleDelete = user => {
    console.log(user)
    this.props.removeUserRequest(user)
  }
  handleGoGit = url => {
    window.open(url, '_blank')
  }

  render () {
    return (
      <Fragment>
        <LeftBar
          handleGoGit={this.handleGoGit}
          handleDelete={this.handleDelete}
          data={this.props.users.data}
        />
        <Map />
        <ToastContainer />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
