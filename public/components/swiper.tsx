import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import { FriendCard } from "./friend-card";

export const SwiperFriend: FunctionComponent<any> = ({ friends, setActiveIndexFriend, activeIndexFriend }) => {
    return (
        <>
            <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper"
                allowTouchMove={false}
            >
                { friends?.map((f) => <SwiperSlide key={f.id}>
                                        <FriendCard friend={f} 
                                        setActiveIndexFriend={setActiveIndexFriend}
                                        activeIndexFriend={activeIndexFriend}/>
                                    </SwiperSlide>) }
                
            </Swiper>
        </>
    );
}
