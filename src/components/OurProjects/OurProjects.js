import { useState } from "react";
import "./OurProjects.scss";
import projectImg from "../../assets/images/project-img.jpg"
import { ProjectsCard } from "../ProjectsCard/ProjectsCard";


// SWIPER 
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Grid, Pagination } from "swiper";



export const OurProjects = () => {

    const [projects, setProjects] = useState([
        {
            title: "Kompaniya uchun web sahifa dizayini",
            project_link: "/",
            category: "UI/UX",
            img: projectImg
        },
        {
            title: "Kompaniya uchun web sahifa dizayini",
            project_link: "/",
            category: "UI/UX",
            img: projectImg
        },
        {
            title: "Kompaniya uchun web sahifa dizayini",
            project_link: "/",
            category: "UI/UX",
            img: projectImg
        },
        {
            title: "Kompaniya uchun web sahifa dizayini",
            project_link: "/",
            category: "UI/UX",
            img: projectImg
        },
        {
            title: "Kompaniya uchun web sahifa dizayini",
            project_link: "/",
            category: "UI/UX",
            img: projectImg
        },
        {
            title: "Kompaniya uchun web sahifa dizayini",
            project_link: "/",
            category: "UI/UX",
            img: projectImg
        },
        {
            title: "Kompaniya uchun web sahifa dizayini",
            project_link: "/",
            category: "UI/UX",
            img: projectImg
        },
        {
            title: "Kompaniya uchun web sahifa dizayini",
            project_link: "/",
            category: "UI/UX",
            img: projectImg
        },
        {
            title: "Kompaniya uchun web sahifa dizayini",
            project_link: "/",
            category: "UI/UX",
            img: projectImg
        },
        {
            title: "Kompaniya uchun web sahifa dizayini",
            project_link: "/",
            category: "UI/UX",
            img: projectImg
        },
    ]);

    return <>
        <section className="our-projects">
            <div className="container">
                <h2 className="our-projects-title">
                    Our last projects
                </h2>

                <Swiper
                    slidesPerView={1}
                    grid={{
                        rows: 2
                    }}
                    spaceBetween={16}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        830: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Grid, Pagination]}
                    className="mySwiper"
                >
                    {projects.map((item, i) => (
                        <SwiperSlide key={i}>
                            <ProjectsCard obj={item}/>
                        </SwiperSlide>
                    ))}
                    {/* <SwiperSlide>
                        <ProjectsCard obj={projects[0]}/>
                    </SwiperSlide> */}
                </Swiper>
                <div className="our-projects-box">
                </div>

                <ul className="our-projects-list">
                </ul>
            </div>
        </section>
    </>
}
