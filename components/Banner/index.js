import Image from "next/image";
import { meal3Image } from "../../assets/imgs";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <>
      <div className="container mb-12">
        <div className={`full-img ${styles.img}`}>
          <Image
            src={meal3Image}
            width={1279}
            height={853}
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
