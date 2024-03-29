/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";
import ScrollAnimation from 'react-animate-on-scroll';

import icon1 from "assets/images/icons/1.png";
import icon2 from "assets/images/icons/2.png";
import icon3 from "assets/images/icons/3.png";
import icon4 from "assets/images/icons/4.png";
import icon5 from "assets/images/icons/5.png";
import icon6 from "assets/images/icons/6.png";
import teamIcon from 'assets/images/icons/team.png'

const data = [
    {
        id: 1,
        icon: icon1,
        path: "#!",
        title: "Sponsored adverts daily",
    },
    {
        id: 2,
        icon: icon2,
        path: "#!",
        title: "Spillovers",
    },
    {
        id: 3,
        icon: icon3,
        path: "#!",
        title: "Startup capital is low",
    },
    {
        id: 4,
        icon: icon4,
        path: "#!",
        title: "Blockchain technology",
    },
    {
        id: 5,
        icon: icon5,
        path: "#!",
        title: "Everyone wins",
    },
    {
        id: 6,
        icon: teamIcon,
        path: "#!",
        title: "Earn 10% referral bonus up to 4th generation",
    },
    {
        id: 7,
        icon: icon6,
        path: "#!",
        title: "Share 10% of all kcl points purchases of your package in the pool",
    }
];

const UltimateFeatures = () => {
    return (
        <Box as="section" id="features" variant="section.ultimateFeatures">
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    title="Ultimate features you must appreciate"
                    description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred."
                />
                <Box sx={styles.features}>
                    {data?.map(item => (

                        <ScrollAnimation animateIn="animate__jackInTheBox" animateOut="animate__rotateOut">
                            <Feature
                                className="feature-item"
                                key={item.id}
                                data={item}
                            />
                        </ScrollAnimation>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default UltimateFeatures;

const styles = {
    heading: {
        marginBottom: [50, 50, 80],
        p: {
            maxWidth: 490,
            margin: ["10px auto 0"],
        },
    },
    features: {
        gap: [60, 60, 60, 40, "50px 30px", 60],
        display: ["grid", "grid"],
        maxWidth: 1030,
        margin: "0 auto",
        gridTemplateColumns: [
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
        ],
        ".feature-item": {
            display: ["block"],
            textAlign: "center",
            maxWidth: [290, 260, 260, 280, "none"],
            m: ["0 auto", "0 auto", "0 auto", "0 auto", "0 auto", 0],
            figure: {
                m: ["0 0 20px"],
            },
            h4: {
                mb: ["15px", "15px", "20px"],
            },
            p: {
                fontSize: ["14px", "14px", "16px", "16px", "14px", "16px"],
            },
        },
    },
};
