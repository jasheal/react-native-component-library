import * as React from 'react'
import { render } from 'react-native-testing-library'
import ActivityHeader from '../ActivityItemHeader'

//  // Message hash
//  id?: string
//  // Timestanp in ms
//  date: number
//  // Incoming message
//  incoming?: boolean
//  // Reason text
//  reason?: string
//  // Activity text
//  activity?: string
//  // Issuer
//  issuer: Kancha.Identity
//  // Subject
//  subject: Kancha.Identity
//  // Profile Action
//  profileAction: (id: string) => void

describe('Component(snapshots): ActivityHeader', () => {
  const action = jest.fn()
  const baseProps = {
    id: 'ZFGHFSJD',
    date: 123445678910,
    issuer: { name: 'Test Issuer', did: 'ethr:did:123456', avatar: { uri: 'http://' } },
    subject: { name: 'Test Subject', did: 'ethr:did:123456', avatar: { uri: 'http://' } },
    profileAction: action,
  }

  it('should render incoming true with reason', () => {
    const tree = render(
      <ActivityHeader incoming={true} reason={'to test the components'} {...baseProps} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render incoming false with reason', () => {
    const tree = render(
      <ActivityHeader incoming={false} reason={'to test the components'} {...baseProps} />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render incoming true without reason', () => {
    const tree = render(<ActivityHeader incoming={true} {...baseProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render incoming false without reason', () => {
    const tree = render(<ActivityHeader incoming={false} {...baseProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})