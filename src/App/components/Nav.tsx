import React from 'react'
import { Box, Divider, HStack, Link, Spacer } from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export default function Nav() {
  return (
    <Box position={["fixed", "fixed", "sticky"]} top={["initial", "initial", "0"]} bottom={["0", "0", "initial"]} backgroundColor="Background" width="100%">
      <Divider />
      <HStack spacing="6" marginX="6" marginBottom="3" paddingTop="3">
        <Link as={RouterLink} to="/" _activeLink={{ fontWeight: "bold" }}>Home</Link>
        <Link as={RouterLink} to="/about" _activeLink={{ fontWeight: "bold" }}>About</Link>
        <ColorModeSwitcher justifySelf="flex-end" />
      </HStack>
      <Spacer dir='vertical' />
      <Divider />
    </Box >
  )
}
