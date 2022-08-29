import PropTypes from 'prop-types';
import { Box } from 'components/ui/Box';
import {FriendListItem} from 'components/FriendListItem/FriendListItem';
import {StyledFriendList, FriendListItemStyled} from './FriendList.styledtem'

export const FriendList = ({friends}) => {

    return (
        <Box display="flex" p='16'>
            <StyledFriendList>
                {friends.map(({avatar,name,isOnline, id}) => (
                    <FriendListItemStyled key={id}>
                        <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline ={isOnline}
                    />
                    </FriendListItemStyled>))}
            </StyledFriendList>
        </Box>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf.isRequired
}