import { Box,Card,CardBody,CardFooter,CardHeader,SimpleGrid,Image, Heading } from "@chakra-ui/react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
export default function ShopPage(props) {
  const products=useLoaderData()
  const cardStyle={
    card:{
      ':hover':{
        boxShadow:'dark-lg',
      },
      bg:'purple.50',
      borderRadius:'10px'
    },
    cardHeaderStyle:{
      fontFamily:"logo",
      fontSize:'4xl',
      ml:'20px',
      color:'purple.900'
    },
    cardBodyStyle:{
      boxSize:'100%',
      borderRadius:'10px'
    },
    cardFooterStyle:{
      bg:'yellow.400',
      p:'10px',
      fontFamily:"texts",
      color:'white',
      borderRadius:'10px' ,
      fontSize:'lg',
      ml:'120px',
      ':hover':{
        bg:'yellow.200'
      }
    }
  }
  const gridStyle={
    ml:'20px',
    mr:'20px',
    mt:'70px',
    mb:'20px'
  }
  const headingStyle={
    thanks:{
      mt:"50px",
      ml:'390px',
      fontFamily:"titles",
      color:'yellow.400'
    }
  }
  return (
    <>
      <SimpleGrid spacing={6} columns={3} sx={gridStyle}  minChildWidth='300px'>
        {products && products.map(product => (
        <Card key={product.id} sx={cardStyle.card}>
          <CardHeader sx={cardStyle.cardHeaderStyle} as='b'>{product.title}</CardHeader>
          <CardBody><Image  src={product.img} sx={cardStyle.cardBodyStyle}/></CardBody>
          <CardFooter>
            <Box sx={cardStyle.cardFooterStyle}>
              <NavLink to={product.id.toString()} key={product.id}>
                Take a look
              </NavLink>
            </Box>
          </CardFooter>
        </Card>
       ))}
      </SimpleGrid>
      <Heading  as='h3' size='2xl' sx={headingStyle.thanks}>{props.thanks}</Heading>
      
    </>
  )
}
export const productsLoader=async()=>{
  const res=await fetch('http://localhost:3000/products')

  return res.json()
}
