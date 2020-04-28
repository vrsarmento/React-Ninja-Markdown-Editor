'use strict'

import React, { PropTypes } from 'react'

import './example.css'

const Example = ({ children }) => (
  <div>{children}</div>
)

Example.propTypes = {
  children: PropTypes.node.isRequired
}

export default Example
