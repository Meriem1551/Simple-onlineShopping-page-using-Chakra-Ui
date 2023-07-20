import {   NavLink, useLoaderData } from "react-router-dom"
import { Box, Card, CardBody, CardFooter, Container, Image, SimpleGrid, Text } from "@chakra-ui/react"

export default function BuyPage() {
    const product = useLoaderData()
    const  gridStyle={
      ml:'20px',
      mr:'20px',
      mt:'70px',
      mb:'20px'
    };
    const cardStyle={
      ':hover':{
        boxShadow:'dark-lg',
      },
      bg:'purple.50',
      borderRadius:'10px'
    }
    const buttonStyle={
      ':hover':{
        bg:'yellow.200'
      },
      bg:'yellow.400' ,
      width:'85px' ,
      height:'35px',
       color:'white',
        textAlign:'center' ,
        alignItems:'center',
         pt:'3px',
          borderRadius:'5px'
    }
  return (
    <SimpleGrid columns={3} minChildWidth='300px' spacing={6} sx={gridStyle}>
     {product.details.map((detail)=>(
          <Card key={detail.id} sx={cardStyle}>
            <CardBody>
              <Image src={detail.image} boxSize='100%' borderRadius={10}/>
            </CardBody>
            <CardFooter display='flex' justifyContent='end' fontFamily="texts" color='purple.900' alignItems='center'>
              <Container display='flex' gap={2}>
                <Text>{detail.price}</Text>
                <Text as='del'color='red.400'>{detail.previousPrice}</Text>
              </Container>
              <Container display='flex' gap={4}>
                <Box sx={buttonStyle}><NavLink to='/done'>Buy It</NavLink></Box>
                <Box sx={buttonStyle}><NavLink to='/shopNow'>Cancel</NavLink></Box>
              </Container>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>

  )
}
export const detailsLoader=async({params})=>{
    const {id}=params
    const res=await fetch('http://localhost:3000/products/' + id)
    return res.json()
}