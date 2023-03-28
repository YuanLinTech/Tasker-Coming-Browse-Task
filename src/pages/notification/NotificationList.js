import { List, ListItemAvatar, ListItem, Avatar, ListItemText, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const formatTime = (time) => {
  const localDate = new Date(time);
  // const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return localDate.toLocaleString('en-AU', {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
};

function NotificationList({ data }) {
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar alt="" src={item.userInfo.head_img_url} />
          </ListItemAvatar>
          <Box>
            <ListItemText>{`${item.userInfo.firstName} ${item.userInfo.lastName}`}</ListItemText>
            <Link to={item.click_url}>
              <ListItemText>{item.text}</ListItemText>
            </Link>
            <ListItemText>{formatTime(item.updatedAt)}</ListItemText>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

NotificationList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NotificationList;
