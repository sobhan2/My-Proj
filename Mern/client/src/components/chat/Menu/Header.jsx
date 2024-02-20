import { useContext } from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";


const Component = styled(Box)`
    height: 50px;
    padding: 8px 16x;
    background: grey;
    margin: 0 0 0 10px;
    border-radius: 5px 5px 0 0;
    justifyContent: start;
    
`
const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
    
    
})

const Header = () => {

    const { account } = useContext(AccountContext);

    return ( 
        <>
            <Component>
                <Image src={account.picture} alt="dp" />
            </Component>
        </>
    )
}

export default Header;