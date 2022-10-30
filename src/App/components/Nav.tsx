import React from 'react'
import { Box, Divider, HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import { NavLink as RouterLink, useNavigate } from 'react-router-dom'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { HamburgerIcon, SettingsIcon, InfoIcon } from '@chakra-ui/icons'

function ExtraMenu() {
  const navigate = useNavigate();

  const handleAboutUsCLick = () => {
    navigate('/about');
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
      />
      <MenuList>
        <ColorModeSwitcher justifySelf="flex-end" />
        <MenuItem icon={<SettingsIcon />}>
          Parametres
        </MenuItem>
        <MenuItem onClick={handleAboutUsCLick} icon={<InfoIcon />}>
          A propos de nous
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default function Nav() {
  return (
    <Box position={["fixed", "fixed", "sticky"]} top={["initial", "initial", "0"]} bottom={["0", "0", "initial"]} backgroundColor="Background" width="100%">
      <Divider />
      <HStack spacing="6" marginX="6" marginBottom="3" paddingTop="3">
        <Link as={RouterLink} to="/" _activeLink={{ fontWeight: "bold" }}>CocoWork</Link>
        <Link as={RouterLink} to="/post" _activeLink={{ fontWeight: "bold" }}>Publier</Link>
        <Link as={RouterLink} to="/profil" _activeLink={{ fontWeight: "bold" }}>Profil</Link>
        <Spacer />
        <ExtraMenu />
      </HStack>
      <Spacer dir='vertical' />
      <Divider />
    </Box >
  )
}
