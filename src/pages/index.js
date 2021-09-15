import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import ExcitingFeatures from 'sections/exciting-features';
import UltimateFeatures from 'sections/ultimate-features';
import HappyCustomer from 'sections/happy-customer';
import SubscribeUs from 'sections/subscribe-us';
import FAQ from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="KCL WEALTH"
          description="DECENTRALIZED CROWD FUNDING PLATFORM ON KUCOIN COMMUNITY CHAIN"
        />
        <Banner />
        <Services />
        <ExcitingFeatures />
        <UltimateFeatures />
        <HappyCustomer />
        <FAQ />
        <SubscribeUs />

      </Layout>
    </ThemeProvider>
  );
}
