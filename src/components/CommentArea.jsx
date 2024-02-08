import { useState, useEffect } from 'react'
import AddComment from './AddComment'
import { Trash, Plus, Dash } from 'react-bootstrap-icons'

function CommentArea(props) {
  const [comments, setComments] = useState([])
  const [showAddComment, setShowAddComment] = useState(false)

  const fetchCall = () => {
    if (props.book) {
      fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + props.book,
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
          setComments(data)
        })
        .catch((error) => console.error(error))
    }
  }

  useEffect(() => {
    fetchCall()
  }, [props.book])

  const toggleAddComment = () => {
    setShowAddComment(!showAddComment)
  }

  return (
    <>
      <hr />
      <div>
        <h2 className="text-light">Commenti</h2>
        <ol>
          {comments.map((comment, index) => (
            <li data-testid="comment" className="text-light" key={index}>
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
                        setComments(
                          comments.filter(
                            (commenti) => commenti._id !== comment._id
                          )
                        )
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
      {showAddComment ? (
        <Dash
          className="text-danger border border-danger "
          onClick={toggleAddComment}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <Plus
          className="text-success border border-success"
          onClick={toggleAddComment}
          style={{ cursor: 'pointer' }}
        />
      )}
      {showAddComment && (
        <AddComment idRec={props.book} setComments={setComments} />
      )}
    </>
  )
}

export default CommentArea
