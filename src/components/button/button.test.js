'use strict'

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Button from './index'

const noop = () => null

it('Should Button Default to match snapshot', () => {
  const tree = renderer
    .create(<Button onClick={noop}>Click me</Button>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button Success to match snapshot', () => {
  const tree = renderer
    .create(<Button onClick={noop} kind='success'>Click me</Button>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button Info to match snapshot', () => {
  const tree = renderer
    .create(<Button onClick={noop} kind='info'>Click me</Button>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button Danger to match snapshot', () => {
  const tree = renderer
    .create(<Button onClick={noop} kind='danger'>Click me</Button>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Button with prop kind = "success" should has class "-success"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind='success'>
      Success
    </Button>
  )
  expect(wrapper.hasClass('-success')).toBe(true)
  expect(wrapper.hasClass('-danger')).toBe(false)
  expect(wrapper.hasClass('-info')).toBe(false)
})

it('Button with prop kind = "danger" should has class "-danger"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind='danger'>
      Danger
    </Button>
  )
  expect(wrapper.hasClass('-danger')).toBe(true)
  expect(wrapper.hasClass('-success')).toBe(false)
  expect(wrapper.hasClass('-info')).toBe(false)
})

it('Button with prop kind = "info" should has class "-info"', () => {
  const wrapper = shallow(
    <Button onClick={noop} kind='info'>
      Info
    </Button>
  )
  expect(wrapper.hasClass('-info')).toBe(true)
  expect(wrapper.hasClass('-success')).toBe(false)
  expect(wrapper.hasClass('-danger')).toBe(false)
})
