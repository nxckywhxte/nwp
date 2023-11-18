import Link from 'next/link'
import './logo.module.css'

type LogoProps = {
    href: string
    name: string
}


const Logo = ({href, name}: LogoProps) => {
  return (
      <Link
          className='text-xl font-semibold'
          href={href}
      >
          @{name}
      </Link>
  )
}

export default Logo