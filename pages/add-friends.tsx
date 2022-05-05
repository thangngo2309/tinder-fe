// @flow
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link';
import { Alert, Button, Col, Figure, Form, Row, Tab, Tabs } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { JustifyCenterLayout } from '../public/components/layouts/justify-center-layout';
import { SwiperFriend } from '../public/components/swiper';
import { useState, useEffect } from 'react';
import { registor } from '../public/services/auth.services';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { getFriends } from '../public/services/users.service';
import { LikeList } from '../public/components/like-list';

const MainPage: NextPage = () => {

    const [friends, setFriends] = useState([])
    const [pageIndex, setPageIndex] = useState(0)
    const [activeIndexFriend, setActiveIndexFriend] = useState(0)
    
    const router = useRouter()
    const [key, setKey] = useState('discover');

    useEffect(() => {
        getFriends(pageIndex).then(res => {
            setFriends([...friends, ...res.data.data])
        })
    }, [pageIndex]);

    useEffect(() => {
        if(activeIndexFriend > 0 && activeIndexFriend % 10 == 9)
        setPageIndex(pageIndex + 1)
    }, [activeIndexFriend]);

    return (
        <JustifyCenterLayout>
            <div className='w-100'>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="liked" title="Liked">
                        <LikeList />
                    </Tab>
                    <Tab eventKey="discover" title="Discover">
                        <Figure>
                            {(friends && friends.length > 0) && <SwiperFriend friends={friends} 
                                                                    setActiveIndexFriend={setActiveIndexFriend} 
                                                                    activeIndexFriend={activeIndexFriend} />}
                        </Figure>
                    </Tab>
                </Tabs>
            </div>
        </JustifyCenterLayout>
    );
};

export default MainPage;
