import React from 'react'
import { CardOne } from '../../../components/cards/Card'

const DemoCards = () => {
    let data = [
        {
          image: <svg xmlns="http://www.w3.org/2000/svg" width="44" height="38" viewBox="0 0 44 38" fill="none">  
                 <path fillRule="evenodd" clipRule="evenodd" d="M10 29.828L0.586002 20.414C-0.194998 19.633 -0.194998 18.367 0.586002 17.586L10 8.172L12.829 11L4.829 19L12.829 27L10 29.828Z" fill="#68D585"/>
                 <path fillRule="evenodd" clipRule="evenodd" d="M34 29.828L31.171 27L39.171 19L31.171 11L34 8.172L43.414 17.586C44.195 18.367 44.195 19.633 43.414 20.414L34 29.828Z" fill="#68D585"/>
                 <rect x="15.5719" y="36.4553" width="36.985" height="3.99999" transform="rotate(-75.954 15.5719 36.4553)" fill="#D5D7DD"/>
                </svg>,
          title: "Project management",
          description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
    
        },
    
        {
          image: <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                 <path d="M18.5 0C18.0174 0 17.6957 0.321739 17.6957 0.804348V5.63043C17.6957 6.11304 18.0174 6.43478 18.5 6.43478C18.9826 6.43478 19.3043 6.11304 19.3043 5.63043V1.6087C28.2326 2.01087 35.3913 9.41087 35.3913 18.5C35.3913 27.8304 27.8304 35.3913 18.5 35.3913C9.16957 35.3913 1.6087 27.8304 1.6087 18.5C1.6087 18.0174 1.28696 17.6957 0.804348 17.6957C0.321739 17.6957 0 18.0174 0 18.5C0 28.7152 8.28478 37 18.5 37C28.7152 37 37 28.7152 37 18.5C37 8.28478 28.7152 0 18.5 0Z" fill="#D5D7DD"/>
                 <path d="M15.2525 20.8052C15.9733 21.5221 17.0144 22 18.0556 22C19.0968 22 20.1379 21.6017 20.8587 20.8052C22.3804 19.2918 22.3804 16.7428 20.8587 15.1497C19.5773 13.8753 9.40593 7.82153 8.20459 7.10464C7.88423 6.94533 7.48378 6.94533 7.24351 7.26395C7.00325 7.50291 6.92316 7.90119 7.08333 8.2198C7.88423 9.41462 13.971 19.5307 15.2525 20.8052Z" fill="#68D585"/>
                 </svg>,
          title: "Time tracking",
          description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
    
        },
    
        {
          image: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="38" viewBox="0 0 26 38" fill="none">
                 <path fillRule="evenodd" clipRule="evenodd" d="M21.9375 0H4.0625C1.81996 0.00273114 0.00268622 1.85039 0 4.13043V33.8696C0.00268622 36.1496 1.81996 37.9973 4.0625 38H21.9375C24.18 37.9973 25.9973 36.1496 26 33.8696V4.13043C25.9973 1.85039 24.18 0.00273114 21.9375 0ZM24.375 31.3913C24.375 31.8475 24.0112 32.2174 23.5625 32.2174H2.4375C1.98877 32.2174 1.625 31.8475 1.625 31.3913V4.95652C1.625 4.50029 1.98877 4.13043 2.4375 4.13043H23.5625C24.0112 4.13043 24.375 4.50029 24.375 4.95652V31.3913Z" fill="#68D585"/>
                 </svg>,
          title: "Beautiful mobile app",
          description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
    
        }
      ]
  return (
    <div className="container">
        <div className="col-12">
                <div className="row">
                {data?.map((item, index) => <CardOne key={index} logo={item.image} title={item.title} description={item.description} />)}
                </div> 
        </div>
    </div>
  )
}

export default DemoCards
