import React, { Component } from 'react'
import Avatar from '../components/Avatar';
import SkillsMenu from '../components/SkillsMenu';
export default class About extends Component {
  render() {
    return (
      <>
        <Avatar page="skills"/>
        <SkillsMenu/>
      </>
    )
  }
}
