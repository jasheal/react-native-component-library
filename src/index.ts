/**
 * Components
 */
import Screen from './components/Screen/Screen'
import Container from './components/Container/Container'
import Text, { TextTypes } from './components/Text/Text'
import Button, { ButtonBlocks } from './components/Button/Button'
import Icon from './components/Icon/Icon'
import LogItem from './components/LogItem/LogItem'
import ListItem from './components/ListItem/ListItem'
import Section from './components/Section/Section'
import FabButton from './components/FabButton/FabButton'
import Avatar from './components/Avatar/Avatar'
import MenuItem from './components/MenuItem/MenuItem'
import Modal from './components/Modal/Modal'
import ClaimDebug from './components/ClaimExplore/ClaimDebug'
import ClaimExplore from './components/ClaimExplore/ClaimExplore'
import Banner from './components/Banner/Banner'
import RequestItem from './components/RequestItem/RequestItem'
import AccordionItem from './components/AccordionItem/AccordionItem'
import Toast, { Toaster } from './components/Toast/Toast'
import Credential from './components/Credential/Credential'
import Card from './components/Card/Card'

/**
 * Constants
 */
import { BrandOptions } from './constants'

/**
 * Services
 */
import Device from './services/device'

/**
 * Hooks
 */
import useLayout from './hooks/useLayout'

import * as Typings from './types'

const Constants = {
  ButtonBlocks,
  BrandOptions,
  TextTypes,
}

export {
  Screen,
  Container,
  Button,
  Text,
  Icon,
  LogItem,
  ListItem,
  AccordionItem,
  MenuItem,
  Section,
  FabButton,
  Avatar,
  Modal,
  Toast,
  Toaster,
  Credential,
  Card,
  ClaimDebug,
  ClaimExplore,
  Banner,
  RequestItem,
  Constants,
  Device,
  useLayout,
  Typings,
}

/**
 * Theming provider by @callstack/react-theme-provider
 */
export { ThemeProvider, withTheme, useTheme, createTheme, mergeTheme } from './theming/index'
