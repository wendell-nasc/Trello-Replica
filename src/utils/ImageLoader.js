import { Logger } from "./CommonMethods";
import { ICON } from "./Constants";

import AppWhite from '../assets/icons/apps_white.svg';
import EarthGreen from '../assets/icons/earth_green.svg';
import EarthWhite from '../assets/icons/earth_white.svg';
import InfoWhite from '../assets/icons/info.png';
import NotificationWhite from '../assets/icons/notification.png';
import CaretDownWhite from '../assets/icons/down-arrow-white.png';
import UserBlue from '../assets/icons/user-blue.png';
import RightDoubleArrowWhite from '../assets/icons/right-double-arrow-white.png';

export const GET_IMAGES = (which) => {
    switch(which) {
        case ICON.APPS_WHITE:
            return AppWhite;
        case ICON.EARTH_GREEN:
            return EarthGreen;
        case ICON.EARTH_WHITE:
            return EarthWhite;
        case ICON.INFO_WHITE:
            return InfoWhite
        case ICON.CARET_DOWN_WHITE:
            return CaretDownWhite
        case ICON.NOTIFICATION_WHITE:
            return NotificationWhite
        case ICON.USER_BLUE:
            return UserBlue
        case ICON.RIGHT_DOUBLE_ARROW_WHITE:
            return RightDoubleArrowWhite
        default:
            Logger("Invalid Image Type")
    }
}