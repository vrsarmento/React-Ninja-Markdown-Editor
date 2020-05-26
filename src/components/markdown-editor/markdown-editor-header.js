'use strict'

import React from 'react'

const MarkdownEditorHeader = ({ handleSave }) => (
  <header className='editor-header'>
    <button onClick={handleSave} className='save'>Salvar</button>
  </header>
)

export default MarkdownEditorHeader
