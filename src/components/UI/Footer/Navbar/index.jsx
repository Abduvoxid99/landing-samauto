import Link from "next/link";

import LinkButton from '../LinkButtons'

import cls from './Navbar.module.scss'

const FooterNavbar = ({ Logo = () => <></>, navigations = [], phone = '', socialMedias = [] }) => {

    return (
        <nav className={cls.footerNavbar}>
            <div className={cls.footerNavbar__contacts}>
                <span className={cls.footerNavbar__contacts__logo}>
                    <Logo />
                </span>
                <span className={cls.footerNavbar__contacts__phone}>
                    <Link href={`tel:${phone?.replace(/[\s\-\(\)]+/g, '')}`}>{phone}</Link>
                </span>
                <div className={cls.footerNavbar__contacts__list}>
                    <p>Соц-сети:</p>
                    <ul>
                        {
                            socialMedias?.length > 0 && socialMedias.map(({ path, Icon, id }) => (
                                <li key={id}>
                                    <LinkButton link={path} Icon={Icon} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className={cls.footerNavbar__list__wrapper}>
                <ul className={cls.footerNavbar__list}>
                    {
                        navigations.length > 0 && navigations.map(({ path, title }, index) => (
                            <span className={cls.footerNavbar__item} key={index + title}>
                                <Link href={path} passHref className={cls.footerNavbar__link}>
                                    {title}
                                </Link>
                            </span>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
}

export default FooterNavbar;
