'use strict'

import React, { Component } from 'react'
import marked from 'marked'
import MarkdownEditor from 'components/markdown-editor'

import './css/style.css'

import('highlight.js').then((hljs) => { // Async highlight.js
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
      isSaving: false
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.handleSave = () => {
      localStorage.setItem('md', this.state.value)
      this.setState({ isSaving: false })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }
  }

  componentDidMount () {
    const value = localStorage.getItem('md')
    this.setState({ value })
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 2000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleSave={this.handleSave}
        getMarkup={this.getMarkup}
      />
    )
  }
}

export default App
