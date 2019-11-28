import React from 'react';
import css from './IconMenu.module.css'

class IconMenu extends React.Component {

  render() {
    return (
      <div className = {css.icon_container}>
          {this.props.icon}
      </div>
    )
  }
}

export default IconMenu;
