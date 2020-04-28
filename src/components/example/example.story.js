'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Example from './index'

const stories = storiesOf('Example', module)

stories.add('without props', () => (
  <Example>Main Example</Example>
))
