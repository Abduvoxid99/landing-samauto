import cls from './ModelsItem.module.scss'

const ModelsItem = ({ name = '', activeItem, id, ...other }) => {
    return (
        <li 
            className={`${cls.item} ${activeItem === id ? cls.active : ''}`}
            {...other}
        >
            {name}
        </li>
    );
}

export default ModelsItem;
