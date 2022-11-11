import { useState, useRef } from "react";
import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import GreyButton from "../Buttons/GreyButton";
import cls from "./ContactDealer.module.scss";

export default function ContactDealer() {
  const { t } = useTranslation("common");
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handlePlayStop = () => {
    if (videoRef.current) {
      playing ? videoRef.current.pause() : videoRef.current.play();
      setPlaying((wasPlaying) => !wasPlaying);
    }
  };

  return (
    <div className={cls.root} id="contact-dealer">
      <Container>
        <div className={cls.row}>
          <div className={cls.first__col}>
            <div className={cls.video}>
              <video
                onClick={handleVideoPress}
                ref={videoRef}
                loop
                poster="images/isuzu.jpg"
              >
                <source src="videos/video.MP4" type="video/mp4" />
              </video>
              {!playing && (
                <img
                  onClick={handlePlayStop}
                  className={cls.pause}
                  src="images/pause.svg"
                  alt="pause"
                />
              )}
            </div>
          </div>
          <div className={cls.second__col}>
            <h2>ISUZU NQR 71PL</h2>
            <p>
              Перед вами, полюбившийся многим, грузовой автомобиль на базе шасси
              ISUZU NQR 71PL. Выпускаемый с 2007 года, он быстро завоевал
              доверие пользователей, благодаря своему удобству в эксплуатации.
              За всё время существования было реализовано 19.225 экземпляров
              грузовой техники ISUZU NQR 71PL. <br />
              Однако прогресс неумолимо движет нас вперёд, и настало время
              совершенствоваться.
              <br />
              Этим летом завершилась контрактация на технику ISUZU NQR 71PL.
              Встречайте технику нового поколения 700P. Еще надежнее, еще
              экономичнее, еще удобнее, еще безопаснее и экологичнее
            </p>
            <GreyButton className={cls.btn}>Связаться с дилером</GreyButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
