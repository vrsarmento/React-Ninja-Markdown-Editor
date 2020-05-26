'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditorHeader = ({ handleSave, isSaving }) => (
  <header className='editor-header'>
    <span className='save-message'>{isSaving ? 'Salvando...' : 'Salvo!'}</span>
    <button onClick={handleSave} className='save'>Salvar</button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  handleSave: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired
}

export default MarkdownEditorHeader
