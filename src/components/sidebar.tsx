import { Feather } from '@expo/vector-icons'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import {
  Avatar,
  HStack,
  Heading,
  IconButton,
  VStack,
  useColorModeValue
} from 'native-base'
import React, { useCallback } from 'react'
import AnimatedColorBox from './animated-color-box'
import MenuButton from './menu-button'

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props
  const currentRoute = state.routeNames[state.index]

  // Close sidebar
  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  // Go to the Main page
  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])

  // Go to the About page
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About')
  }, [navigation])

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('black', 'purple.900')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('white', 'white')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('white', 'white')
            }}
          />
        </HStack>
        <Avatar
          source={require('../assets/profile-image.png')}
          size="xl"
          borderRadius={100}
          mb={6}
          borderColor="secondary.500"
          borderWidth={3}
          background={'blueGray.900'}
        />
        <Heading mb={4} size="xl">
          ToDo App
        </Heading>
        <MenuButton
          active={currentRoute === 'Main'}
          onPress={handlePressMenuMain}
          icon="inbox"
        >
          Tasks
        </MenuButton>
        <MenuButton
          active={currentRoute === 'About'}
          onPress={handlePressMenuAbout}
          icon="info"
        >
          About
        </MenuButton>
      </VStack>
      {/* <Center>
        <ThemeToggle />
      </Center> */}
    </AnimatedColorBox>
  )
}

export default Sidebar
