import ConstructionCardItem from '../CardItem';
import cls from './CardList.module.scss'

const ConstructionCardList = ({ list = [] }) => {
    return (
        <div className={cls.list}>
            {
                list.length > 0 && list.map((card, index) => (
                    <ConstructionCardItem
                        key={card.title + index}
                        title={card.title}
                        subtitle={card.subtitle}
                        images={card.images}
                        index={index + 1}
                    />
                ))
            }
        </div>
    );
}

export default ConstructionCardList;
