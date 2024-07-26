import Link from 'next/link'
import Bars3Icon  from '@heroicons/react/24/outline/Bars3Icon'
import Navlinks from './Navlinks'
import NavProfileLinks from './NavProfileLinks'

function Navbar() {
    return (
        <div className="w-full flex justify-center shadow-lg">
            <div className="navbar py-2 bg-base-100 max-w-6xl">
                <div className="navbar-start ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <Bars3Icon className="h-5 inline-block w-5"/>
                        </label>
                    </div> 
                <div className="md:flex-1 flex-none px-2 mx-2">
            <Link href="/">
            <span className='font-bold text-xl'>
                Ben Dako
            </span>
            </Link>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal custom-menu">
                <Navlinks />
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
            <NavProfileLinks />
      </div>
      </div>
      </div>
    )
}

export default Navbar