import classes from './UserAvatar.module.css';

const UserAvatar = (props) => {
    return <span className={classes.DefaultAvatar}>{props.initials}</span>
}

export default UserAvatar;