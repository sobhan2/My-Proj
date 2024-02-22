import { useContext } from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";


const Component = styled(Box)`
height: 50px;
padding: 16px 16px;
background: grey;
margin: 0 0 0 10px;
border-radius: 5px 5px 0 0;
display: flex;
align-items: center;
    
`
const Image = styled('img')({
    height: 40,
  width: 40,
  borderRadius: '50%',
  marginLeft: "16px",
    
})

const Header = () => {

    const { account } = useContext(AccountContext);

    return ( 
        <>
            <Component sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <span>{account.name}</span>
                <Image src={account.picture} alt="dp" />
            </Component>
        </>
    )
}

export default Header;