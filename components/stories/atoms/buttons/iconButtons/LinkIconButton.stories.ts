import type { Meta, StoryObj } from '@storybook/vue3'
import LinkIconButton from '../../../../../components/atoms/buttons/iconButtons/LinkIconButton.vue'

type Story = StoryObj<typeof LinkIconButton>

const meta: Meta<typeof LinkIconButton> = {
  title: 'LinkIconButton',
  component: LinkIconButton,
}

export const Default: Story = {
  render: () => ({
    components: { LinkIconButton, },
    template: '<LinkIconButton />',
  }),
}

export default meta
