import { Container,Heading,Image, Text, Box } from "@chakra-ui/react"
import source1 from '../assets/images/pexels-juan-mendez-1536619-removebg-preview.png'
import source2 from '../assets/images/beaming-face-with-smiling-eyes.svg'
import source3 from '../assets/images/fancy-bracelet-rose-gold-ladies-watches-girls-wrist-watch-for-original-imag54cntykjqsbg.webp'
import source4 from '../assets/images/il_fullxfull.3944116784_2no6.webp'
import source5 from '../assets/images/763057a7-c9e7-4ac7-914e-267d9cbfb75f.jpg'
import source6 from '../assets/images/animesher.com_cloud-sun-sunny-1493751.gif'
import source7 from '../assets/images/sacs-a-main-pour-femme-avec-foulard-en-soie-pas-ch.webp'
import source8 from '../assets/images/H20e45fcde6164f32a2bc125df22fa0adE.jpg_640x640q90.jpg'
import source9 from '../assets/images/063.jpg'
import source10 from '../assets/images/DRESSUUP-Brand-Metal-Thin-Legs-Vintage-Sunglasses-Women-Round-Sun-Glasses-Woman-Oculos-De-Sol-Femininos.jpg'

import { NavLink } from "react-router-dom"
export default function Main(props){
    const containerStyle={ 
        globalContainer:{
            maxW:'6x1',
            w:'100%' ,
            display:'flex',
        },
        imageContainerStyle:{
            bg:'yellow.300' ,
            borderRadius:'100%',
            mt:'10px',
            mb:'-10px',
            ml:'320px',
            mr:'-320px',
            zIndex:'1'
        },
        cardContainerStyle:{
            ml:'20px',
        }
    }
    const imageStyle={
        firstImage:{
            boxSize:'430px',
            ml:'-80px',
            borderRadius:'100%',
            mt:'50px',
            zIndex:'1'
        },
        emojiStyle:{
            boxSize:'50px'
        },
        watchImageStyle:{
            boxSize:'130px',
            borderRadius:'100%',
            border:'5px solid',
            borderColor:'yellow.300',
            ml:'420px',
            mt:'-20px',
            zIndex:'2'
        },
        TshirtImageStyle:{
            boxSize:'130px' ,
            borderRadius:'100%',
            border:'5px solid',
            borderColor:'yellow.300',
            ml:'400px' ,
            mr:'-390px' ,
            zIndex:'2',
            mt:'-20px'
        },
        shoesImageStyle:{
            boxSize:'130px',
            borderRadius:'100%',
            border:'5px solid',
            borderColor:'yellow.300' ,
            zIndex:'2',
            mt:'300px',
            mb:'-330px',
            ml:'-110px'
        },
        bagImageStyle:{
            boxSize:'95px',
            borderRadius:'100%',
            border:'4px solid',
            borderColor:'yellow.300' ,
            mt:'30px',
            ml:'-310px'
        },
        dressImageStyle:{
            boxSize:'85px',
            borderRadius:'100%',
            border:'3px solid',
            borderColor:'yellow.300' ,
            zIndex:'2',
            mt:'290px',
            mb:'-330px',
            ml:'-50px'
        },
        hatImageStyle:{
            boxSize:'65px',
            borderRadius:'100%',
            border:'2px solid',
            borderColor:'yellow.300' ,
            zIndex:'2',
            mt:'130px',
            mb:'-330px',
            ml:'-250px'
        },
        sunglassesImageStyle:{
            boxSize:'50px',
            borderRadius:'100%',
            border:'1px solid',
            borderColor:'yellow.300' ,
            mt:'200px',
            mb:'-330px',
            ml:'50px'
        },
    }
    const ButtonStyle={
        bg:'purple.900',
        color:'white',
        w:'150px',
        h:'40px',
        fontFamily:"texts",
        fontSize:'xl',
        pl:'30px',
        pt:'3px',
        borderRadius:'20px',
        ml:'90',
        mt:'20px',
        ':hover':{
             bg:'purple.400'
        }
    }
 return(
    <Container sx={containerStyle.globalContainer}>
        <Container sx={containerStyle.cardContainerStyle}>
            <Heading as='h1' size='4xl' w='370px' mt='70px' ml='35px'display='flex' fontFamily="titles" color='purple.400'>
              {props.title}
              <Image src={source3} sx={imageStyle. watchImageStyle} />
              <Image src={source5} sx={imageStyle.shoesImageStyle}/>
              <Image src={source7} sx={imageStyle.bagImageStyle}/>
              <Image src={source8} sx={imageStyle.dressImageStyle}/>
              <Image src={source9} sx={imageStyle.hatImageStyle}/>
              <Image src={source10} sx={imageStyle.sunglassesImageStyle}/>
            </Heading>
            <Heading as='h4' size='lg'  mt='20px' display='flex' fontFamily="titles" color='purple.600'>
               {props.subTitle}
               <Image src={source4} sx={imageStyle.TshirtImageStyle}/>
            </Heading>
            <Heading as='h4' size='xl'  ml='30px' display='flex' fontFamily="titles" >
               {props.exclamation}
               <Image sx={ imageStyle.emojiStyle} src={source2}/>
            </Heading>
            <Text fontSize='xl' mt='10px' fontFamily="texts" >
                {props.text}
            </Text>
            <Box sx={ButtonStyle}>
                <NavLink to="/shopNow">Shop now </NavLink>
            </Box>
        </Container>
        <Container sx={containerStyle.imageContainerStyle} ><Image src= {source6}borderRadius='100%' mt='17px' boxSize='455px'/></Container>
        <Image src={source1} sx={imageStyle. firstImage} />
    </Container>
 )
}