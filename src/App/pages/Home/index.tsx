import React from 'react'
import {
  Box,
  Text,
  VStack,
  Grid,
  Link
} from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom";
import { ColorModeSwitcher } from '../../components/ColorModeSwitcher';

export function Home() {
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>

            <Text>
              Welcome to home
            </Text>

            <Link as={RouterLink} to="/about">About</Link>

          </VStack>
        </Grid>
      </Box>
    </>
  );
}