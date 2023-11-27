import { Box, Flex, Heading, Text } from '@chakra-ui/react'


function hero() {
  return (

    <Flex direction='row' paddingX={10} paddingY={10} gap={10} flexWrap='wrap' alignItems='center' justifyContent='center'>
      <Box bg='#fff' boxShadow="4px 4px 10px 0px rgba(0, 0, 0, 0.05)" height='120px' rounded={10} w={350}>
        <Flex flexDirection="column" justifyContent="center" alignItems="flex-start" padding={5}>
          <Text fontSize='28px'>Total Files</Text>
          <Heading size='lg'>100</Heading>
        </Flex>
      </Box>
      <Box bg='#fff' boxShadow="4px 4px 10px 0px rgba(0, 0, 0, 0.05)" height='120px' rounded={10} w={350}>
        <Flex flexDirection="column" justifyContent="center" alignItems="flex-start" padding={5}>
          <Text fontSize='28px'>Total Approved</Text>
          <Heading size='lg'>60</Heading></Flex>
      </Box>
      <Box bg='#fff' boxShadow="4px 4px 10px 0px rgba(0, 0, 0, 0.05)" height='120px' rounded={10} w={350}>
        <Flex flexDirection="column" justifyContent="center" alignItems="flex-start" padding={5}>
          <Text fontSize='28px'>Total rejected</Text>
          <Heading size='lg'>20</Heading></Flex>
      </Box>


      <Box bg='#fff' boxShadow="4px 4px 10px 0px rgba(0, 0, 0, 0.05)" height='120px' rounded={10} w={350}>
        <Flex flexDirection="column" justifyContent="center" alignItems="flex-start" padding={5}>
          <Text fontSize='28px'>In Progress</Text>
          <Heading size='lg'>20</Heading></Flex>
      </Box>
      <Box bg='#fff' boxShadow="4px 4px 10px 0px rgba(0, 0, 0, 0.05)" height='120px' rounded={10} w={350}>
        <Flex flexDirection="column" justifyContent="center" alignItems="flex-start" padding={5}>
          <Text fontSize='28px'>Disbursed Amount</Text>
          <Heading size='lg'>100,00,00,000</Heading></Flex>
      </Box>

    </Flex>
  )
}

export default hero