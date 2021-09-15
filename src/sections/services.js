/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";

const Services = () => {
    return (
        <Box as="section" id="services" variant="section.features">
            <Container>
                <SectionHeading
                    sx={styles.heading}
                    title="Who are we?"
                    description="KCL Wealth is a decentralized crowd funding platform executed by smart contracts which makes it impossible to get scammed by any party. 
          Designed to help our community enjoy passive income over a long period of time."
                />
            </Container>
        </Box>
    );
};

export default Services;

const styles = {
    heading: {
        marginBottom: [40, 50, 60],
        maxWidth: ["none", null, null, 565, null, "none"],
        h2: {
            color: "heading",
            fontSize: ["28px", "32px", "32px", "32px", "32px", "32px", "40px"],
        },
        P: {
            fontSize: ["16px", "16px", "16px", "16px", "14px", "16px"],
            maxWidth: [510],
            m: ["5px auto 0"],
        },
    },
};
