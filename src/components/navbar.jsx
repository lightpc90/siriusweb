import React, {useState} from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";


const navproperty = [
  {name: 'Home', ref: '/'},
  {name: 'Services', ref: '/services'},
  {name: 'About', ref: '/about'},
  {name: 'Contact', ref: '/contact'},
]

const Nav = () => {
    const [nav, setActiveNav] = useState('')
    
    const navActiveHandler = (prop) =>{
        setActiveNav(prop)
    }   

    return (
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Sirius862
          </Text>
        </Navbar.Brand>

        <Navbar.Content hideIn="xs">
         {navproperty.map((currentnav) => {
            return(
             <Navbar.Link 
                isActive={nav === currentnav.ref} 
                href= {currentnav.ref} 
                onClick={()=>navActiveHandler(currentnav.ref)}
                key={currentnav.name}
                >
                   
                    {currentnav.name}
                    
            </Navbar.Link>
            )
         })}
        </Navbar.Content>

      </Navbar>      

  )
}

export default Nav