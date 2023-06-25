import React, {Component}from 'react'
import "../styles/skillsmenu.css"
import classNames from 'classnames'
import skills from "./SkillsData"
import frontendIcon from "../assets/eagle-emblem.png"
import backendIcon from "../assets/hawk-emblem.png"


export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 1,   
  }
}
handleMenuItemClick = (menuItem) => {
  this.setState({
    activeItem: menuItem,
  });
};


renderContent = (skills) =>{
  return skills.map((skill,index)=>(
    <div key={index}
      className={`skill-sub-container-${this.state.activeItem}`}
    >
      <h3>{skill.title}</h3>
      <div className='level-container'>
      {[...Array(6)].map((_,i)=>(
        <div key={i} className={
          `level-point ${i<skill.level? 
            'filled': 'unfilled'}`}
        />
      ))}
      </div>
    </div>
  ));
}
  render() {
    const {activeItem} = this.state;
    const menuItems = ["FRONTEND","BACKEND"];

    const currentIcon = activeItem === 1 ? frontendIcon : backendIcon;
  
    return(
      <div className='skill-menu'>
        {menuItems.map((item,index)=>(
          <div
            key={index}
            className={classNames("skill-item",{activeSkills:activeItem === index+1})}
            onClick={()=>this.handleMenuItemClick(index + 1)}
          >
            <h2 className='skill-title'>{item}</h2>
          </div>
        ))}
        <img className='skill-icon' src={currentIcon} alt="current skill" />
        <div className='skill-sub-container'>
          {this.renderContent(skills[activeItem])}
        </div>
      </div>
    )
  }
}

