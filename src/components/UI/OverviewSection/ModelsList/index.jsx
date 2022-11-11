import { useState } from 'react';

import ModelsItem from '../ModelsItem';
import cls from './ModelsList.module.scss'

const ModelsList = ({ list = [] }) => {
    const [activeItem, setActiveItem] = useState(list.length && list[0].id)
    
    return (
        <ul className={cls.list}>
            {
                list.length > 0 && list.map((model) => (
                    <ModelsItem 
                        name={model.name} 
                        id={model.id}
                        activeItem={activeItem}
                        onClick={() => setActiveItem(model.id)}
                        key={model.id}
                    />
                ))
            }
        </ul>
    );
}

export default ModelsList;
