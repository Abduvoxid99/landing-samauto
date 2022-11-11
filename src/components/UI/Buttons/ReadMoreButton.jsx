import cls from './Button.module.scss'
import {ReadMoreIcon} from '../Icons'

const ReadMoreButton = ({ setIsOpenContent, isOpenContent }) => {
    return (
        <button className={cls.readMore_btn} onClick={() => setIsOpenContent((prev) => !prev)}>
            <span>Прочитать все</span>
            <div className={isOpenContent ? cls.openBtn : cls.closeBtn}>
                <ReadMoreIcon />
            </div>
        </button>
    );
}

export default ReadMoreButton;
