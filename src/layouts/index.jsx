import Navbar from '../components/navabar/Navbar';
import SideNavbar from '../components/sideNavbar/SideNavbar';

import { Box, Flex } from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Teams from "../pages/teams/teams";

export default function Layout() {
  return (
    <Router>

      <Flex>
        <Box> <SideNavbar /></Box>
        <Flex width="100vw" direction='column' height="100vh" bg='#f9f9f9'>
          <Box> <Navbar /></Box>
          {/* Navigation Links */}


          <Routes>
            <Route
              exact
              path="/"
              element={<Dashboard />}
            ></Route>
            <Route
              exact
              path="/teams"
              element={<Teams />}
            ></Route>
          </Routes>
        </Flex>
      </Flex>
    </Router>
  );
}
