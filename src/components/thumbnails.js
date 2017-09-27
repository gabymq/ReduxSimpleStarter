import React from 'react';
import {
    Button, Grid, Col, Row, thumbnail
} from 'react-bootstrap';

const Thumbnails = (props) => {
    const thumbs = props.images.map((image, i) =>
        <Col xs={6} md={4} key={i}>
            <Thumbnail src={image} alt="242x200">
                <h3 style={{overflow: 'hidden'}}>{image}</h3>
                <p>Description</p>
                <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                </p>
            </Thumbnail>
        </Col>

);

return <Grid>
    {thumbs}
</Grid>
};

export default Thumbnails;