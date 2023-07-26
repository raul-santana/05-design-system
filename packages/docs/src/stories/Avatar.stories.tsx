import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@ignite-ui/react'

// O que for setado aqui aparecerá para todos
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/raul-santana.png',
    alt: 'Raul Santana',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
