import { FormControl,FormLabel,Input,FormHelperText, InputGroup,InputRightElement, Box, Textarea,useToast } from "@chakra-ui/react"
import { EmailIcon, LinkIcon } from "@chakra-ui/icons"
import { NavLink } from "react-router-dom"
export default function Contact() {
    const formStyle={
       formControl:{
        mt:'70px',
        ml:'30px',
        fontFamily:"texts",
        fontSize:'xl',
        w:'330px'
       },
       emailformLabel:{
        color:'purple.700'
       },
       emailformHelper:{
        color:'gray.500'
       },
       messageFormLabel:{
        mt:'60px',
        color:'purple.700'
       }
    }
    const inputStyle={
        emailInput:{
            border:'2px solid',
            color:'purple.700'
        },
        messageInput:{
            border:'2px solid',
            color:'purple.600'
        }
    }
    const buttonStyle={
        bg:'purple.700' ,
        pl:'50px' ,
        w:'50%' ,
        h:'45px' ,
        mt:'25px',
        ml:'90px',
        mb:'25px',
        pt:'7px',
        borderRadius:'8px',
        color:'white'
    }
    const toast = useToast()
  return (
    <FormControl sx={formStyle.formControl}>
        <FormLabel sx={formStyle.emailformLabel}>Email:</FormLabel>
        <InputGroup size='md' >
           <Input type='email' name="email"  sx={inputStyle.emailInput}/>
           <InputRightElement>
               <LinkIcon as={EmailIcon} color='purple.700'/>
           </InputRightElement>
        </InputGroup>
        <FormHelperText sx={formStyle.emailformHelper}>
            Enter a valid  email
        </FormHelperText>
        <FormLabel sx={formStyle.messageFormLabel}>Message:</FormLabel>
        <Textarea placeholder="Enter your message" name="message"  sx={inputStyle.messageInput}></Textarea>
        <Box  sx={buttonStyle}><NavLink to='/' onClick={()=>
           toast({
                title:'Message sent.',
                description: "Your messsage was successfuly sent",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position:'top'
           })
        }>Submit</NavLink></Box>
    </FormControl>
    
  )
}

  
