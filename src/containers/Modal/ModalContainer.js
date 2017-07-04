import React, {Component} from 'react'
import { Modal } from '../../components'

import { connect } from 'react-redux'
import { closeModal } from '../../redux/modules/modal'

class ModalContainer extends Component {

  handleCloseModal (e) {
    e.stopPropagation()
    this.props.dispatch(closeModal())
  }

  render () {
    return (
      <Modal
        isOpen={this.props.isOpen}
        handleClose={(e) => this.handleCloseModal(e)}
        text={this.props.text} />
    )
  }
}

function mapStateToProps ({modal}) {
  return {
    text: modal.get('text'),
    isOpen: modal.get('isOpen'),
  }
}

export default connect(mapStateToProps)(ModalContainer)
