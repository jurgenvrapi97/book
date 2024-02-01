import { Component } from 'react'
import AddComment from './AddComment'
import { Trash } from 'react-bootstrap-icons'

class CommentArea extends Component {
  state = {
    comments: [],
  }

  fetchCall = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' +
        this.props.bookId,
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

  componentDidMount() {
    this.fetchCall()
  }

  render() {
    return (
      <>
        <hr />
        <div>
          <h2>Commenti</h2>
          <ol>
            {this.state.comments.map((comment) => (
              <li key={comment._id}>
                {comment.comment}{' '}
                <Trash
                  onClick={() => {
                    console.log(this.props.bookId)
                    fetch(
                      'https://striveschool-api.herokuapp.com/api/comments/' +
                        this.props.bookId,
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
        <AddComment idRec={this.props.bookId} />
      </>
    )
  }
}

export default CommentArea
