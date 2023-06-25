import React, { Component } from 'react'
import Avatar from '../components/Avatar';
import AboutMenu from '../components/AboutMenu';
export default class About extends Component {
  render() {
    return (
      <>
        <Avatar page="about"/>
        <AboutMenu/>
      </>
    )
  }
}
