import React from 'react'
import { Container, Screen, ActivityItem, Constants, Text } from '@kancha/kancha-ui'
import { NavigationScreen, Screens } from '../../navigators'

const activityFeed = require('../../data/activity_feed.json')

const Component: React.FC<NavigationScreen> = props => {
  const showAttachment = (att: any) => {
    console.log(att)
  }
  const displayProfile = (id: any) => {
    props.navigation.navigate(Screens.Profile, { id })
    console.log(id)
  }
  const confirmRequest = (id: any) => {
    props.navigation.navigate(Screens.Request)
    console.log(id)
  }
  const rejectRequest = (id: any) => {
    props.navigation.navigate(Screens.Request)
    console.log(id)
  }

  return (
    <Screen safeAreaTop={true} safeAreaBottom={false} scrollEnabled={true}>
      <Container>
        <Container padding>
          <Text type={Constants.TextTypes.H5} bold>
            Today
          </Text>
        </Container>
        {activityFeed.map((feedItem: any) => {
          return (
            <ActivityItem
              key={feedItem.id}
              {...feedItem}
              confirm={confirmRequest}
              reject={rejectRequest}
              attachmentsAction={(att: any) => showAttachment(att)}
              profileAction={(id: any) => displayProfile(id)}
            />
          )
        })}
      </Container>
    </Screen>
  )
}

export default Component