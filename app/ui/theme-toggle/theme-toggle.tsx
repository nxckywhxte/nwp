'use client'

import { useTheme } from 'next-themes'
import React, { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/24/outline'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  return (
    <div>
      <Menu
        as='div'
        className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md dark:bg-drCurrentLine/20 bg-drForeground/20 px-2 py-2 text-sm font-medium dark:hover:bg-drCurrentLine/30 border dark:border-drCurrentLine dark:hover:border-drPurple hover:border-drCurrentLine/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-drCurrentLine/75'>
            {theme === 'light' ? (
              <SunIcon className='w-5 h-5 dark:hover:text-drPurple' />
            ) : (
              <MoonIcon className='w-5 h-5 dark:hover:text-drPurple' />
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <Menu.Items className='absolute right-0 mt-2 w-32 origin-top-right rounded-md border dark:border-drCurrentLine dark:bg-drCurrentLine/40 shadow-lg'>
            <div className='px-1 py-1'>
              <Menu.Item>
                <button
                  onClick={() => setTheme('dark')}
                  className='dark:hover:text-drPurple group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm dark:hover:bg-drCurrentLine/40 hover:bg-drCurrentLine/10'>
                  <MoonIcon className='w-4 h-4' />
                  Dark
                </button>
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                <button
                  onClick={() => setTheme('light')}
                  className='dark:hover:text-drPurple group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm dark:hover:bg-drCurrentLine/40 hover:bg-drCurrentLine/10'>
                  <SunIcon className='w-4 h-4' />
                  Light
                </button>
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                <button
                  onClick={() => setTheme('system')}
                  className='dark:hover:text-drPurple group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm dark:hover:bg-drCurrentLine/40 hover:bg-drCurrentLine/10'>
                  <ComputerDesktopIcon className='w-4 h-4' />
                  System
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default ThemeToggle
