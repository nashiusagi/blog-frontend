import type { Meta, StoryObj } from '@storybook/vue3'
import CategoriesBlock from '../../common/CategoriesBlock.vue'

type Story = StoryObj<typeof CategoriesBlock>

const meta: Meta<typeof CategoriesBlock> = {
  title: 'CategoriesBlock',
  component: CategoriesBlock,
}

export const Default: Story = {
  render: () => ({
    components: { CategoriesBlock, },
    template: '<CategoriesBlock />',
  }),
}

export default meta
