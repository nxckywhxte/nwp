import Link from 'next/link'

type LogoProps = {
  href: string
  name: string
}

const Logo = ({ href, name }: LogoProps) => {
  return (
    <Link
      className='text-xl dark:hover:text-drPurple font-semibold'
      href={href}>
      @{name}
    </Link>
  )
}

export default Logo