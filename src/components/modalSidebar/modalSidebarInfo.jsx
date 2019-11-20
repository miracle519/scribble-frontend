//@flow

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from '../common/buttonComponent/ButtonComponent'
import './styles.scss'
import { KEY_IMG, PHONE_IMG } from 'common/images'

type SocialAppType = { socialName: string, className: string }

type Props = {
  specifications: Object,
  menuDetails: Array<string>,

  socialApp: Array<SocialAppType>,
  parentCallback: (data: number) => any,
  login?: Boolean,
  deviceImage: string,
  onhandleShow: (index: number) => any
}

const ModalSideBarInfo = (props: Props) => {
  const { socialApp } = props;

  const [login, setLogin] = useState(true);

  const [activeIcon, setActiveIcon] = useState(0)


  const loginAction = event => {
    setLogin(true)
  }

  const sideNavClick = i => {
    setActiveIcon(i)
    props.parentCallback(i)
  }

  //NEW
  const { specifications, menuDetails } = props;

  const deviceImage = props.deviceImage || PHONE_IMG;
  const specificationsList = Object.keys(specifications).length ? Object.keys(specifications) : [];

  const [activeSpecification, setActiveSpecification] = useState(null);
  useEffect(() => {
    if (specificationsList.length > 0 && !activeSpecification) {
      setActiveSpecification(specificationsList[0]);
    }
  }, [specificationsList.length]);

  const handleSpecificationClick = item => {
    const object = document.getElementById(`content${item}`);
    object.scrollIntoView({ block: 'start', behavior: 'smooth' });
    setActiveSpecification(item);
  }

  return (
    <div className="iphn-lft">
      <div className="iphn-img">
        <img src={deviceImage} className="image-style" alt="" />
      </div>

      <div className="key_part">
        <img src={KEY_IMG} />
        <b className="aspect">key Aspects</b>
      </div>

      <ul className="iphn-spec">
        {
          specificationsList.map(item => {
            return (
              <li
                key={item}
                id={`menu${item}`}
                className={`paneindex ${activeSpecification === item ? 'active' : ''}`}
                onClick={handleSpecificationClick.bind({}, item)}>
                <a herf="#">{item}</a>
              </li>
            )
          })
        }
      </ul>

      <ul className="iphn-spec1">
        {
          menuDetails &&
          menuDetails.map((menu, index) => {
            return (
              <li className={index === 0 ? 'active' : ''} key={index}>
                <Link to="#">{menu}</Link>
              </li>
            )
          })
        }
      </ul>

      <div className="view_part">
        <b>View Original</b>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="own_radio"><input type="radio" id="test1" name="radio-group" /><label htmlFor="test1">I Own This Device</label></div>

      {
        !login && (
          <ul className="social_icons">
            {socialApp.map((item, i) => {
              return (
                <li className={item.socialName} key={i}>
                  <img src={item.className} alt="" />
                  {/* {item.socialName !== 'specs' && (
                  <img className="lock-icon" src={LOCK_ICON} alt="" />
                )} */}
                  {item.socialName !== 'specs' && (
                    <div className="social_tooltip">
                      <p>
                        This feature is available for TechSpecs users only.
                        SIgn-up for free or login to your account to gain access
                        'TechSpecs Blocks.'
                    </p>
                      <Link to="/signup">
                        <ButtonComponent
                          children="Sign Up"
                          className="btn tooltip-btn"
                          onClick={() => { }}
                        />
                      </Link>
                      <ButtonComponent
                        children="Login"
                        className="btn tooltip-btn login-btn"
                        onClick={loginAction}
                      />
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        )
      }
      {
        (
          <ul className="social_login_icons">
            {socialApp.map((item, i) => {
              return (
                <li
                  className={activeIcon === i ? 'active' : ''}
                  key={i}
                  onClick={event => sideNavClick(i)}
                >
                  <img src={item.className} alt="" />
                </li>
              )
            })}
          </ul>
        )
      }
    </div >
  )
}

export default ModalSideBarInfo
