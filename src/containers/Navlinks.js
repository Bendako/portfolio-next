import Link from 'next/link'


function Navlinks(){
    return(
        <>
            {/* <li className="mr-2"><Link href="/features">Features</Link></li> */}
            <li className="mr-2"><Link href="/pricing">My Skills</Link></li>
            {/* <li className="mr-2"><Link href="/blogs">Blogs</Link></li> */}
            <li className="mr-2"><Link href="/contact-us">staff 2</Link></li>
            <li className="mr-2"><Link href="/start-designing">staff 3</Link></li>
        </>
    )
}

export default Navlinks