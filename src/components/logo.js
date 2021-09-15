/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';
import { Link } from 'components/link';
// import LogoSvg from 'components/icons/logo';
import logoImg from 'assets/images/kclwealth-removebg.png'
import Image from './image';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image src={logoImg} alt="Logo" />
      <Heading as="h3">KCL WEALTH</Heading>
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    img: {
      width: "75px",
      height: "50px"
    }



  },
};
