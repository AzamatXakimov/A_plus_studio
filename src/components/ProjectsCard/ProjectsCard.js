import { Link } from "react-router-dom";
import "./ProjectsCard.scss";

export const ProjectsCard = ({obj}) => {
    return <>
        <div className="project-card">
            <div className="project-card-imgbox">
                <div className="project-card-img-overlay">
                    <img className="project-card-img" src={obj.img} alt="Project image" />
                </div>
                <Link className="project-card-link" to={obj.project_link}></Link>
            </div>

            <div className="project-card-infobox">
                <h3 className="project-card-title">
                    {obj.title}
                </h3>
                <span className="project-card-text">
                    {obj.category}
                </span>
            </div>
        </div>
    </>
}
