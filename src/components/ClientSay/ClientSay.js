import "./ClientSay.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import clientImg from "../../assets/images/client-img.png"

export const ClientSay = () => {
    return <>
        <section className="client-say">
            <div className="container">
                <h2 className="client-say-title">
                    What our happy client say
                </h2>
                <p className="client-say-desc">
                    Several selected clients, who already believe in our service.
                </p>

                <div className="client-say-inner">
                    <div className="client-say-img-box">
                        <img className="client-say-card-img" src={clientImg} alt="Client image" />
                    </div>

                    <div className="client-say-card-box">
                        <Swiper
                            spaceBetween={30}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="client-say-card-textbox">
                                    <h3 className="client-say-card-title">
                                        Matthew Paul
                                    </h3>
                                    <p className="client-say-card-desc">
                                        Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="client-say-card-textbox">
                                    <h3 className="client-say-card-title">
                                        Matthew Paul
                                    </h3>
                                    <p className="client-say-card-desc">
                                        Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="client-say-card-textbox">
                                    <h3 className="client-say-card-title">
                                        Matthew Paul
                                    </h3>
                                    <p className="client-say-card-desc">
                                        Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="client-say-card-textbox">
                                    <h3 className="client-say-card-title">
                                        Matthew Paul
                                    </h3>
                                    <p className="client-say-card-desc">
                                        Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="client-say-card-textbox">
                                    <h3 className="client-say-card-title">
                                        Matthew Paul
                                    </h3>
                                    <p className="client-say-card-desc">
                                        Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    </>
}
