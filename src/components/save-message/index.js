'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const SaveMessage = ({ isSaving }) => (
  isSaving !== null && isSaving !== undefined && (
    <span className='save-message'>
      {isSaving ? 'Salvando...' : 'Salvo!'}
    </span>
  )
)

SaveMessage.propTypes = {
  isSaving: PropTypes.bool
}

export default SaveMessage
