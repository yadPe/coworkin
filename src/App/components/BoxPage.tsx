import { Box } from '@chakra-ui/react'
import React from 'react'

export default function BoxPage({ children, ...boxProps }: React.PropsWithChildren<React.ComponentProps<typeof Box>>) {
  return (
    <Box marginTop="4" marginX="2" marginBottom="4" {...boxProps} >{children}</Box>
  )
}
