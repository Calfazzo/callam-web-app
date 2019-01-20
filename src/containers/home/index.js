import * as React from 'react'
import { Grid, Row, Col, Label } from 'react-bootstrap'
import Experience from '../../components/Experience/Experience'
import Header from '../../components/Header/Header'

const content = require('../../static/fixtures/content.json')

class Home extends React.Component {
  render () {
    return (
      <div className='App'>
        
              <Header/>
              <Grid>
          <div className='main-content'>
            <Row className='center'>
              <Col><h1>Callam Farrell</h1></Col>
            </Row>
            <Row className='center'>
              <Col>
                <a href='https://github.com/Calfazzo' className='pad-right-15'>
                  <i className='fa fa-github pad-right-5' aria-hidden='true' />@Calfazzo
                </a>
                <a href='https://www.linkedin.com/in/callam-farrell-95590a11a/' className='pad-right-15'>
                  <i className='fa fa-linkedin-square pad-right-5' aria-hidden='true' />@CallamFarrell
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className='summary'>{content.summary}</p>
              </Col>
            </Row>
            <Row className='center'>
              <Col>
                <p>
                  {content.primarySkills.map(skill => <span><Label bsStyle='primary'>{skill}</Label>{' '}</span>)}
                  {content.secondarySkills.map(skill => <span><Label>{skill}</Label>{' '}</span>)}
                </p>
              </Col>
            </Row>

            <Row>
              <Col>
                <h2 className='section-heading'>Experience</h2>
              </Col>
            </Row>

            {content.experiences.map(experience => <Experience title={experience.title} dates={experience.dates} bullets={experience.bullets} />)}

          </div>

        </Grid>
      </div>
    )
  }
}

export default Home
