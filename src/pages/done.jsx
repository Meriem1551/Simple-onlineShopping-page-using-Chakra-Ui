import { CheckCircleIcon } from "@chakra-ui/icons";
import { Grid, GridItem, Heading, List, ListIcon} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Done() {
  return (
    <Grid ml='550px' mt='150px'>
      <GridItem> <List><ListIcon as={CheckCircleIcon} boxSize='20%' color='green.400'/></List></GridItem>
      <GridItem><Heading ml='-3px' fontFamily="titles">Well Done</Heading></GridItem>
      <GridItem ml='45px'color='purple.700' fontFamily="texts"><NavLink to="/shopNow">Go back</NavLink></GridItem>
    </Grid>
  )
}
