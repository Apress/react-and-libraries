// src/layout/Header/Header.tsx

import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import './Header.scss'
import 'fontsource-open-sans'

// router
import { Link } from 'react-router-dom'
import HeaderDrawer from './HeaderDrawer'
import HeaderTopNav from './HeaderTopNav'

export default class Header extends React.PureComponent<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Toolbar>
        <div style={{ width: '100%' }}>
          <Box display="flex" p={1}>
            <Box p={1} flexGrow={1}>
              <Button component={Link} to="/">
                ELI ELAD ELROM
              </Button>
            </Box>
            <Box p={1}>{this.props.smallBreakPoint ? <nav /> : <HeaderTopNav />}</Box>
            <Box p={1}>
              <div
                style={{
                  position: 'absolute',
                  right: '0.5rem',
                }}
              >
                <HeaderDrawer />
              </div>
            </Box>
          </Box>
        </div>
      </Toolbar>
    )
  }
}

interface IHeaderProps {
  smallBreakPoint: boolean
}

interface IHeaderState {
  // TODO
}
