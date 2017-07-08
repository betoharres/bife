import React from 'react'
import Dialog from 'material-ui/Dialog'

export default function Modal ({isOpen, handleClose, Component}) {
  return (
    <Dialog modal={false} open={isOpen} onRequestClose={handleClose}>
      <Component />
    </Dialog>
  )

}
