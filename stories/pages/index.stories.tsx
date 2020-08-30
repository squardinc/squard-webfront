import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import IndexPage from 'src/pages'

export default {
  title: 'Pages/Index',
  component: IndexPage,
} as Meta

const Template: Story = (args) => <IndexPage {...args} />

export const Top = Template.bind({})
Top.args = {}