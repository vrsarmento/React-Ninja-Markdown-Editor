'use strict'

import React, { PropTypes } from 'react'
import Header from './markdown-editor-header'

import './styles.css'

const MarkdownEditor = ({ value, handleChange, handleSave, getMarkup }) => (
  <section className='editor'>
    <Header handleSave={handleSave}/>
    <textarea value={value} onChange={handleChange} autoFocus />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor
