import {  Flex, Text, Image} from "@chakra-ui/react";
import source1 from '../assets/images/icons8-pinterest-48.svg'
import source2 from '../assets/images/logo-alibaba.png'
export default function Footer() {
    const textStyle={
        fontSize:'xl',
        fontFamily:"texts" ,
        color:"yellow.400",
        textAlign:'center',
        mt:'60px'
    }
    const flexStyle={
        gap:'25px',
        mt:'10px',
        alignItems:'center',
        justifyContent:'center' ,
        mb:'20px'
    }
  return (
    <>
        <Text sx={textStyle}>All the images are imported from: </Text>
        <Flex sx={flexStyle}>
          <Image src={source1} color='red.400'/>
          <Image src={source2} boxSize={10} borderRadius='100%'/>
        </Flex>
    </>
  )
}
