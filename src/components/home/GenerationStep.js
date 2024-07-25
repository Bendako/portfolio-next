import DocumentTextIcon  from '@heroicons/react/24/outline/DocumentTextIcon'
import ArrowDownOnSquareIcon  from '@heroicons/react/24/outline/ArrowDownOnSquareIcon'
import ArrowUpOnSquareIcon  from '@heroicons/react/24/outline/ArrowUpOnSquareIcon'
import Image from 'next/image'

const ReactIcon = () => {
    return <Image 
        width={50} 
        height={50} 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
        alt="react icon" />
  
}

const NextIcon = () => {
    return <Image 
        width={50} 
        height={50} 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
        alt="next icon" />
  
}

const MongoDBIcon = () => {
    return <Image 
        width={50} 
        height={50} 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
        alt="mongodb icon" />
  
}

const NodeIcon = () => {
    return <Image 
        width={50} 
        height={50} 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
        alt="node icon" />
  
}

const HTMLIcon = () => {
    return <Image 
        width={50} 
        height={50} 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
        alt="html icon" />
  
}
const CSSIcon = () => {
    return <Image 
        width={50} 
        height={50} 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
        alt="css icon" />
  
}

const icons = [
    {icon : <HTMLIcon className='w-10 h-10 inline-block mr-2' />, description : "HTML 5"},
    {icon : <CSSIcon className='w-10 h-10 inline-block mr-2' />, description : "CSS 3"},
    {icon : <ReactIcon className='w-10 h-10 inline-block mr-2' />, description : "React"},
    {icon : <NextIcon className='w-10 h-10 inline-block mr-2' />, description : "NextJS"},
    {icon : <NodeIcon className='w-10 h-10 inline-block mr-2' />, description : "NodeJS"},
    {icon : <MongoDBIcon className='w-10 h-10 inline-block mr-2' />, description : "MongoDB"},
]

function GenerationStep() {
    return (
        <>
             <div className="grid place-items-center bg-slate-50 w-full ">
                <div className="max-w-2xl w-full py-16 px-4 content-center justify-center">
                    <h2 className="text-3xl  text-center font-bold">My Skills</h2>
                    <div className="grid mt-24 md:grid-cols-3 grid-cols-1 gap-8">
                        {
                            icons.map((i, k) => {
                                return (
                                    <div key={k} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl">
                                        <div className="grid -mt-4 place-items-center">
                                        <div className="w-8 h-8  rounded-full  bg-amber-500 text-slate-100 flex font-bold justify-center items-center">
                                            <p>{k+1}</p>
                                        </div>
                                        </div>
                                        <div className="card-body  items-center text-center">
                                            <p  className='text-primary'>{i.icon}</p>
                                            <p className='mt-2'> {i.description}</p>
                                        </div>
                                        </div>
                                )
                            })
                        }
            </div>
            </div>
        </div>
        </>
    )
}

export default GenerationStep