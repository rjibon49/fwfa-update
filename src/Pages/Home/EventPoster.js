import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Autoplay, Navigation, Pagination, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import eventPoster1 from '../../images/Event/EventPoster1.jpg'
import eventPoster2 from '../../images/Event/EventPoster2.jpg'
import eventPoster3 from '../../images/Event/EventPoster3.jpg'
import eventPoster4 from '../../images/Event/EventPoster4.jpg'
import eventPoster5 from '../../images/Event/EventPoster5.jpg'
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const EventPoster = () => {
    return (
        <Container>
                <Swiper
                        // slidesPerView={1}
                        // spaceBetween={30}
                        // loop={true}
                        // autoplay={{
                        //     delay: 4000,
                        //     disableOnInteraction: false,
                        //     }}
                        // pagination={{
                        // clickable: true,
                        // }}
                        // breakpoints={{
                        //     640: {
                        //         slidesPerView: 1,
                        //         spaceBetween: 20,
                        //     },
                        //     768: {
                        //         slidesPerView: 1,
                        //         spaceBetween: 40,
                        //     },
                        //     1024: {
                        //         slidesPerView: 1,
                        //         spaceBetween: 20,
                        //     },
                        //     }}

                        effect={"cube"}
                            grabCursor={true}
                            cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.75,
                            }}
                            pagination={true}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                }}

                        modules={[ Autoplay, Pagination, Navigation, EffectCube]} 
                        className="mySwiper py-5"
                    >
                        <SwiperSlide className='text-center'> 
                             <Image src={eventPoster1} alt="Event-Poster-1" className="poserImage" />    
                        </SwiperSlide>   
                        <SwiperSlide className='text-center'> 
                             <Image src={eventPoster2} alt="Event-Poster-1" className="poserImage" />    
                        </SwiperSlide>  
                        <SwiperSlide className='text-center'> 
                             <Image src={eventPoster3} alt="Event-Poster-1" className="poserImage" />    
                        </SwiperSlide>  
                        <SwiperSlide className='text-center'> 
                             <Image src={eventPoster4} alt="Event-Poster-1" className="poserImage" />    
                        </SwiperSlide>  
                        <SwiperSlide className='text-center'> 
                             <Image src={eventPoster5} alt="Event-Poster-1" className="poserImage" />    
                        </SwiperSlide>  
                            
                </Swiper>
            </Container>
    );
};

export default EventPoster;