import { useState } from 'react';
import ReadMoreButton from '../../Buttons/ReadMoreButton'
import Carousel from 'components/UI/Carousel';

import cls from './CardItem.module.scss'

const ConstructionCardItem = ({ title = '', subtitle = '', images = '', index = 1 }) => {
    const [isOpenContent, setIsOpenContent] = useState(typeof window !== 'undefined' && window.clientWidth > 425)

    return (
        <div className={`${cls.card} ${index % 2 ? '' : cls.card__reverse}`}>
            <div className={cls.card__carousel}>
                <Carousel
                    images={images}
                />
            </div>
            <div className={cls.card__info}>
                <h4 className={cls.card__info__title}>{ title }</h4>
                <p className={`${cls.card__info__subtitle} ${isOpenContent ? cls.openContent : ''}`}>{ subtitle }</p>

                <span className={cls.card__info__btn}>
                    <ReadMoreButton 
                        isOpenContent={isOpenContent}
                        setIsOpenContent={setIsOpenContent} 
                    />
                </span>
            </div>
        </div>
    );
}

export default ConstructionCardItem;
