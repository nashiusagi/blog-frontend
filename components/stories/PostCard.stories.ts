import type { Meta, StoryObj } from '@storybook/vue3'
import PostCard from '../PostCard.vue'

type Story = StoryObj<typeof PostCard>

const meta: Meta<typeof PostCard> = {
  title: 'PostCard',
  component: PostCard,
}

export const Default: Story = {
  render: args => ({
    components: { PostCard, },
    setup () {
      return {
        ...args,
      }
    },
    template: '<PostCard :post="post" />',
  }),
  args: {
    post: {
      id: 1,
      title: 'title1',
      body: 'body1',
    },
  },
}

export default meta
