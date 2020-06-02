'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditorHeader = ({ handleSave, handleRemove, handleCreate, isSaving }) => (
  <header className='editor-header'>
    <span className='save-message'>{isSaving ? 'Salvando...' : 'Salvo!'}</span>
    <button onClick={handleCreate} className='create' >Criar novo</button>
    <button onClick={handleSave} className='save'>Salvar</button>
    <button onClick={handleRemove} className='remove'>Apagar</button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  handleSave: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired
}

export default MarkdownEditorHeader
