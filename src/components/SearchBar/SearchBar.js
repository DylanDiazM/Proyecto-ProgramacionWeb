import React, { useState } from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

function SearchBar({ placeholder, data, title }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }

    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type='text' placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
                <div className='searchIcon'>
                    {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className='dataResult'>
                    <h3 className='title'>{title}</h3>
                    <hr className='after'></hr>
                    {filteredData.map((value, key) => {
                        return <a className='dataItem' href={"/" + value.name} target="_blank" >
                            <div className='row'>
                                <img className='center' src="https://yt3.ggpht.com/GDjDgYYW3x2V7fjv9Q6WJtvnhzttd2l5OMD6usdE54OiLxBsW8SRIudvERw_29qzrbZ0hkbI9A=s900-c-k-c0x00ffffff-no-rj" alt="" />
                                <column>
                                    <div className='name'>{value.name}</div>
                                    <div className='price'>{value.price_usd === null ? "No price" : "$" + value.price_usd}</div>
                                </column>
                            </div>
                        </a>
                    })}
                    <hr className='before'></hr>
                    <h3 className='searchFor'> Search for "{wordEntered}"</h3>
                </div>
            )
            }
        </div >
    );
}

export default SearchBar;
