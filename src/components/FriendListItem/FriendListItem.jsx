import PropTypes from 'prop-types';
import { Box } from 'components/ui/Box';
import {StyledFriendList, FriendList, StatusBar} from './FriendList.styledtem'

export const FriendListItem = ({friends}) => {

    return (
        <Box display="flex" p='16'>
            <StyledFriendList>
                {friends.map(({avatar,name,isOnline, id}) => (
                    <FriendList key={id}>
                        <StatusBar status={isOnline}/>
                        <img src={avatar}
                            alt="User avatar"
                            width="48" />
                        <p>{name}</p>
                    </FriendList>))}
            </StyledFriendList>
        </Box>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf (
        PropTypes.shape({
            avatar:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
            id:PropTypes.number.isRequired
        })
    ).isRequired
}