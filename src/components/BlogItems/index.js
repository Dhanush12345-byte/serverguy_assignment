import "./index.css"


function Blogitems(props){

    const { title, objectID, url } = props.eachDetailes

    return(
        <li className="Blog_list" key={objectID}>
            <a href={url} rel="noopener noreferrer" className="anchor_tag">
                <p className="blogo_para">{title}</p>
            </a>
        </li>
    )
}

export default Blogitems