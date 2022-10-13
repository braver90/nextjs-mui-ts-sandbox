import Image from 'next/image';
import bg from '/public/background.png';
import styles from './bgImage.module.css';
import { useTheme } from '@mui/material/styles';
export interface BgImageProps {}

const BgImage = (props: BgImageProps) => {
  const theme = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.palette.primary.main }}
      className={styles.imgCtn}
    >
      <Image
        src={bg}
        layout="fill"
        className={styles.bgImage}
        objectFit="cover"
      ></Image>
    </div>
  );
};

export default BgImage;
