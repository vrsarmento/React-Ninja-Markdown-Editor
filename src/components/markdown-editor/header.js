'use strict'

import React, { PropTypes } from 'react'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const MarkdownEditorHeader = ({ handleRemove, handleCreate, isSaving }) => (
  <header className='editor-header'>
    <SaveMessage isSaving={isSaving} />
    <Button onClick={handleCreate} kind='info'>Criar novo</Button>
    <Button onClick={handleRemove} kind='danger'>Apagar</Button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
