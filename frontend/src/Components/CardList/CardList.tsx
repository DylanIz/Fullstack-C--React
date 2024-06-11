import React from 'react'
import Card from '../Card/Card'

interface Props {}

const CardList : React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <div>
        <Card companyName='Apple' ticker='AAPL' price={123}/>
        <Card companyName='Microsoft' ticker='MSFT' price={211}/>
        <Card companyName='Gamestop' ticker='GME' price={29.5}/>
    </div>
  )
}

export default CardList