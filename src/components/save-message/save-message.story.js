'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SaveMessage from './index'

const stories = storiesOf('SaveMessage', module)

stories.add('SaveMessage with isSaving === null', () => (
  <div>
    Message: <SaveMessage isSaving={null} />
  </div>
))

stories.add('SaveMessage with isSaving === false', () => (
  <div>
    Message: <SaveMessage isSaving={false} />
  </div>
))

stories.add('SaveMessage with isSaving === true', () => (
  <div>
    Message: <SaveMessage isSaving={true} />
  </div>
))
