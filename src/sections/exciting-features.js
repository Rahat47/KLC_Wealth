/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from "theme-ui";
import SectionHeading from "components/section-heading";
import Accordion from "components/accordion/accordion";
import workHard from "assets/images/work-hard.png";
import ScrollAnimation from 'react-animate-on-scroll';


const data = [
    {
        title: "Beginner Level",
        contents: (
            <div>
                This is a welcome stage for those checking out the UI/UX. You
                can connect wallet even when you haven't activated any level
            </div>
        ),
    },
    {
        title: "Hunters Level",
        contents: (
            <div>
                <strong>This is level 1.</strong> <br /> you connect wallet and
                activate your account in our decentralized MLM system by paying
                50 $KCL tokens to smart contract. You are expected to get two
                people in this level who uses your referral link and activates
                their account. The smart contracts gives you the level 1 leader
                80 KCL tokens directly to your wallet. A button gets released
                asking you to activate level 2 so you don’t miss your earnings.
                And you then allow the contract to remove 70 KCL to activate for
                level 2(Bronze)
            </div>
        ),
    },
    {
        title: `Bronze`,
        contents: (
            <div>
                <strong>This is the level 2</strong> <br /> The level 2 user
                must have gotten a total of 2 direct down-lines and has paid
                compulsory 70 KCL to attain this level. Now your down-lines have
                a responsibility to bring their 2 people each which you can
                assist them by the spillover system. At this stage your level 2
                down-lines would need to activate level 2 by paying 70 KCL each
                and a total of 4 people. The system pays 80% of each payments to
                you until it completes 224 KCL. You would now click on the
                upgrade button that allows you get promoted to the next level by
                paying 100 KCL.
            </div>
        ),
    },
    {
        title: `Silver`,
        contents: (
            <div>
                <strong>This is the 3rd level.</strong> <br />
                User must have gotten total of 4 level 2 down-lines and paid 70
                KCL to activate this level. Your level 3 down-lines will have to
                work enough to get to level 3 so they get activated and you earn
                640 KCL in this stage and you remove 240 KCL to get activated
                for level 4.
            </div>
        ),
    },
    {
        title: `Gold`,
        contents: (
            <div>
                <strong>This is the 4th level.</strong> <br />
                Your level 4 down-lines will grow to level 4 to get you
                activating them. You will earn 3072 KCL and then you will pay
                1050 KCL to activate level 5(Diamond) which is the final level.
            </div>
        ),
    },
    {
        title: `Diamond`,
        contents: (
            <div>
                <strong>This is the final stage.</strong> You will activate 32
                level 5 down-lines and you earn 26,880 KCL and get cycled out!
            </div>
        ),
    },
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
                            title="Learn how our services work."
                        />
                        <ScrollAnimation animateIn="animate__slideInRight" animateOut="animate__slideOutRight">
                            <Box sx={styles.accordionGroup}>
                                <Accordion items={data} />
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
    accordionGroup: {
        maxWidth: ["none", null, null, 600, "none"],
        ".accordion-item": {
            backgroundColor: "#F6F8FB",
            borderRadius: 10,
            p: [
                "20px 30px",
                "20px 30px",
                "30px 45px",
                "20px 25px 20px",
                "30px 45px",
                "20px 35px",
            ],
            "&.is-open": {
                backgroundColor: "#fff",
                boxShadow: "0px 9px 30px rgba(69, 88, 157, 0.08)",
            },
        },
    },
};
