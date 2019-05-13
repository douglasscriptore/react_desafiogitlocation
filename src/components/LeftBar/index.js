import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import { Content, Container, Avatar, Actions } from './style.js'
import { DeleteForever, ChevronRight } from '@material-ui/icons'

const LeftBar = ({ handleDelete, handleGoGit, data }) => (
  <Container>
    <Content>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <Avatar src={user.avatar_url} alt={user.login} />
            <div>
              <strong>{user.name}</strong>
              <p>{user.login}</p>
            </div>
            <Actions>
              <IconButton onClick={() => handleDelete(user)}>
                <DeleteForever />
              </IconButton>
              <IconButton onClick={() => handleGoGit(user.html_url)}>
                <ChevronRight />
              </IconButton>
            </Actions>
          </li>
        ))}
      </ul>
    </Content>
  </Container>
)

LeftBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      login: PropTypes.string,
      name: PropTypes.string,
      avatar_url: PropTypes.string,
      html_url: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number
    }).isRequired
  ),
  handleDelete: PropTypes.func.isRequired,
  handleGoGit: PropTypes.func.isRequired
}

export default LeftBar
