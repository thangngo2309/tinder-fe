// @flow
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link';
import { Alert, Button, Col, Figure, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { JustifyCenterLayout } from '../public/components/layouts/justify-center-layout';
import { useState } from 'react';
import { registor } from '../public/services/auth.services';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';

const MainPage: NextPage = () => {

    const [username, setUsrname] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [error, setError] = useState('')
    const router = useRouter()

    const pass = () => {
    };

    const like = () => {
    };

    return (
        <JustifyCenterLayout>
            <div className='w-100'>
                <Figure>
                    <Figure.Image
                        width={'100%'}
                        height={700}
                        src="https://fakeimg.pl/250x500/"
                    />
                    <Figure.Caption>
                        <Row>
                            <Col xs={6}>
                                <Button size="sm" variant='link' className='me-2 w-100 text-center' onClick={pass}>
                                    <FontAwesomeIcon icon={faXmark} color='danger' size="lg" className='me-2' />
                                </Button>
                            </Col>
                            <Col xs={6}>
                                <Button size="sm" variant='link' className='me-2 w-100 text-center' onClick={like}>
                                    <FontAwesomeIcon icon={faHeart} color='green' size="lg" className='me-2' />
                                </Button>
                            </Col>
                        </Row>
                    </Figure.Caption>
                </Figure>
            </div>
        </JustifyCenterLayout>
    );
};

export default MainPage;
