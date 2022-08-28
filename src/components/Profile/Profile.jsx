import { Box } from 'components/ui/Box';
import PropTypes from 'prop-types';
import {UserAvatar, StyledInfo, Username, UserTag, UserItemInfo, UserInfoTag} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats:{followers,views,likes} } ) => {
    
    return (
        <Box
            width="250px"
            p='16'
            display="flex"
            flexDirection="column"
            alignItems="center"
            border="normal"
            borderRadius="normal">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center" pb='16'>
                <UserAvatar src={avatar} alt="" />
                <Username>{username}</Username>
                <UserTag>{tag}</UserTag>
                <p>{location}</p>
            </Box>
            
                <StyledInfo>
                    <UserItemInfo>
                        <span>Followers </span>
                        <UserInfoTag>{followers}</UserInfoTag>
                    </UserItemInfo>
                    <UserItemInfo>
                        <span>Views </span>
                        <UserInfoTag>{views}</UserInfoTag>
                    </UserItemInfo>
                    <UserItemInfo>
                        <span>Likes </span>
                        <UserInfoTag>{likes}</UserInfoTag>
                    </UserItemInfo>
                </StyledInfo>
        </Box>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers:PropTypes.number.isRequired,
        views:PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired
    }).isRequired
}