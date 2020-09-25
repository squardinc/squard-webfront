import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { TeamLayout } from 'src/contents/team/TeamLayout'

export default {
  title: 'Contents/TeamLayout',
  component: TeamLayout,
} as Meta

const Template: Story = (args) => <TeamLayout {...args} />

export const Top = Template.bind({})
Top.args = {}
