import React from 'react'
import {useScrollTrigger, Slide, AppBar, Toolbar, Typography} from '@material-ui/core'

const HideOnScroll = (props) => {
  const { children, window } = props;
  
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Header = () => {
  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar>
          <Typography>
            This is a app bar
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Header