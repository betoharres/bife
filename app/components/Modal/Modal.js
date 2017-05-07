import React from 'react'
import Dialog from 'material-ui/Dialog'

export default function Modal ({isOpen, handleClose, component}) {
  return (
    <Dialog modal={false} open={isOpen} onRequestClose={handleClose}>
      {component}
    </Dialog>
  )

}
