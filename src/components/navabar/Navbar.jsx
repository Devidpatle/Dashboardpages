import profile from "../../assets/img/svg/profile_Img.svg"
import downArrow from "../../assets/img/svg/navi_Icon.svg"
import notificationIcon from "../../assets/img/svg/notification.svg"

import { Box, Heading, Image } from '@chakra-ui/react'

function Navbar() {
  return (
    <Box bg='#002A53;' w='100%' p={3} color='white' display="flex" alignItems="center" justifyContent="space-between">
      <Heading fontSize="2xl" cursor='pointer' >DASHBOARD</Heading>
      <Box display="flex" alignItems="center" gap={2}>
        <Image w={10} h={10} src={profile} alt='Profile_Img' cursor='pointer' />
        <Heading size="sm">Priya Sharma</Heading>
        <Image src={downArrow} alt='Icon' cursor='pointer' />
        <Box w={9} h={9} bg="#fff" borderRadius="100%" display="flex" alignItems="center" justifyContent="center" cursor='pointer'>
          <Image src={notificationIcon} />
        </Box>
      </Box>
    </Box>

  )
}

export default Navbar