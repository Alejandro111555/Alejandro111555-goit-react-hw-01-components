import PropTypes from 'prop-types';
import { StatusBar} from '../FriendList/FriendList.styledtem'


export const FriendListItem = ({avatar, name, isOnline}) =>{

  return <>   
       
          <StatusBar status={isOnline}/>
            <img  src={avatar} alt="User avatar" width="48" />
            <p >{name}</p>  
  </ >
}


FriendListItem.propTypes = {
 
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    

  };