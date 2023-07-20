import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text, List, ListIcon, ListItem} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
export default function Faq() {
    const questions=useLoaderData()
    const listItemStyle={
      p:'20px',
      display:'flex',
      boxShadow:'dark-lg',
      mt:'50px',
      w:'600px',
      bg:'purple.800',
      color:'white',
      borderRadius:'8px',
      ml:'100px'
    }      
    const iconStyle={
      color:'yellow.300' ,
    }
    const textStyle={
      fontFamily:"texts",
      fontSize:'lg'
    }
  return (
    <List mt='70px' mb='30px'>
      { questions && questions.map(question => (
        <ListItem key={question.id} sx={listItemStyle}>
           <ListIcon as={ChevronRightIcon}  boxSize={8} sx={iconStyle}/>
           <Text sx={textStyle}>{question.text}</Text>
        </ListItem>
       ))}
    </List>
  )
}
export const questionsLoader=async()=>{
    const res=await fetch('http://localhost:3000/questions')
  
    return res.json()
  }