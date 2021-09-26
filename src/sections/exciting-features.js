/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import workHard from "assets/images/work-hard.png";
import checkFilledCircle from 'assets/images/icons/check-circle.png';

import ScrollAnimation from 'react-animate-on-scroll';


const data = [
    {
        title: "BUY KCL TOKENS AND SOME KCS TOKEN FOR GAS FEES",
        id: "1",
    },
    {
        title: "USE A REFERRAL LINK AND OPEN SITE ON YOUR WEB 3 BROWSER LIKE METAMASK.",
        id: "2",
    },
    {
        title: `CONNECT WALLET TO KCC CHAIN`,
        id: "3",
    },
    {
        title: `SELECT ONE OF THE PACKAGES. YOU CAN SEE THE PRICES ABOVE ON THE WEBSITE.`,
        id: "4",
    },
    {
        title: `APPROVE KCL`,
        id: "5",
    },
    {
        title: `BUY BUTTON WILL APPEAR, THEN YOU BUY AND THE TOKEN WILL BE REMOVED FROM YOUR WALLET`,
        id: "6",
    },
    {
        title: `YOU WILL BE TAXED 30% NON REFUNDABLE FEE TO BECOME PART OF THE CROWD FUNDING POOL.`,
        id: "7",
    }
];

const ExcitingFeatures = () => {
    return (
        <Box as="section" variant="section.excitingFeatures">
            <Container>
                <Box sx={styles.contentWrapper}>
                    <ScrollAnimation animateIn="animate__slideInLeft" animateOut="animate__slideOutRight">
                        <Box sx={styles.illustration}>
                            <Image src={workHard} alt="feature" />
                        </Box>
                    </ScrollAnimation>
                    <Box sx={styles.rightContent}>
                        <SectionHeading
                            sx={styles.heading}
                            title="HOW DOES IT WORK???"
                        />
                        <ScrollAnimation animateIn="animate__slideInRight" animateOut="animate__slideOutRight">
                            <Box sx={styles.accordionGroup}>
                                {data.map(item => (
                                    <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut" key={item.id}>

                                        <Text key={item.id} sx={styles.listItem} as="p">
                                            <Image src={checkFilledCircle} alt="check" sx={styles.checkIcon} />
                                            {`${item.title}`}
                                        </Text>
                                    </ScrollAnimation>
                                ))}

                            </Box>
                        </ScrollAnimation>

                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ExcitingFeatures;

const styles = {
    contentWrapper: {
        // gap: [0, 0, 0, 0, 10, 100],
        display: ["block", "block", "grid", "flex", "grid"],
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        flexDirection: ["column-reverse"],
    },
    illustration: {
        display: ["none", "none", "block"],
    },
    heading: {
        maxWidth: [295, 295, 495, 495, 410, 500],
        textAlign: ["center", null, null, null, "left"],
        mb: [30],
        ml: ["auto", null, null, null, 0],
        h2: {
            fontSize: ["28px", "28px", "28px", "36px", "32px", "36px", "48px"],
            lineHeight: [1.33, 1.33, 1.26],
            letterSpacing: "-1px",
        },
        img: {
            maxWidth: ["24px", "24px", "24px", "30px", "30px", "30px", "100%"],
            top: ["4px", "8px"],
        },
    },
    listItem: {
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 2.81,
        display: 'flex',
        alignItems: 'center',

    },
    checkIcon: {
        width: '20px',
        height: '20px',
        marginRight: '10px',
        flexShrink: 0,

    },
    accordionGroup: {
        maxWidth: ["none", null, null, 600, "none"],
        marginLeft: "1rem"
    },
};
