import * as React from 'react'
import Container from '../Container/Container'
import { ScrollView, StatusBar } from 'react-native'
import { withTheme } from '../../theming'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
// import Device from '../../services/device'
import { View, LayoutChangeEvent } from 'react-native'
import useLayout from '../../hooks/useLayout'

interface ModalProps {
  /**
   * Enable scrollView
   */
  scrollEnabled?: boolean

  /**
   * Dismiss the modal view
   */
  dismiss?: () => void

  theme: any
}

const Modal: React.FC<ModalProps> = props => {
  const [layout, updateLayout] = useLayout()
  const onLayout = (event: LayoutChangeEvent) => {
    updateLayout(event.nativeEvent.layout)
  }
  const scrollViewContent = <ScrollView>{props.children}</ScrollView>
  const tabletSplitView = layout && layout.width > 700
  const tabletFullScreenStyle = {
    width: 600,
    height: layout && layout.height / 1.5,
    marginTop: 100,
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      <Container
        marginTop={50}
        marginLeft={10}
        marginRight={10}
        backgroundColor={'#ffffff'}
        viewStyle={{
          alignSelf: tabletSplitView ? 'center' : 'stretch',
          shadowColor: '#000000',
          shadowRadius: 20,
          shadowOpacity: 0.2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          ...(tabletSplitView ? tabletFullScreenStyle : { flex: 1 }),
        }}
      >
        <StatusBar hidden={true} animated={true} showHideTransition={'slide'} />
        {props.dismiss && (
          <Container viewStyle={{ position: 'absolute', right: 10, top: 10, zIndex: 10 }}>
            <Button
              iconButton={true}
              icon={
                <Icon icon={props.theme.icons.CLOSE} color={props.theme.colors.primary.accessory} size={40} />
              }
              onPress={props.dismiss}
            />
          </Container>
        )}
        {props.scrollEnabled ? scrollViewContent : props.children}
      </Container>
    </View>
  )
}

export default withTheme(Modal)
