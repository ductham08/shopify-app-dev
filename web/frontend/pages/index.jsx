import { Banner, Box, CalloutCard, Card, Layout, List, Page, Text } from '@shopify/polaris'
import React from 'react'

const DashboardPage = () => {
  return (
    <Page
      title="Darhboard"
      primaryAction={{ content: 'Save', disabled: true }}
    >
      <Layout>
        <Layout.Section>
          <Banner 
            title="Online store dashboard" 
            onDismiss={() => {}}
            tone="warning"
          >
            <p>View a summary of your online store’s performance.</p>
          </Banner>
        </Layout.Section>

        <Layout.Section>
          <Banner
              title="The app is disabled on your published theme."
              action={
                  {
                      content: 'Enable on theme editor'
                  }
              }
              tone="warning"
          >
            <List>
                <List.Item>
                    Disabling the app will prevent it from working as intended.
                </List.Item>
            </List>
          </Banner>
        </Layout.Section>

        <Layout.Section>
          <CalloutCard
              title="Learn more about how to make the most of the Easy Effects app"
              illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
              primaryAction={{
                  content: 'Read article',
                  url: '#',
              }}
          >
            <p>A complete guide to the steps to create the effect you want.</p>
          </CalloutCard>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default DashboardPage
