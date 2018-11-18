import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import image from '../hinton.jpeg'

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}>
          <p>According to Wikipedia:</p>
          <em>An anecdote is a brief, revealing account of an individual person or an incident.
            Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
            such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
            An anecdote is &quot;a story with a point.&quot;</em>
        </Col>
        <Col xs={6} md={4}>
          <img src={image} alt='Geoffrey Hinton' width='250px'/>
        </Col>
      </Row>
    </Grid>
    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

export default About