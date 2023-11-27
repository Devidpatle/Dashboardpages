import { VStack, Text, Box, Heading, Image } from '@chakra-ui/react'
import profile from "../../assets/img/svg/profile_Img.svg"


function TopTeam() {
  return (
    <VStack
      spacing={2}
      align='stretch'
      marginLeft={10}
      marginRight={10}
      gap={3}
    >
      <Text fontSize="28px">Top Team Leader (Level 5)</Text>

      <Box h='48px' borderRadius={10} border="1px solid #A3A3A3;" bg='#fff' display="flex" justifyContent="space-between" alignItems="center" paddingLeft={5} paddingRight={5} >
        <Image src={profile} alt='user_Image' width="40px" height="40px" />
        <Text>Priya Sharma</Text>
        <Text>priyasharma@gmail.com</Text>
        <Text>7</Text>
        <Heading size="sm">20,00,000</Heading>
      </Box>

      <Box h='48px' borderRadius={10} border="1px solid #A3A3A3;" bg='#fff' display="flex" justifyContent="space-between" alignItems="center" paddingLeft={5} paddingRight={5} >
        <Image src={profile} alt='user_Image' width="40px" height="40px" />
        <Text>Priya Sharma</Text>
        <Text>priyasharma@gmail.com</Text>
        <Text>5</Text>
        <Heading size="sm">50,00,000</Heading>
      </Box>

      <Box h='48px' borderRadius={10} border="1px solid #A3A3A3;" bg='#fff' display="flex" justifyContent="space-between" alignItems="center" paddingLeft={5} paddingRight={5} >
        <Image src={profile} alt='user_Image' width="40px" height="40px" />
        <Text>Priya Sharma</Text>
        <Text>priyasharma@gmail.com</Text>
        <Text>6</Text>
        <Heading size="sm">45,00,000</Heading>
      </Box>

      <Box h='48px' borderRadius={10} border="1px solid #A3A3A3;" bg='#fff' display="flex" justifyContent="space-between" alignItems="center" paddingLeft={5} paddingRight={5} >
        <Image src={profile} alt='user_Image' width="40px" height="40px" />
        <Text>Priya Sharma</Text>
        <Text>priyasharma@gmail.com</Text>
        <Text>4</Text>
        <Heading size="sm">15,00,000</Heading>
      </Box>
    </VStack>

  )
}

export default TopTeam