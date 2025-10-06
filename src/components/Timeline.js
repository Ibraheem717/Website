import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimeLineElements from "./timelineElements";
import { ReactComponent as Work } from "../assets/img/work.svg";
import { ReactComponent as School } from "../assets/img/school.svg";
import ColourSharp from "../assets/img/color-sharp.png";


const Timeline = () => {
    let workIconStyles = { background: "#06D6A0" };
    let educationIconStyles = { background: "#f9c74f" };

    const getHeightByDuration = (years) => {
        const baseHeight = 100; 
        const extraPerYear = 50;
        return baseHeight + (years * extraPerYear);
    };


    return (
        <section className="timeline" id="timeline">
            <h1>Timeline</h1>
            <VerticalTimeline>
                {
                    TimeLineElements.map((element) => {
                        let isEducation = element.icon === "education";

                        return (
                            <VerticalTimelineElement key={element.key} date={element.date} dateClassName="date" iconStyle={isEducation ? workIconStyles : educationIconStyles} icon={isEducation ? <School /> : <Work />} contentStyle={{ minHeight: `${getHeightByDuration(element.duration)}px` }}>
                                <h3 className="vertical-timeline-element-title timeline-text">
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle timeline-text">
                                    {element.location}
                                </h5>
                                <p id="description" className="timeline-text">{element.description}</p>
                                
                            </VerticalTimelineElement>
                        );
                    })
                }
            </VerticalTimeline>
            <img className="background-image-left" src={ColourSharp} alt=''/>
        </section>
    )
}

export default Timeline;   