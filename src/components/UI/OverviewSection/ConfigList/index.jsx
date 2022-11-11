import GreyButton from 'components/UI/Buttons/GreyButton';
import ConfigItem from '../ConfigItem';
import cls from './ConfigList.module.scss'

const ConfigList = ({list = []}) => {
    return (
        <div className={cls.config}>
            <h4 className={cls.config__title}>Параметры NLR</h4>
            <ul className={cls.config__list}>
                {
                    list.length > 0 && list.map((config) => (
                        <ConfigItem 
                            name={config.name}
                            param={config.param}
                            key={config.id}
                        />
                    ))
                }
            </ul>
            <GreyButton className={cls.config__btn}>Подробно о модели</GreyButton>
        </div>
    );
}

export default ConfigList;
