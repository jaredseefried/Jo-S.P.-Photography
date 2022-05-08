import React from 'react'
import './Portfolio.css'
import theImage from '../images/josp-photography-2.jpeg'
import MyCard from '../components/MyCard'

const portfolioArray = [
  {
    id: 1,
    src: theImage,
    title: 'Family Photos',
    text: 'This is a description for the site vali vorum whatever i dont really care all im trying to do is show some text and see what it looks like. '
  },
  {
    id: 2,
    src: theImage,
    title: 'Events',
    text: 'This is a description for the site vali vorum whatever i dont really care all im trying to do is show some text and see what it looks like. '
  },
  {
    id: 3,
    src: theImage,
    title: 'Fine Art',
    text: 'This is a description for the site vali vorum whatever i dont really care all im trying to do is show some text and see what it looks like. '
  },
  {
    id: 4,
    src: theImage,
    title: 'Headshots',
    text: 'This is a description for the site vali vorum whatever i dont really care all im trying to do is show some text and see what it looks like. '
  },
  {
    id: 5,
    src: theImage,
    title: 'Lifestyle',
    text: 'This is a description for the site vali vorum whatever i dont really care all im trying to do is show some text and see what it looks like. '
  },
]

function Portfolio() {

  return (
    <div className="portfolio-container container-fluid">
      <div className="row">
        {portfolioArray.map((item, i) => (
          <MyCard
            {...portfolioArray}
            key={i}
            src={item.src}
            alt={item.alt}
            id={item.id}
            text={item.text}
            title={item.title}
            className={item.className}
          />
        ))}

      </div>
    </div>
  )
}

export default Portfolio