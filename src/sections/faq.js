/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Accordion from "components/accordion/accordion";

const data = [
    {
        title: "What is a smart contract?",
        contents: (
            <div>
                “A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized <a href="https://www.investopedia.com/terms/b/blockchain.asp" target="_blank" rel="noopener noreferrer">blockchain</a>  network. The code controls the execution, and transactions are trackable and irreversible.
                Smart contracts permit trusted transactions and agreements to be carried out among disparate, anonymous parties without the need for a central authority, legal system, or external enforcement mechanism.
                While blockchain technology has come to be thought of primarily as the foundation for bitcoin, it has evolved far beyond underpinning the <a href="https://www.investopedia.com/articles/forex/091013/future-cryptocurrency.asp" target="_blank" rel="noopener noreferrer"> virtual currency.</a>”
            </div>
        ),
    },
    {
        title: "Who do I pay to?",
        contents: (
            <div>
                No individual is in control of your earning. The smart contract receives your payments and distribute accordingly.
            </div>
        ),
    },
    {
        title: `Does the admin have access to my funds?`,
        contents: (
            <div>
                No! Transactions on KCL wealth is executed strictly by the smart contract and its on the blockchain and can’t be manipulated by anyone.
                No worries at all. The smart contracts does all its advertised to do. You earn what you see!

            </div>
        ),
    },
    {
        title: `Whats the 30% Tax for???`,
        contents: (
            <div>
                10% IS SHARED TO ALL PARTICIPANTS IN THAT POOL AS YOUR DAILY REWARDS WHICH INCREASES AS PEOPLE BUY MORE KCL POINTS
                <br />
                10% IS DISTRIBUTED AS REFERAL BONUSES:
                <br />
                5% DIRECT REFERAL BONUS
                <br />
                2% REFERAL BONUS TO UPLINES DIRECT LEADER
                <br />
                2% REFERAL BONUS TO 3RD GENERATION UPLINE
                <br />
                1% REFERAL BONUS TO 4TH GENERATION UPLINE
                <br />
                5% SENT TO MARKETING WALLET TO PROMOTE THE PROJECT FURTHER
                5% SENT TO ADMIN WALLET FOR DEVELOPMENT & MAINTENANCE OF THE SYSTEM
            </div>
        )
    },
    {
        title: `Can I remove my capital anytime?`,
        contents: (
            <div>
                Yes! no one has access to your funds but you as its locked in your wallet but in the blockchain.
                Be reminded that you already got taxed 30% non-refundable and you can access the balance 70% anytime.
            </div>
        )
    },
    {
        title: `How do you generate tokens to pay me???`,
        contents: (
            <div>
                Tokens are paid to your reward or referal balance from the purchases of other users as your share on  the pool.
            </div>
        )
    },
    {
        title: `Do I earn referrals when i invite others???`,
        contents: (
            <div>
                Yes, you earn 5% of what your direct downlines buy and other bonuses from what their downlines to 4th Generation also earn.
            </div>
        )
    }
];

const FAQ = () => {
    return (
        <Box as="section" variant="section.excitingFeatures">
            <Container>
                <Box sx={styles.contentWrapper}>

                    <Box >
                        <SectionHeading
                            sx={styles.heading}
                            title="Frequently Asked Questions"
                        />
                        <Box sx={styles.accordionGroup}>
                            <Accordion items={data} />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default FAQ;

const styles = {
    contentWrapper: {
        display: ["block", "block", "grid", "flex", "grid"],
        gridTemplateColumns: "1fr",
        alignItems: "center",
        flexDirection: ["column-reverse"],
    },
    heading: {
        textAlign: ["center", null, null, null, "center"],
        maxWidth: ["100%", "100%", "100%", "100%", "100%", "100%", "100%"],
        mb: [30],
        ml: ["auto", null, null, null, 0],
        h2: {
            fontSize: ["28px", "28px", "28px", "36px", "32px", "36px", "48px"],
            lineHeight: [1.33, 1.33, 1.26],
            letterSpacing: "-1px",

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
