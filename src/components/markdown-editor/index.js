'use strict'

import React, { PropTypes } from 'react'

import './styles.css'

const MarkdownEditor = ({ value, handleChange, getMarkup }) => (
  <div className='editor'>
    <textarea value={value} onChange={handleChange} autoFocus />

    <div className='view' dangerouslySetInnerHTML={getMarkup()} />
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor