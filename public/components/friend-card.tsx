import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import { Button, Col, Figure, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHeart } from '@fortawesome/free-solid-svg-icons';
import userStore from '../../public/stores/user';

export const FriendCard: FunctionComponent<any> = ({ friend, setActiveIndexFriend, activeIndexFriend }) => {

    const { likeFriend, passFriend, like } = userStore((state) => state)
    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();

    const onPassFriend = () => {
        passFriend(friend)
        swiper.slideNext();
        setActiveIndexFriend(activeIndexFriend + 1)
    };

    const onLikeFriend = () => {
        likeFriend(friend)
        swiper.slideNext();
        setActiveIndexFriend(activeIndexFriend + 1)
    };
    
    return (
        <>
            <Image style={{height: 600, verticalAlign: 'center'}} alt={friend.id} src={friend.picture} />
            <Figure.Caption>
                {`${friend.firstName} ${friend.lastName}`}

                <Row>
                    <Col xs={6}>
                        <Button size="sm" variant='link' className='me-2 w-100 text-center' onClick={onPassFriend}>
                            <FontAwesomeIcon icon={faXmark} color='danger' size="lg" className='me-2' />
                        </Button>
                    </Col>
                    <Col xs={6}>
                        <Button size="sm" variant='link' className='me-2 w-100 text-center' onClick={onLikeFriend}>
                            <FontAwesomeIcon icon={faHeart} color='green' size="lg" className='me-2' />
                        </Button>
                    </Col>
                </Row>
            </Figure.Caption>
        </>
    );
}
