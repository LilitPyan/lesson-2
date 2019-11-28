import React from 'react';
import {NavLink} from 'react-router-dom';
import {IoIosArrowBack, IoIosArrowDown} from "react-icons/io";

import css from './DropDownItem.module.css'

class DropDownItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayMenu: false};
  };

  showDropdownMenu = (e) => {
    e.preventDefault();
    this.setState(previous => ({displayMenu: !previous.displayMenu}));
  };

  hideDropdownMenu = () => {
    this.setState({displayMenu: false});
  };

  render() {
    const {displayMenu} = this.state;

    return (
      <div className={css.aside_container}>
        <div className={css.container}>
          <div className={css.aside_container_link}>
            <p className={css.aside_container_icon}>
              {this.props.icon}
            </p>
            <p className={css.aside_container_title}>
              {this.props.title}
            </p>
            <div className={css.aside_container_btn}>
              {displayMenu ?
                <IoIosArrowBack onClick={this.hideDropdownMenu}/> :
                <IoIosArrowDown onClick={this.showDropdownMenu}/>
              }
            </div>
          </div>
        </div>
        {displayMenu ? (
          <ul className={css.dropItems}>
            <div className={css.ul_li}>
              <NavLink to={this.props.firstLink} className={css.li_link}>
                <li>
                  {this.props.firstLi}
                </li>
              </NavLink>
            </div>
            <div className={css.ul_li}>
              <NavLink to={this.props.secondLink} className={css.li_link}>
                <li>
                  {this.props.secondLi}
                </li>
              </NavLink>
            </div>
          </ul>
        ) : null}
      </div>
    )
  }
}

export default DropDownItem;
