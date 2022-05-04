// @flow
import { ReactNode, FunctionComponent } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const JustifyCenterLayout: FunctionComponent<any> = ({ children, className }) => {
  return (
    <Container className="bg-white h-100 py-5">
      <Row className="h-100 align-items-center justify-content-center">
        <Col sm={8} md={6} lg={5} className={className}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};
