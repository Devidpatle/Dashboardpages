import logo from '../../assets/img/svg/logo.svg';
import dashboard_Icon from '../../assets/img/svg/dashboard_Icon.svg';
import team_Icon from '../../assets/img/svg/team_Icon.svg';
import addTeam_Icon from '../../assets/img/svg/addTeam_Icon.svg';
import leads_Icon from '../../assets/img/svg/leads_Icon.svg';
import line_separate from '../../assets/img/svg/line_separate.svg';
import help_Icon from '../../assets/img/svg/help_Icon.svg';
import setting_Icon from '../../assets/img/svg/setting_Icon.svg';
import report_Icon from "../../assets/img/svg/report_icon.svg"
import curve_Icon from '../../assets/img/svg/curve.svg';



import { Button, Image, Box, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"

function SideNavbar() {
  return (

    <Box bg='#fff' w="12vw" height="100%" color='black' display="flex" flexDirection="column" justifyContent="space-between">
      <Box width="100%" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <Image src={logo} alt="" width="4vw" height="10vh" />

        <Link to="/"  style={{width:"100%"}}>
          <Box display="flex" alignItems="center" width="100%" height="7vh" bg="#EDEDF5" marginTop={5} >

            <Box width="100%" height="32px" display="flex" alignItems="center" justifyContent="space-between" borderRadius={5} >
              <Box display='flex' gap={4} paddingLeft={3} alignItems='center'>
                <Box width="30px" height="30px" display="flex" alignItems="center" justifyContent="center" borderRadius={5} bg="#1A237E">

                  <Image w={32} src={dashboard_Icon} alt="" width="" />
                </Box>
                <Text fontFamily="Open Sans" fontWeight="600" fontSize="16px" fontStyle="normal" color="#002A53" cursor="pointer">Dashboard</Text>
              </Box>


              <Image src={curve_Icon} />
            </Box>
          </Box></Link>

        <Link to="/teams" style={{width:"100%"}} >

          <Box display="flex" alignItems="center" width="100%" height="7vh" gap={4} paddingLeft={3}>
            <Box width="30px" height="30px" display="flex" alignItems="center" justifyContent="center" borderRadius={5} bg="#E4E4E4">
              <Image src={team_Icon} alt="" />
            </Box>
            <Text fontFamily="Open Sans" fontWeight="600" fontSize="16px" fontStyle="normal" color="#002A53" cursor="pointer">Team</Text>
          </Box>
        </Link>
        <Box display="flex" alignItems="center" width="100%" height="7vh" gap={4} paddingLeft={3}>
          <Box width="30px" height="30px" display="flex" alignItems="center" justifyContent="center" borderRadius={5} bg="#E4E4E4"><Image src={addTeam_Icon} alt="" /></Box>
          <Text fontFamily="Open Sans" fontWeight="600" fontSize="16px" fontStyle="normal" color="#002A53" cursor="pointer">Add Team</Text>
        </Box>

        <Box display="flex" alignItems="center" width="100%" height="7vh" gap={4} paddingLeft={3}>
          <Box width="30px" height="30px" display="flex" alignItems="center" justifyContent="center" borderRadius={5} bg="#E4E4E4">
            <Image src={leads_Icon} alt="" />
          </Box>

          <Text fontFamily="Open Sans" fontWeight="600" fontSize="16px" fontStyle="normal" color="#002A53" cursor="pointer">Leads</Text>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="7vh" >
          <Box width="80%" >
            <Image src={line_separate} alt="" />
          </Box>
        </Box>

        <Box display="flex" alignItems="center" width="100%" height="7vh" gap={4} paddingLeft={3}>
          <Box width="30px" height="30px" display="flex" alignItems="center" justifyContent="center" borderRadius={5} bg="#E4E4E4"><Image src={help_Icon} alt="" /></Box>

          <Text fontFamily="Open Sans" fontWeight="600" fontSize="16px" fontStyle="normal" color="#002A53" cursor="pointer">Help</Text>
        </Box>

        <Box display="flex" alignItems="center" width="100%" height="7vh" gap={4} paddingLeft={3}>
          <Box width="30px" height="30px" display="flex" alignItems="center" justifyContent="center" borderRadius={5} bg="#E4E4E4">
            <Image src={setting_Icon} alt="" />
          </Box>

          <Text fontFamily="Open Sans" fontWeight="600" fontSize="16px" fontStyle="normal" color="#002A53" cursor="pointer">Setting</Text>

        </Box>
      </Box>

      <Box width="100%" height="20vh" display="flex" alignItems="center" justifyContent="center">
        <Box width="80%" height="14vh" bg="#EDEDF5" borderRadius={6} display="flex" alignItems="center" flexDirection="column">
          <Box pt="5px">
            <Text color="#002A53;" fontFamily="Open Sans" fontWeight="600" fontSize="16px" fontStyle="normal">Found a bug?</Text> </Box>
          <Box width="100%" height="5vh" display="flex" justifyContent="center" alignItems="center">
            <Text color="#83949A" fontFamily="Open Sans" fontWeight="400" fontSize="12px" fontStyle="normal">Report now to us if you find any bugs</Text></Box>
          <Button cursor="pointer" _hover="#002a53e6" bg="#1A237E" display="flex" alignItems="center" justifyContent="center" borderRadius="10px" width="7vw" height={8} gap={1}>
            <Image src={report_Icon} />
            <Text color="#fff">Report</Text>
          </Button>
        </Box>

      </Box>

    </Box>

  )
}

export default SideNavbar