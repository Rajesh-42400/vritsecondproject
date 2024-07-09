import React from 'react'
import { PriceCard } from '../../../components/cards/Card'

const Price = () => {
  let priceData = [
    {
        logo: <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" class="me-3">
                  <circle cx="14.5" cy="14.5" r="14.5" fill="#68D585"/>
                  <path d="M13.297 16.9991V16.5492C13.2765 15.9989 13.3843 15.4511 13.6127 14.945C13.9052 14.4307 14.305 13.9784 14.7877 13.6159C15.3551 13.2021 15.8609 12.7172 16.2913 12.1745C16.5074 11.8209 16.6152 11.417 16.6026 11.0083C16.6332 10.5102 16.4215 10.0263 16.0283 9.69573C15.5529 9.35944 14.9669 9.19535 14.3756 9.23297C13.9206 9.23225 13.4672 9.28401 13.0252 9.38713C12.5022 9.52118 11.9965 9.70986 11.5172 9.94972L11 8.82483C12.0658 8.28408 13.2552 8.00082 14.4633 8C15.5806 8 16.4486 8.2611 17.0671 8.7833C17.7065 9.3516 18.0466 10.161 17.9948 10.9916C18.0018 11.3551 17.944 11.7172 17.824 12.0624C17.706 12.3777 17.5358 12.673 17.32 12.9373C16.8805 13.4172 16.4 13.8618 15.8834 14.2664C15.429 14.6019 15.0339 15.0044 14.7132 15.4584C14.5052 15.8503 14.407 16.2865 14.4283 16.725V17L13.297 16.9991Z" fill="white"/>
                  <circle cx="14" cy="20" r="1" fill="white"/>
                </svg>,
        title: "Can I use Albino for my clients?",
        description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
        button: "Click to learn more"    
    },
    {
        logo: <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" class="me-3">
                  <circle cx="14.5" cy="14.5" r="14.5" fill="#68D585"/>
                  <path d="M13.297 16.9991V16.5492C13.2765 15.9989 13.3843 15.4511 13.6127 14.945C13.9052 14.4307 14.305 13.9784 14.7877 13.6159C15.3551 13.2021 15.8609 12.7172 16.2913 12.1745C16.5074 11.8209 16.6152 11.417 16.6026 11.0083C16.6332 10.5102 16.4215 10.0263 16.0283 9.69573C15.5529 9.35944 14.9669 9.19535 14.3756 9.23297C13.9206 9.23225 13.4672 9.28401 13.0252 9.38713C12.5022 9.52118 11.9965 9.70986 11.5172 9.94972L11 8.82483C12.0658 8.28408 13.2552 8.00082 14.4633 8C15.5806 8 16.4486 8.2611 17.0671 8.7833C17.7065 9.3516 18.0466 10.161 17.9948 10.9916C18.0018 11.3551 17.944 11.7172 17.824 12.0624C17.706 12.3777 17.5358 12.673 17.32 12.9373C16.8805 13.4172 16.4 13.8618 15.8834 14.2664C15.429 14.6019 15.0339 15.0044 14.7132 15.4584C14.5052 15.8503 14.407 16.2865 14.4283 16.725V17L13.297 16.9991Z" fill="white"/>
                  <circle cx="14" cy="20" r="1" fill="white"/>
                </svg>,
        title: "Does it work with WordPress?",
        description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",    
        button: "Click to learn more"
    },
    {
        logo: <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" class="me-3">
                  <circle cx="14.5" cy="14.5" r="14.5" fill="#68D585"/>
                  <path d="M13.297 16.9991V16.5492C13.2765 15.9989 13.3843 15.4511 13.6127 14.945C13.9052 14.4307 14.305 13.9784 14.7877 13.6159C15.3551 13.2021 15.8609 12.7172 16.2913 12.1745C16.5074 11.8209 16.6152 11.417 16.6026 11.0083C16.6332 10.5102 16.4215 10.0263 16.0283 9.69573C15.5529 9.35944 14.9669 9.19535 14.3756 9.23297C13.9206 9.23225 13.4672 9.28401 13.0252 9.38713C12.5022 9.52118 11.9965 9.70986 11.5172 9.94972L11 8.82483C12.0658 8.28408 13.2552 8.00082 14.4633 8C15.5806 8 16.4486 8.2611 17.0671 8.7833C17.7065 9.3516 18.0466 10.161 17.9948 10.9916C18.0018 11.3551 17.944 11.7172 17.824 12.0624C17.706 12.3777 17.5358 12.673 17.32 12.9373C16.8805 13.4172 16.4 13.8618 15.8834 14.2664C15.429 14.6019 15.0339 15.0044 14.7132 15.4584C14.5052 15.8503 14.407 16.2865 14.4283 16.725V17L13.297 16.9991Z" fill="white"/>
                  <circle cx="14" cy="20" r="1" fill="white"/>
                </svg>,
        title: "Do I get free updates?",
        description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
        button: "Click to learn more"    
    },
    {
        logo: <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none" class="me-3">
                  <circle cx="14.5" cy="14.5" r="14.5" fill="#68D585"/>
                  <path d="M13.297 16.9991V16.5492C13.2765 15.9989 13.3843 15.4511 13.6127 14.945C13.9052 14.4307 14.305 13.9784 14.7877 13.6159C15.3551 13.2021 15.8609 12.7172 16.2913 12.1745C16.5074 11.8209 16.6152 11.417 16.6026 11.0083C16.6332 10.5102 16.4215 10.0263 16.0283 9.69573C15.5529 9.35944 14.9669 9.19535 14.3756 9.23297C13.9206 9.23225 13.4672 9.28401 13.0252 9.38713C12.5022 9.52118 11.9965 9.70986 11.5172 9.94972L11 8.82483C12.0658 8.28408 13.2552 8.00082 14.4633 8C15.5806 8 16.4486 8.2611 17.0671 8.7833C17.7065 9.3516 18.0466 10.161 17.9948 10.9916C18.0018 11.3551 17.944 11.7172 17.824 12.0624C17.706 12.3777 17.5358 12.673 17.32 12.9373C16.8805 13.4172 16.4 13.8618 15.8834 14.2664C15.429 14.6019 15.0339 15.0044 14.7132 15.4584C14.5052 15.8503 14.407 16.2865 14.4283 16.725V17L13.297 16.9991Z" fill="white"/>
                  <circle cx="14" cy="20" r="1" fill="white"/>
                </svg>,
        title: "Will you provide support?",
        description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
        button: "Click to learn more"    
    } 

  ]

  return (
    <>
    <div className="row">
            {priceData?.map(({logo, title, description, button}, index) => <PriceCard key={index} logo={logo} title={title} description={description} button={button} />)}
    </div>
    </>
  )
}

export default Price