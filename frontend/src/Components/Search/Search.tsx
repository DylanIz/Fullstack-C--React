import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

type Props = {}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <div>
            <input value={search} onChange={(e) => handleChange(e)}></input>
            <button onClick={(e) => onClick(e)}></button>
        </div>
    )
}

export default Search