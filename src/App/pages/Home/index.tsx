import React from 'react'
import {
  Text,
  VStack,
  Grid,
  Link
} from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom";
import BoxPage from '../../components/BoxPage';

export function Home() {
  return (
    <>
      <BoxPage fontSize="xl" textAlign="center">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>

            <Text>
              Bonjour Schni
            </Text>

            <Link as={RouterLink} to="/about">About</Link>

          </VStack>
        </Grid>
      </BoxPage>
    </>
  );
}