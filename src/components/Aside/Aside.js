import React from 'react';
import {FaChartPie, FaGalacticRepublic} from 'react-icons/fa';
import {IoIosCopy, IoIosKeypad, IoMdDesktop} from "react-icons/io";
import {FiMenu} from 'react-icons/fi';
import DropDownItem from "./DropDownItem/DropDownItem";
import IconMenu from "./IconMenu/IconMenu";

import css from './Aside.module.css'

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  };

  menuButton = (e) => {
    e.preventDefault();
    this.setState({
      visible: !this.state.visible
    })
  };

  render() {
    return (
      <>
        {this.state.visible ?
          <nav className={css.app_aside}>
            <div className={css.app_header}>
              <span className={css.site_name}>AdminLTE</span>
              <button className={css.menu_btn}>
                <FiMenu onClick={this.menuButton}/>
              </button>
            </div>
            <DropDownItem
              icon={<FaGalacticRepublic/>}
              title={'Dashboard'}
              firstLink={'/rest_countries'}
              secondLink={'/youtube_api'}
              firstLi={'REST Countries'}
              secondLi={'YouTube API'}
            />
            <DropDownItem
              icon={<IoIosCopy/>}
              title={'Layout Options'}
              firstLink={'/c_link'}
              secondLink={'/d_link'}
              firstLi={'c'}
              secondLi={'d'}
            />
            <DropDownItem
              icon={<IoIosKeypad/>}
              title={'Widgets'}
              firstLink={'/widgets'}
              secondLink={'/d_link'}
              firstLi={'e'}
              secondLi={'f'}
            />
            <DropDownItem
              icon={<FaChartPie/>}
              title={'Charts'}
              firstLink={'/charts'}
              secondLink={'/d_link'}
              firstLi={'g'}
              secondLi={'h'}
            />
            <DropDownItem
              icon={<IoMdDesktop/>}
              title={'UI Elements'}
              firstLink={'/ui_elements'}
              secondLink={'/d_link'}
              firstLi={'i'}
              secondLi={'k'}
            />
          </nav> :
          <nav className={css.icon_aside}>
            <div className={css.app_header}>
              <button className={css.menu_btn}>
                <FiMenu onClick={this.menuButton}/>
              </button>
            </div>
              <IconMenu icon={<FaGalacticRepublic/>}/>
              <IconMenu icon={<IoIosCopy/>}/>
              <IconMenu icon={<IoIosKeypad/>}/>
              <IconMenu icon={<FaChartPie/>}/>
              <IconMenu icon={<IoMdDesktop/>}/>
          </nav>
        }
      </>
    )
  }
}

export default Aside;
