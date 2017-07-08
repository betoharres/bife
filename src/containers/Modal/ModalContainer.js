import React, {Component} from 'react'
import { Modal } from '../../components'

import { connect } from 'react-redux'
import { closeModal } from '../../redux/modules/modal'

class ModalContainer extends Component {

  handleCloseModal (e) {
    this.props.dispatch(closeModal())
  }

  render () {
    return (
      <Modal
        isOpen={this.props.isOpen}
        Component={this.props.Component}
        handleClose={(e) => this.handleCloseModal(e)} />
    )
  }
}

function mapStateToProps ({modal}) {
  const { text, isOpen, Component } = modal
  return {
    Component,
    text,
    isOpen,
  }
}

export default connect(mapStateToProps)(ModalContainer)
