import { Feather } from '@expo/vector-icons'
import {
  Box,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  useColorModeValue
} from 'native-base'
import React from 'react'
import AnimatedColorBox from '../components/animated-color-box'
import LinkButton from '../components/link-button'
import Masthead from '../components/masthead'
import Navbar from '../components/navbar'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.jpg')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/mucahit.jpg')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full">
            In this project, I utilized{' '}
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              React Native
            </Text>
            , <Text style={{ fontWeight: 'bold', color: 'white' }}>Expo</Text>,{' '}
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              Native Base
            </Text>
            ,{' '}
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              Styled Components
            </Text>
            ,{' '}
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              React Reanimated
            </Text>
            , and many other extensions. I aimed to create a visually appealing
            design with careful attention to animations and appearance. I hope
            you enjoy exploring my project!
          </Text>
          <LinkButton
            colorScheme="black"
            bgColor={'black'}
            size="lg"
            borderRadius="full"
            href="https://github.com/mucahittasan"
            leftIcon={
              <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
          >
            Go to Github Profile
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
