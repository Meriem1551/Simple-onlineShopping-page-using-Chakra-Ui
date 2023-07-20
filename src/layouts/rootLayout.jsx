import { Search2Icon,MoonIcon } from "@chakra-ui/icons";
import { Container, Heading, List, ListIcon, ListItem, useColorMode , IconButton, Box, Divider} from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
function Header(props) {

    const containerStyle={
        display:"flex" ,
        justifyContent:'end' ,
        maxW:'4x1' ,
        alignItems:'center',
        color:'yellow.300',
        h:'70px',
        
    }
    const headingStyle={
        as:'h1',
        mr:'auto',
       fontFamily:"logo",
       mt:'20px'
    }
    const listStyle={
        display:"flex" ,
        gap:{
          base: '10px',
          md:'80px',
          xl:'100px'
        },
        mr:'50px',
        fontFamily:"menu",
        mt:'30px',
    }
    const LinkBoxStyle={
        ':active':{
        bg:'yellow.300',
        color:'white',
        p:'6px',
        pt:'10px',
        borderRadius:'5px',
        mt:'-10px',
        }
    }
    const { colorMode, toggleColorMode } = useColorMode()
    return ( 
        <><Container sx={containerStyle}>
            <Heading sx={headingStyle}>{props.logo}</Heading>
            <List >
                <ListItem sx={listStyle}>
                    <Box  sx={LinkBoxStyle}><NavLink to="/">{props.homeLink}</NavLink></Box>
                    <Box  sx={LinkBoxStyle}><NavLink to="/about">{props.aboutLink}</NavLink></Box>
                    <Box  sx={LinkBoxStyle}><NavLink to="/help">{props.helpLink}</NavLink></Box>
                    <ListIcon as={Search2Icon} mt='7px'/>
                    <IconButton  mt='-8px' icon={<MoonIcon/>} onClick={toggleColorMode}>
                         {colorMode === 'light' ? 'Dark' : 'Light'}
                    </IconButton>
                </ListItem>
            </List>
         </Container>
         <Outlet />
        </>
     );
}

export default Header;
