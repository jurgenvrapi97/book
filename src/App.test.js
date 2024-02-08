/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('find alert', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('should find the alert', () => {
    const alert = screen.getByText(/Benvenuti /i)
    expect(alert).toBeInTheDocument()
  })
})

describe('find text', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('should find the subtitle', () => {
    const section = screen.getAllByText(/prezzo/i)
    expect(section).toHaveLength(20)

    const nextPage = screen.getByTestId('next')
    fireEvent.click(nextPage)
    expect(section).toHaveLength(20)
  })
})

describe('check border color', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('border change', () => {
    const book = screen.getAllByTestId('_img')
    fireEvent.click(book[0])
    const card = screen.getAllByTestId('book-img')
    expect(card[0]).toHaveClass('border-danger')
    fireEvent.click(book[1])
    expect(card[0]).not.toHaveClass('border-danger')
  })
})

describe('check comments', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('view comments', () => {
    const comment = screen.queryByTestId('comment')
    expect(comment).not.toBeInTheDocument()
  })
  it('view all comments', async () => {
    const book = screen.getAllByTestId('_img')
    fireEvent.click(book[0])
    const allcomments = await screen.findAllByTestId('comment')
    expect(allcomments).not.toHaveLength(0)
  })
})

// describe('find commetn area', () => {
//   beforeEach(() => {
//     render(<App />)
//   })

//   it('should find comment area', () => {
//     const comment = screen.getByText(/Commenti/i)
//     expect(comment).not.toBeInTheDocument()
//   })
// })
