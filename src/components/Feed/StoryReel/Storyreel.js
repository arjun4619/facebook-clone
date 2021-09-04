import React from 'react';
import Story from './Story/Story';
import './storyreel.css'

function Storyreel() {
    return (
        <div className='storyreel'>
            <Story profileSrc='https://i.pinimg.com/736x/b6/6f/d6/b66fd650061c17738e9fb6f4ad2a9cb9--rimless-glasses-indian.jpg' 
            title='Mr Swagger' 
            image='https://qph.fs.quoracdn.net/main-qimg-a6532d1dbfa0816c2bda7d585b580d1a.webp'/>
            <Story profileSrc='https://global-uploads.webflow.com/5dfd5aca7badfa129f80056c/5f865942ea0b99788774c636_ElonMuskRecommendedBooks.jpeg' 
            title='Elon Musk' 
            image='https://static01.nyt.com/images/2021/01/30/business/29musk-print/29musk-1-mediumSquareAt3X.jpg'/>
            <Story profileSrc='https://www.cbj.ca/wp-content/uploads/2018/03/Mark-Zuckerberg-headshot.jpg' 
            title='Mark Zukerberg' 
            image='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ea9cbf8165a170006a5facc%2FMark-Zuckerberg-and-Priscilla-Chan-%2F960x0.jpg%3Ffit%3Dscale'/>
            <Story profileSrc='https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg' 
            title='Jeff Bezos' 
            image='https://media.npr.org/assets/img/2021/07/20/blue-origin-astronaut-crew-flight-suits_custom-6b32401a156fb6951e317e5376075a5072e92d1d.jpeg'/>
            <Story profileSrc='https://speaking.com/wp-content/uploads/2018/05/mark-cuban-listo.jpg' 
            title='Mark Cuban' 
            image='https://www.cheatsheet.com/wp-content/uploads/2020/09/Mark-Cuban-of-Shark-Tank-1.jpg'/>
        </div>
    )
}

export default Storyreel;
