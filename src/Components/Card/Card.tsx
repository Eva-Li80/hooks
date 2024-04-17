import React from 'react'

type CardProps = {
    title: string;
    subtitle:string;
    children: React.ReactNode;
    classname?: string
}

const Card = ({title, subtitle, children, classname}: CardProps) => {
  return (
    <div className={`card ${classname}`}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
         {children}
    </div>
  )
}

export default Card
