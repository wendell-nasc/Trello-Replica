import { BUTTON_TYPE, ICON } from '../../utils/Constants';
import { GET_IMAGES } from '../../utils/ImageLoader';
import Button from '../Button/Button';
import UserAvatar from '../UserAvatar/UserAvatar';
import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <header className={classes.MainContainer}>
            <div className={classes.LeftMenu}>
                <Button icon={GET_IMAGES(ICON.APPS_WHITE)} iconLabel={"app icon white"} />

                <div className={classes.MenuItem}>
                    <p className={classes.Logo}></p>
                </div>

                <div className={classes.MenuItem}>
                    <span>Workspaces</span>
                    <img className={classes.ArrowDown} src={GET_IMAGES(ICON.CARET_DOWN_WHITE)} alt="Caret Down" />
                </div>
                <div className={classes.MenuItem}>
                    <span>Recent</span>
                    <img className={classes.ArrowDown} src={GET_IMAGES(ICON.CARET_DOWN_WHITE)} alt="Caret Down" />
                </div>
                <div className={classes.MenuItem}>
                    <span>Starred</span>
                    <img className={classes.ArrowDown} src={GET_IMAGES(ICON.CARET_DOWN_WHITE)} alt="Caret Down" />
                </div>
                <div className={classes.MenuItem}>
                    <span>Templates</span>
                    <img className={classes.ArrowDown} src={GET_IMAGES(ICON.CARET_DOWN_WHITE)} alt="Caret Down" />
                </div>

                <Button classList={BUTTON_TYPE.DARK} label={"Create"} />
            </div>

            <div className={classes.RightMenu}>
                <div className={classes.SearchWrapper}>
                    <input className={classes.SearchInput} type="search" placeholder="Search" />
                    <span className="material-icons">&#xe8b6;</span>
                </div>
                <Button icon={GET_IMAGES(ICON.INFO_WHITE)} iconLabel={"info icon white"} />
                <Button icon={GET_IMAGES(ICON.NOTIFICATION_WHITE)} iconLabel={"notification icon white"} />

                <UserAvatar initials="QK" />
            </div>
        </header>
    );
}

export default Topbar;