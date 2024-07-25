import Image from "next/image"
import Link from "next/link"

function Hero(){
    return (
        <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
            <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
                {/* TODO: change this photo */}
                <Image 
                    src="https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" 
                    className="max-w-sm  h-80 object-cover rounded-lg shadow-2xl" 
                    alt="laptop" 
                    width={300}
                    height={300}
                />
                <div>
                    <div className="text-center">
                    <h1 className="text-5xl text-center text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">
                        Fullstack Developer
                    </h1>
                        <p className="py-2 text-xl text-center text-slate-100 mt-4 pr-4">
                            I&apos;m a passionate junior web developer with a strong foundation in creating dynamic and responsive web applications. 
                            I excel at turning complex problems into simple, beautiful, and intuitive designs. My experience encompasses building scalable and efficient web applications, with a focus on robust data management.
                            <br /><br />
                            Thriving in collaborative environments, I&apos;m always eager to learn and adapt to new technologies. My goal is to continually grow as a developer while contributing to innovative projects that make a difference.
                            <br /><br />
                            Feel free to explore my portfolio to see some of the projects I&apos;ve worked on. Let&apos;s connect and build something amazing together!
                        </p>
                    </div>
                {/* <Link href="/start-designing"><button className="btn text-lg mt-16 px-12 btn-primary normal-case">CV Download</button></Link> */}
                </div>
            </div>
        </div>
    )    
}

export default Hero