// @flow
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link';
import { Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { JustifyCenterLayout } from '../public/components/layouts/justify-center-layout';
import { useState } from 'react';
import { registor } from '../public/services/auth.services';
import { useRouter } from 'next/router';

const MainPage: NextPage = () => {

  const [username, setUsrname] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const [error, setError] = useState('')
  const router = useRouter()

  const onSubmit = () => {
    if (!username) { setError('Please enter username!'); return; }
    if (!password) { setError('Please enter password!'); return; }
    if (!confirmPassword) { setError('Please enter confirm password!'); return; }
    if (confirmPassword !== password) { setError('Confirm password and password not matched!'); return; }
    if (!email) { setError('Please enter confirm email!'); return; }

    setError('');
    const obj = {username, password, firstName, lastName, email};
    var user = registor(obj);
    router.push('./add-friends');
  };

  return (
    <JustifyCenterLayout>
      <h5 className='pb-3'>Sign Up</h5>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" onChange={e => setUsrname(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" onChange={e => setFirstName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" onChange={e => setLastName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        {error && <Alert variant="danger" >{error}</Alert>}
        <Button onClick={e => onSubmit()}>{'Registor'}</Button>
      </Form>
    </JustifyCenterLayout>
  );
};

export default MainPage;
