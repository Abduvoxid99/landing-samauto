import LinkButton from "../LinkButtons";

import cls from './Contacts.module.scss'

const Contacts = ({list = []}) => {
    return (
        <div className={cls.contacts}>
            <span className={cls.contacts__info}>SamAuto.uz - Все права защищены.</span>
            <ul className={cls.contacts__list}>
                {
                    list.length > 0 &&  list.map(({path, Icon, id}) => (
                        <li key={id}>
                            <LinkButton link={path} Icon={Icon} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Contacts;
