import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import bookSellersIcon from '../../assets/images/logo.png'
import searchIcon from '../../assets/images/search.svg'
import {
  ActivedHomeIcon,
  HomeIcon,
  ActivedMessageIcon,
  MessageIcon,
  ActivedNewPostIcon,
  NewPostIcon,
  ActivedNotificationIcon,
  NotificationIcon,
} from '../../assets/svgs'
import ModifiedButton from '../ModifiedButton/ModifiedButton'

enum MenuItem {
  home = 'HOME',
  message = 'MESSAGE',
  post = 'POST',
  notification = 'NOTIFICATION',
  profile = 'PROFILE',
}

type SelectedMenuItem =
  | MenuItem.home
  | MenuItem.message
  | MenuItem.post
  | MenuItem.notification
  | MenuItem.profile

const Header: React.FC = () => {
  const [midInput, setMidInput] = useState<string>('')
  const [inputActive, setInputActive] = useState<boolean>(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState<SelectedMenuItem>(
    MenuItem.home
  )
  const inputElement = useRef<HTMLInputElement>(null)

  const handleMidInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMidInput(e.target.value)
  }

  const handleMidInputBlur = () => {
    setInputActive(false)
  }

  const handleMidOverlayClick = () => {
    setInputActive(true)

    if (inputElement.current != null) {
      inputElement.current.focus()
      inputElement.current.select()
    }
  }

  const handleRightItemClick = (item: SelectedMenuItem) => () => {
    setSelectedMenuItem(item)
  }

  return (
    <div className='header'>
      <div className='header__left'>
        <div className='left'>
          <img
            src={bookSellersIcon}
            alt='book sellers'
            className='left__logo'
          />
        </div>
      </div>
      <div className='header__mid'>
        <div className='mid'>
          <input
            type='text'
            className='mid__input'
            alt='Search'
            ref={inputElement}
            onBlur={handleMidInputBlur}
            onChange={handleMidInputChange}
            value={midInput}
          />
          {!inputActive && (
            <div className='mid__overlay' onClick={handleMidOverlayClick}>
              <img src={searchIcon} />
              <span>{midInput ? midInput : 'Search'}</span>
            </div>
          )}
        </div>
      </div>
      <div className='header__right'>
        <div className='right'>
          <Link to='/' className='right__item'>
            <ModifiedButton
              activeIcon={ActivedHomeIcon}
              disableIcon={HomeIcon}
              condition={selectedMenuItem === MenuItem.home}
              handleClick={handleRightItemClick(MenuItem.home)}
            />
          </Link>
          <Link to='/test' className='right__item'>
            <ModifiedButton
              activeIcon={ActivedMessageIcon}
              disableIcon={MessageIcon}
              condition={selectedMenuItem === MenuItem.message}
              handleClick={handleRightItemClick(MenuItem.message)}
            />
          </Link>
          <ModifiedButton
            activeIcon={ActivedNewPostIcon}
            disableIcon={NewPostIcon}
            condition={selectedMenuItem === MenuItem.post}
            handleClick={handleRightItemClick(MenuItem.post)}
            className='right__item'
          />
          <ModifiedButton
            activeIcon={ActivedNotificationIcon}
            disableIcon={NotificationIcon}
            condition={selectedMenuItem === MenuItem.notification}
            handleClick={handleRightItemClick(MenuItem.notification)}
            className='right__item'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
