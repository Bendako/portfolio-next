
// const ProjectData = {
//     name: "Project 1",
//     description: "Project 1 description",
//     img: "Project 1 image",
// }

const Card = ({ name, description, img }) => {
    return (
        <div className="card m-4 lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Album" />
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