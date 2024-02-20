import { Dialog, Box } from "@mui/material";
//Components
import Menu from "./Menu/Menu";
import EmptyChat from "./chat/EmptyChat";

const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    textAlign: 'center',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const ChatDialog = () => {

    return (
        <Dialog
            open={true} PaperProps={{sx: dialogStyle}} hideBackdrop={true}
        >
            <p>Jai shree Radhe</p>

            <Box>
                <Box>
                    <Menu />
                </Box>
                <Box>
                    <EmptyChat />
                </Box>
            </Box>

        </Dialog>
    );
}

export default ChatDialog;