import "./testimonials.css"
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section className="testimonials container section" id="testimonials">
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Testimonials</span>
            <Swiper
                // slidesPerView={1}
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper testimonials__container"
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} className="testimonial__img" alt="" />
                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
}

export default Testimonials;
