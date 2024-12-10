'use client'

import * as React from 'react'

import { LayoutGroup, motion } from 'framer-motion'
import {
  Tab as TabPrimitive,
  TabList,
  type TabListProps,
  TabPanel,
  type TabPanelProps,
  type TabProps,
  Tabs as TabsPrimitive,
  type TabsProps,
} from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { cn, cr } from './primitive'

const tabsStyles = tv({
  base: 'group flex gap-4 forced-color-adjust-none',
  variants: {
    orientation: {
      horizontal: 'flex-col',
      vertical: 'w-[800px] flex-row',
    },
  },
})

const Tabs = (props: TabsProps) => {
  return (
    <TabsPrimitive
      {...props}
      className={cr(props.className, (className, renderProps) =>
        tabsStyles({
          ...renderProps,
          className,
        }),
      )}
    />
  )
}

const tabListStyles = tv({
  base: 'flex forced-color-adjust-none relative',
  variants: {
    orientation: {
      horizontal: 'flex-row gap-x-2',
      vertical: 'flex-col items-start gap-y-4',
    },
  },
})

const List = <T extends object>(props: TabListProps<T>) => {
  const id = React.useId()
  return (
    <LayoutGroup id={id}>
      <TabList
        {...props}
        className={cr(props.className, (className, renderProps) =>
          tabListStyles({ ...renderProps, className }),
        )}
      />
    </LayoutGroup>
  )
}

const tabStyles = tv({
  base: [
    'relative flex whitespace-nowrap cursor-default items-center text-sm font-medium outline-none transition hover:text-fg [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:mr-2',
    // hor
    'group-orientation-vertical:w-full group-orientation-vertical:py-0 group-orientation-vertical:pl-4 group-orientation-vertical:pr-2',
    // ver
    'group-orientation-horizontal:px-4 group-orientation-horizontal:py-2 rounded-t-3xl border border-gray-200 border-b-0 relative',
  ],
  variants: {
    isSelected: {
      false: 'text-muted-fg bg-transparent',
      true: 'text-fg bg-white after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[1px] after:bg-white',
    },
    isFocused: { false: 'ring-0', true: 'text-fg' },
    isDisabled: {
      true: 'text-muted-fg/50',
    },
  },
})

const Tab = ({ children, ...props }: TabProps) => {
  return (
    <TabPrimitive
      {...props}
      className={cr(props.className, (_className, renderProps) =>
        tabStyles({
          ...renderProps,
          className: twJoin('href' in props && 'cursor-pointer', _className),
        }),
      )}
    >
      {children as React.ReactNode}
    </TabPrimitive>
  )
}

const tabPanelStyles = tv({
  base: 'flex-1 text-sm text-fg bg-white border border-gray-200 p-4',
  variants: {
    isFocusVisible: {
      true: 'outline-none',
    },
  },
})

const Panel = (props: TabPanelProps) => {
  return (
    <TabPanel
      {...props}
      className={cr(props.className, (className, renderProps) =>
        tabPanelStyles({ ...renderProps, className }),
      )}
    />
  )
}

Tabs.List = List
Tabs.Tab = Tab
Tabs.Panel = Panel

export { Tabs }
