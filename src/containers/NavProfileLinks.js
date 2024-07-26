import { openModal } from "@/store/modalSlice"
import { useDispatch, useSelector } from "react-redux"
import { MODAL_BODY_TYPES } from '@/utils/globalConstantUtil'
import Link from "next/link"
import { fetchUserDetail, setLoggedIn } from "@/store/userSlice"
import { useEffect } from "react"
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import { Linkedin, Github, Mail  } from 'lucide-react';



function NavProfileLinks() {

    return (
            <>
                <Link href="https://www.linkedin.com/in/bendako/" target="_blank" className='btn btn-sm text-xs mr-4 normal-case md:btn-ghost'>
                    <Linkedin />
                </Link>
                <Link href="https://github.com/Bendako" target="_blank">
                    <button className='btn md:mt-0 mt-4 btn-block btn-sm text-xs btn-outline normal-case hover:text-white hover:btn-primary'>
                        <Github />
                    </button>
                </Link>
                <a className='btn btn-sm text-xs ml-4 normal-case md:btn-ghost' rel="noreferrer" target="_blank" href="mailto:bendk1994@gmail.com">
                    <Mail/>
                </a>
            </> 
            
    )
}


export default NavProfileLinks