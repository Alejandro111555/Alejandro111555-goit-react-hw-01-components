import PropTypes from 'prop-types';
import { Box } from 'components/ui/Box';
import friends from '../../data/friends.json';
import {StyledFriendList, FriendListItem, StatusBar} from './FriendList.styled'

export const FriendList = () => {
    
    return (
        <Box display="flex" p='16'>
            <StyledFriendList>
                {friends.map(({avatar,name,isOnline, id}) => (
                    <FriendListItem key={id}>
                        <StatusBar status={isOnline}/>
                        <img src={avatar}
                            alt="User avatar"
                            width="48" />
                        <p>{name}</p>
                    </FriendListItem>))}
            </StyledFriendList>
        </Box>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number

}