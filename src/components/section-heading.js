/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text, Image } from "theme-ui";
import ScrollAnimation from "react-animate-on-scroll";

const SectionHeading = ({ title, description, emoji, ...props }) => {
    return (
        <Box sx={styles.heading} {...props}>
            <ScrollAnimation
                animateIn="animate__lightSpeedInRight"
                animateOut="animate__lightSpeedOutLeft"
            >
                <Heading sx={styles.title}>
                    {emoji ? <span>{title}</span> : title}
                    {emoji && <Image src={emoji} alt="emoji" />}
                </Heading>{" "}
            </ScrollAnimation>
            <ScrollAnimation
                animateIn="animate__fadeInLeft"
                animateOut="animate__fadeOutRight"
            >
                <Text as="p" sx={styles.description}>
                    {description}
                </Text>
            </ScrollAnimation>
        </Box>
    );
};

export default SectionHeading;

const styles = {
    heading: {
        textAlign: "center",
        maxWidth: 660,
        margin: "0 auto 60px",
    },
    title: {
        fontFamily: "headingSerif",
        fontWeight: 600,
        fontSize: ["28px", "32px", null, null, null, null, "40px"],
        lineHeight: [1.33, 1.33, 1.26],
        img: {
            ml: ["15px"],
            position: "relative",
            top: "8px",
        },
    },
    description: {
        color: "heading",
        fontSize: ["14px", "14px", "16px"],
        lineHeight: [1.86, 1.86, 2.2],
        mt: "10px",
    },
};
