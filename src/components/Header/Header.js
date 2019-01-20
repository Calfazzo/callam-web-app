import * as React from 'react'
import { Image } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group';
import { Grid, Row, Col, Label } from 'react-bootstrap'

import './Header.css'
const headshot = require('../../static/images/headshot.jpg')

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { shrink: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    this.setState({
      shrink: scrollTop > 100 ? true : false
    });
  }

  render () {
    return (
      <div className='App-header'>
      <CSSTransition
        in={this.state.shrink}
          timeout={100}
          classNames="square"
        >
      <div className={'square'}><Image src={headshot} className={'headshot'} /></div>

              

      </CSSTransition>
      <CSSTransition
        in={this.state.shrink}
          timeout={100}
          classNames="info"
          unmountOnExit
        >
        <div className={'info'}>
        <h3 className={'name'}>Callam Farrell</h3>
        <a href='https://github.com/Calfazzo' className='pad-right-15'>
          <i className='fa fa-github pad-right-5' aria-hidden='true' />@Calfazzo
        </a>
        <a href='https://www.linkedin.com/in/callam-farrell-95590a11a/' className='pad-right-15'>
          <i className='fa fa-linkedin-square pad-right-5' aria-hidden='true' />@CallamFarrell
        </a>
        </div>
      </CSSTransition>
      </div>
    )
  }
}
