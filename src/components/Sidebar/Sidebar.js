import { BUTTON_TYPE, ICON } from '../../utils/Constants';
import { GET_IMAGES } from '../../utils/ImageLoader';
import Button from '../Button/Button';
import classes from './Sidebar.module.css'

const Sidebar = () => {
    return(
        <nav className={classes.SidebarWrapper}>
            <Button classList={BUTTON_TYPE.WHITE} icon={GET_IMAGES(ICON.USER_BLUE)} iconLabel={"User Blue"} />
            <Button classList={BUTTON_TYPE.TRANSPARENT} icon={GET_IMAGES(ICON.RIGHT_DOUBLE_ARROW_WHITE)} iconLabel={"Right Double Arrow White"} />
        </nav>
    );
}

export default Sidebar;