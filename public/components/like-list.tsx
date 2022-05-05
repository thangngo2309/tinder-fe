import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCreative } from "swiper";
import { Button, Col, Figure, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHeart } from '@fortawesome/free-solid-svg-icons';
import userStore from '../../public/stores/user';

export const LikeList: FunctionComponent<any> = () => {

    const { like } = userStore((state) => state)

    return (
        <>
            <Row>
                {like?.map((l) => (
                    <Col xs={6} key={l.id} className="d-flex overflow-hidden">
                        <Figure>
                            <Image className="justify-content-center" style={{ height: 300, verticalAlign: 'center' }} alt={l.id} src={l.picture} />
                            <Figure.Caption>
                                {`${l.firstName} ${l.lastName}`}
                            </Figure.Caption>
                        </Figure>
                    </Col>
                ))}
            </Row>
        </>
    );
}
