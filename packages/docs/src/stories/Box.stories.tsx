import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@ignite-ui/react'

// O que for setado aqui aparecerá para todos
export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text> Testando o elemento Box </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
