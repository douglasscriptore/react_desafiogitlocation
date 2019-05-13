import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as _DialogActions } from '../../store/ducks/dialogs'
import { Creators as UserActions } from '../../store/ducks/users'

class FormDialog extends React.Component {
  state = {
    name: '',
    latitude: 0,
    longitude: 0
  }

  static defaultProps = {
    dialog: {
      open: false
    }
  }

  static propTypes = {
    dialog: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    }),
    addUserRequest: PropTypes.func.isRequired,
    closeDialogRequest: PropTypes.func.isRequired,
    user: PropTypes.shape({
      error: PropTypes.string
    })
  }

  handleAddRepository = async () => {
    // const [latitude, longitude] = this.props.dialog
    const latitude = this.props.dialog.latitude
    const longitude = this.props.dialog.longitude

    await this.props.addUserRequest({ ...this.state, latitude, longitude })
  }

  handleClose = () => {
    this.props.closeDialogRequest({ open: true })
    this.setState({ name: '' })
  }

  componentWillReceiveProps (nextProps) {
    console.log('nextProps', nextProps)
    if (nextProps.dialog.open === false) {
      this.setState({ name: '' })
    }
  }

  render () {
    return (
      <Dialog
        open={this.props.dialog.open}
        onClose={this.handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Adicionar Usuario</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='usuario do github'
            type='text'
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            fullWidth
            error={!!this.props.user.error}
            helperText={this.props.user.error ? this.props.user.error : ' '}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={this.handleAddRepository} color='primary'>
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const mapStateToProps = state => ({
  dialog: state.dialogs,
  user: state.users
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ..._DialogActions, ...UserActions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormDialog)
