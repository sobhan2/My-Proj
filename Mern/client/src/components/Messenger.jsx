import {AppBar, Toolbar, styled , Box} from '@mui/material';

import LoginDialog from "./account/LoginDialog";

const Component = styled(Box)`
    height: 100vh;
    background: #DFDFDF;
`

const Header = styled(AppBar)`
    height: 20vh;
    background-color: #343434;
`

const Messenger = () => {
    return(
        <Component>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        <LoginDialog />
        </Component>
    )
}

export default Messenger;