import styled from "styled-components";
import Clickable from "../../../../Components/Clickable";
import MessagesIcon from "../../../../Icons/MessagesIcon";
import NotificationsIcon from "../../../../Icons/NotificationsIcon";
import IconOnlyButton from "../../../../Components/IconOnlyButton";

const ButtonLeftWrapper = styled.div`
    color: #D3EAFE;
    }
`;
const ButtonRightWrapper = styled.div`
    padding-left:6px;
    }
`;

function IconsRow() {
    return (
        <div className='d-inline-flex flex-row align-items-center align-self-center'>
            <ButtonLeftWrapper>
                <Clickable>
                <IconOnlyButton icon={<MessagesIcon/>}/>
                </Clickable>
            </ButtonLeftWrapper>
            <ButtonRightWrapper>
                <Clickable>
                     <IconOnlyButton icon={<NotificationsIcon/>}/>
                </Clickable>
            </ButtonRightWrapper>
        </div>
    );
}

export default IconsRow;