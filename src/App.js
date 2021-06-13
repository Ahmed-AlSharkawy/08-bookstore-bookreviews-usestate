import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'
// import data from './data';
import booksList from './booksList'

function App() {
  const [index, setIndex] = useState(0)
  const [book, setBook] = useState(booksList[index])
  const [readAll, setReadAll] = useState(false)

  useEffect(() => {
    setBook(booksList[index])

    const tik = setInterval(() => {
      if (index < booksList.length - 1) setIndex(index + 1)
      else setIndex(0)
    }, 3000)
    return () => clearInterval(tik)
  }, [index])

  const { img, title, author, info } = book
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span style={{ fontSize: '110%', marginLeft: '0.5rem' }}>\</span>{' '}
          مراجعات الكتب
        </h2>
        <div className='underline'></div>
      </div>
      <div className='section-center'>
        <article>
          <img src={img} alt={title} className='person-img' />
          <h4>{title}</h4>
          <p className='title'>{author}</p>
          <p className='text'>
            {readAll ? info : `${info.substring(0, 250)}...`}
            <button className='readmore' onClick={() => setReadAll(!readAll)}>
              &nbsp;
              {readAll ? 'فقرة أصغر' : 'فقرة كاملة'}
            </button>
          </p>
          <FaQuoteLeft className='icon' />
        </article>
        <button
          className='prev'
          onClick={() => {
            if (index < booksList.length - 1) setIndex(index + 1)
            else setIndex(0)
            // if (index < booksList.length - 1) setBook(booksList[index + 1])
            // else setBook(booksList[0])
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className='next'
          onClick={() => {
            if (index > 0) setIndex(index - 1)
            else setIndex(booksList.length - 1)
            // if (index > 0) setBook(booksList[index - 1])
            // else setBook(booksList[booksList.length - 1])
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
