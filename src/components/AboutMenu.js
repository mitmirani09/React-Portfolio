import React, { Component } from 'react'
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import SubheadingsData from "./SubheadingsData";
import personalIcon from "../assets/moebius-triangle.png"
import educationIcon from "../assets/upgrade.png"
import careerIcon from "../assets/triple-corn.png"

export default class AboutMenu extends Component {


  constructor(props) {
    super(props);
    this.state = {
      activeItem: 1,
      activeSubheading: 1
    }
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeItem: menuItem,
      activeSubheading: 1
    });
  };

  handleSubheadingClick = (subheading) => {
    this.setState({
      activeSubheading: subheading
    });
  };
  render() {
    const {activeItem,activeSubheading} = this.state;
    const menuItems = ["PERSONAL","EDUCATION","CAREER"];
    const activeMenuTitle = menuItems[activeItem-1];
    const activeMenuIcon = 
      activeMenuTitle === "PERSONAL" 
      ? personalIcon
      : activeMenuTitle === "EDUCATION"
      ? educationIcon
      : careerIcon;
    
    const subheadings = SubheadingsData[activeItem];
    return (
      <>
        <div className='menu'>
          {menuItems.map((item,index) =>(
            <AboutMenuItem
              key={index}
              title={item}
              active={activeItem === index+1}
              onClick={() => this.handleMenuItemClick(index+1)}
            />
          ))}
        </div>
        <div className='sub-container'>
          <div className='icon-title-container'>
            <img className='icon' src={activeMenuIcon} alt={activeMenuTitle} />
            <h3>{activeMenuTitle}</h3>
          </div>
          {subheadings.map((subheading,index) =>(
            <AboutSubheading
              key={index}
              title={subheading.title}
              content={subheading.content}
              active={activeSubheading === index+1}
              onClick={() => this.handleSubheadingClick(index+1)}
              menuItem={activeItem}
            />
          ))}
        </div>
      </>
    )
  }
}
