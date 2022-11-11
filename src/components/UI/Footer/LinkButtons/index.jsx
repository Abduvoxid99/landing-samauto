import Link from "next/link";

import cls from "./LinkButtons.module.scss";

const LinkButton = ({ link = "", Icon = () => <></> }) => {
  return (
    <Link href={link} passHref>
      <span className={cls.link}>{Icon()}</span>
    </Link>
  );
};

export default LinkButton;
