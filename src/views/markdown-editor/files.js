'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Files = ({ files, handleOpenFile }) => (
  <div className='files-list-container'>
    <h2>Files</h2>

    <ul className='files-list'>
      {Object.keys(files).map((fileId) => (
        <li key={fileId}>
          <button onClick={handleOpenFile(fileId)}>{fileId}</button>
        </li>
      ))}
    </ul>
  </div>
)

Files.propTypes = {
  files: PropTypes.object,
  handleOpenFile: PropTypes.func.isRequired
}

export default Files
