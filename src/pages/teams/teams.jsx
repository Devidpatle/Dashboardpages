import { Box, Heading, Image, Text } from "@chakra-ui/react";
import search_Icon from "../../assets/img/svg/search.svg";
import teamData from "../../data/Data.json";

const CustomButton = ({ label }) => (
  <Box
    as='button'
    borderRadius='md'
    bg='#002A53'
    display="flex"
    alignItems="center"
    justifyContent="center"
    color='white'
    px={4}
    h={8}
  >
    <Text fontFamily="Poppins" fontWeight="400" fontSize="15px" color="#fff">
      {label}
    </Text>
  </Box>
);

function Teams() {
  return (
    <Box width="100%" height="100%">
      <Box width="100%" height="5vh" padding="40px 40px 20px 40px" display="flex" justifyContent="space-between" alignItems="center">
        <Heading color="#002A53" fontFamily="Poppins" fontSize="32px" fontWeight="600" fontStyle="normal">
          Team Leaders
        </Heading>
        <Box width="40%" height={8} gap={2} display="flex" boxShadow='sm' rounded='md' bg='white' alignItems="center">
          <Image src={search_Icon} p={3} />
          <Text color="#878787" fontFamily="Open Sans" fontStyle="normal" fontWeight="400">
            Search
          </Text>
        </Box>
      </Box>

      <Box width="100%" display="flex" justifyContent="space-evenly">
        {["Name", "Email", "Mobile"].map((category) => (
          <Box key={category} width="auto" height="auto">
            <Box>
              <Text color="#002A53" fontFamily="Poppins" fontSize="20px" fontWeight="600" lineHeight="normal" mt={6} mb={6}>
                {category}
              </Text>
            </Box>
            <Box display="flex" flexDirection="column" gap={8} alignItems="flex-start">
              {teamData.map((user) => (
                <Text key={user.id} color="#4A4A4A" fontFamily="Poppins" fontSize="16px" fontWeight="400">
                  {user[category.toLowerCase()]}
                </Text>
              ))}
            </Box>
          </Box>
        ))}

        <Box width="auto" height="auto">
          <Box>
            <Text color="#002A53" fontFamily="Poppins" fontSize="20px" fontWeight="600" lineHeight="normal" mt={6} mb={6}>
              Connect to call
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" gap={8} alignItems="flex-start">
            {teamData.map((user) => (
              <Image key={`call_${user.id}`} src={user.call_Icon} alt={`Call Icon for ${user.name}`} mr={2} />
            ))}
          </Box>
        </Box>

        <Box width="auto" height="auto">
          <Box>
            <Text color="#002A53" fontFamily="Poppins" fontSize="20px" fontWeight="600" lineHeight="normal" mt={6} mb={6}>
              Details
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" gap={6} alignItems="flex-start">
            {Array.from({ length: 9 }, (_, index) => (
              <CustomButton key={index} label="View Details" />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Teams;
