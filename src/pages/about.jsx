import { Container, Heading, Text } from "@chakra-ui/react";
export default function About(props) {
    const containerStyle={
        maxW:'90%',
        p:'30px',
        ml:'0px',
        color:'purple.800'
    }
    const headingStyle={
        fontFamily:"titles" ,
        mt:'30px'
    }
    const textStyle={
        fontSize:'lg',
        w:'800px',
        mt:'25px',
        ml:'20px',
        fontFamily:"texts"
    }
    return (
        <Container sx={containerStyle} >
            <Heading as='h2' size='2xl' sx={headingStyle}>{props.title}</Heading>
            <Text sx={textStyle}>{props.text}</Text>
            <Text sx={textStyle}>{props.text}</Text>
            <Text sx={textStyle}>{props.text}</Text>
        </Container>
    )
}
