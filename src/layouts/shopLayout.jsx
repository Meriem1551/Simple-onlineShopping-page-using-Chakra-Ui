import { Outlet } from "react-router-dom"
import { Heading } from "@chakra-ui/react"
import Footer from "./footer";
export default function ShopLayout(props) {
    const headingStyle={
      salutation:{
        display:"grid",
        justifyContent:"center",
        fontFamily:"titles",
        color:'purple.900',
        mt:'30px'
      },
    }
  return (
    <>
      <Heading as='h1' size='4xl' sx={headingStyle.salutation}>{props.title}</Heading>
      <Outlet />
      <Footer/>
    </>
  )
}
