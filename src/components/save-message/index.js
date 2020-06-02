'use strict'

import React, { PropTypes } from 'react'

const SaveMessage = ({ isSaving }) => (
  isSaving !== null && (
    <span className='save-message'>
      {isSaving ? 'Salvando...' : 'Salvo!'}
    </span>
  )
)

SaveMessage.propTypes = {
  isSaving: PropTypes.bool
}

export default SaveMessage
