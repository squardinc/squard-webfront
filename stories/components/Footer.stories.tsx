import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { DefaultFooter } from 'src/components/Footer/ContentFooter'

export default {
  title: 'Components/Footer',
  component: DefaultFooter,
} as Meta

const Template: Story = (args) => <DefaultFooter {...args} />

export const Top = Template.bind({})
Top.args = {}
