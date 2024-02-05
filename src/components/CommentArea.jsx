import { Component } from 'react'
import AddComment from './AddComment'
import { Trash, Plus, Dash } from 'react-bootstrap-icons'

class CommentArea extends Component {
  state = {
    comments: [],
    showAddComment: false,
  }

  fetchCall = () => {
    if (this.props.book) {
      fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' +
          this.props.book,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOTY3OTViMjYxNTAwMTk4YTY5MzkiLCJpYXQiOjE3MDY3OTI1NjksImV4cCI6MTcwODAwMjE2OX0.2Kcnmg6dO93u-YQ9-ga8gq5gU0Q-eegXZz0z_7tG1XU',
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('errore nella chiamata del server')
          }
        })
        .then((data) => {
          this.setState({ comments: data })
        })
        .catch((error) => console.error(error))
    }
  }

  componentDidMount() {
    this.fetchCall()
  }

  componentDidUpdate(prevProps) {
    if (this.props.book !== prevProps.book) {
      this.fetchCall()
    }
  }

  toggleAddComment = () => {
    this.setState({ showAddComment: !this.state.showAddComment })
  }

  render() {
    return (
      <>
        <hr />
        <div>
          <h2 className="text-light">Commenti</h2>
          <ol>
            {this.state.comments.map((comment) => (
              <li className="text-light" key={comment._id}>
                {comment.comment}{' '}
                <Trash
                  onClick={() => {
                    fetch(
                      'https://striveschool-api.herokuapp.com/api/comments/' +
                        comment._id,
                      {
                        method: 'DELETE',
                        headers: {
                          Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOTY3OTViMjYxNTAwMTk4YTY5MzkiLCJpYXQiOjE3MDY3OTI1NjksImV4cCI6MTcwODAwMjE2OX0.2Kcnmg6dO93u-YQ9-ga8gq5gU0Q-eegXZz0z_7tG1XU',
                        },
                      }
                    )
                      .then((response) => {
                        if (response.ok) {
                          alert('eliminato')
                        } else {
                          throw new Error('errore nella chiamata del server')
                        }
                      })
                      .catch((error) => console.error(error))
                  }}
                />
              </li>
            ))}
          </ol>
        </div>{' '}
        <hr />
        {this.state.showAddComment ? (
          <Dash
            className="text-danger border border-danger "
            onClick={this.toggleAddComment}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <Plus
            className="text-success border border-success"
            onClick={this.toggleAddComment}
            style={{ cursor: 'pointer' }}
          />
        )}
        {this.state.showAddComment && <AddComment idRec={this.props.book} />}
      </>
    )
  }
}

export default CommentArea
