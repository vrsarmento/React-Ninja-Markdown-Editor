'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const MarkdownEditorHeader = ({ title, handleRemove, handleCreate, handleChange, isSaving }) => (
  <header className='editor-header'>
    <input type='text' value={title} placeholder='Sem título' onChange={handleChange('title')} className='titleInput' />
    <SaveMessage isSaving={isSaving} />
    <div className='actions-container'>
      <Button onClick={handleCreate} kind='info'>Criar novo</Button>
      <Button onClick={handleRemove} kind='danger'>Apagar</Button>
    </div>
  </header>
)

MarkdownEditorHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
