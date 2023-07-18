import React, { useState } from "react";
import { BoxSearch, Icon, Search } from "./style";
import IconSearch from '../../assets/Search.svg'

interface dataSeachBar {
    getSearch: (value: string) => void
}

export default function SearchBar({getSearch}: dataSeachBar){

    const [value, setValue] = useState<string>()

    return(
        <BoxSearch>
            <Icon src={IconSearch}/>
            <Search
                placeholder="Seach by label"
                onChange={(event:any) => {setValue(event.target.value); getSearch(event.target.value)}}
                value = {value}
            />
        </BoxSearch>
    )
}