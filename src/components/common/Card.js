import Image from "next/image"
import { Github, ExternalLink } from "lucide-react";


const Card = ({ name, description, img, githubUrl, liveUrl }) => {
    
    const handleGithubClick = () => {
        if (githubUrl) window.open(githubUrl, '_blank');
      };
    
      const handleLiveClick = () => {
        if (liveUrl) window.open(liveUrl, '_blank');
      };

    return (
        <div className="card m-4 lg:card-side bg-base-100 shadow-xl">
            <figure>
            <Image 
                    src={typeof img === 'string' ? img : img.src} 
                    alt={name}
                    width={350} 
                    height={350}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{ name }</h2>
                <p>{ description }</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={handleLiveClick}>Live Demo</button>
                <button className="btn btn-primary" onClick={handleGithubClick}>Source Code</button>
                </div>
            </div>
        </div>
    )
}

export default Card