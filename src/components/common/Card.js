import Image from "next/image"

const Card = ({ name, description, img }) => {
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
                <button className="btn btn-primary">Demo</button>
                <button className="btn btn-primary">Code</button>
                </div>
            </div>
        </div>
    )
}

export default Card