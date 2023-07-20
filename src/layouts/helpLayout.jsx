import { Container, Flex, Heading, Box } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout(props) {
    const containerStyle={
      ml:'30px',
      mt:'60px',
    }
    const headingStyle={
      fontFamily:"titles" ,
      color:'purple.800'
    }
    const buttonStyle={
      p:'10px',
      border:'3px solid ',
      color:'purple.700',
      ':hover':{
          color:'yellow.300'
      },
      fontFamily:"texts",
      fontSize:'xl',
      borderRadius:'8px',
      mt:'35px',
      ml:'150px',
      mr:'-150px'
    }
  return (
    <>
        <Container sx={containerStyle}>
          <Heading as='h2' size='2xl' sx={headingStyle}>{props.title}</Heading>
          <Flex gap='30px'>
              <Box sx={buttonStyle}><NavLink to='faq'>View the Faq</NavLink></Box>
              <Box sx={buttonStyle}><NavLink to='contact'>Contact Us</NavLink></Box>
          </Flex>
          <Outlet/>
        </Container>
    </>
  )
}
