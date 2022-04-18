import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import eventPoster1 from '../../images/Event/Event-poster-1.jpg'
import eventPoster2 from '../../images/Event/Event-poster-2.jpg'
import eventPoster3 from '../../images/Event/Event-poster-3.jpg'
import eventPoster4 from '../../images/Event/Event-poster-4.jpg'
import eventPoster5 from '../../images/Event/Event-poster-5.jpg'

const EventPoster = () => {
    return (
        <Container>
                <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            }}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            }}
                        modules={[ Autoplay, Pagination, Navigation]} 
                        className="mySwiper py-5"
                    >
                        <SwiperSlide> 
                             <Image src={eventPoster1} alt="Event-Poster-1" className="poserImage" />    
                        </SwiperSlide>  
                        <SwiperSlide> 
                             <Image src={eventPoster2} alt="Event-Poster-1" className="poserImage" />    
                        </SwiperSlide>  
                        <SwiperSlide> 
                             <Image src={eventPoster3} alt="Event-Poster-1" className="poserImage" />    
                        </SwiperSlide>  
                        <SwiperSlide> 
                             <Image src={eventPoster4} alt="Event-Poster-1" className="poserImage" />    
                        </SwiperSlide>  
                        <SwiperSlide> 
                             <Image src={eventPoster5} alt="Event-Poster-1" className="poserImage" />    
                        </SwiperSlide>  
                            
                </Swiper>
            </Container>
    );
};

export default EventPoster;