/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Image } from 'theme-ui';
import { Link } from 'components/link';
import { rgba } from 'polished';


const FooterWidget = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>

      <ul>
        {items.map(({ path, label, icon }, i) => (

          <li key={i}>
            {icon && <Image src={icon} alt={label} />}
            <a href={path} key={i} target="_blank"  >{label}</a>
          </li>

        ))}
      </ul>
    </Box>
  );
};

export default FooterWidget;

const styles = {
  footerWidget: {
    h4: {
      color: 'heading',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading',
    },
    ul: {
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: ['column', 'column', 'row'],
      justifyContent: ['center', 'center', 'space-around'],
      alignItems: 'center',
      margin: '28px 0 0',
      padding: 0,
      li: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        margin: "0.5rem 0",
        img: {
          mr: '15px',
        },
        a: {
          color: rgba('#02073E', 0.8),
          textDecoration: 'none',
          fontSize: '14px',
        },
      },

    },
  },
};
