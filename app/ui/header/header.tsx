import Logo from '../logo/logo'
import ThemeToggle from '../theme-toggle/theme-toggle'

const Header = () => {
  return (
    <header className='w-full flex items-center justify-between px-4 py-4'>
      <Logo
        href='/'
        name='nxckywhxte'
      />
      <ThemeToggle />
    </header>
  )
}

export default Header