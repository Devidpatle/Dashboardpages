import { Box } from '@chakra-ui/react'
import TopTeam from '../../components/topTeam/TopTeam'
import Hero from '../../components/hero/hero'

export default function Dashboard() {
    return (
        <div className="">
            <Box > <Hero /></Box>
            <Box > <TopTeam /></Box>
        </div>
    )
}
