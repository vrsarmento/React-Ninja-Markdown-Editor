'use strict'

import React, { PropTypes } from 'react'
import Button from 'components/button'

const MarkdownEditorHeader = ({ handleRemove, handleCreate, isSaving }) => (
  <header className='editor-header'>
    {isSaving !== null && (
      <span className='save-message'>
        {isSaving ? 'Salvando...' : 'Salvo!'}
      </span>
    )}
    <Button onClick={handleCreate} kind='info'>Criar novo</Button>
    <Button onClick={handleRemove} kind='danger'>Apagar</Button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  isSaving: PropTypes.bool
}

export default MarkdownEditorHeader
