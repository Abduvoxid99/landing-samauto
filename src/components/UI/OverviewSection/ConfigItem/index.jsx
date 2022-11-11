import cls from './ConfigItem.module.scss'

const ConfigItem = ({name = '', param = ''}) => {
    return (
        <li className={cls.item}>
            <span className={cls.item__name}>{ name }</span>
            <span className={cls.item__param}>{ param }</span>
        </li>
    );
}

export default ConfigItem;
