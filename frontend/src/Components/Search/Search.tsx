import React, { useState } from 'react'

type Props = {}

const Search  : React.FC<Props>= (props: Props): JSX.Element => {
// useState is basically a get; set;
//<string> is explicitaly setting the type of the useState. We could of infered the state using ("")
    const [search, setSearch] = useState<string>();

    const onClick = (e: any) => {
        setSearch(e.target.value);
        console.log(e);
    }

  return (
    <div><input value={search} onChange={(e) => onClick(e)}></input></div>
  )
}

export default Search