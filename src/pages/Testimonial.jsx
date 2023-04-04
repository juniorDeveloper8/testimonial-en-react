import '../css/TestimonialEstily.css';

export const Testimonial= (props) => {
    return (
        <div className="Testimonial_container" >
            <div>

                <img className="Testimonial_photo" src={props.image}
                    alt="photo profile" ></img>
                <h2 className="Testimonial_name"> {props.name} </h2>

            </div>
            
                <div className="testimonial_content" >
                    <p className="testimonial_content_starts"> {props.starts} </p>
                    <p className="testimonial_content_text"> {props.text} </p>
                </div>
            
        </div>
    )
}

