import React from 'react';
import AllSearch from "../AllSearch/AllSearch";
import Alpha2CodeSearch from "../Alpha2CodeSearch/Alpha2CodeSearch";
import css from './RESTCountries.module.css';

const RESTCountries = () => {
    return (
      <div className={css.page}>
        <span className={css.page_name}>REST Countries</span>
        <p className={css.p}>Below are described the REST endpoints available that you can use to search for countries using https://restcountries.eu/rest/v2/all link.</p>
       <hr/>
        <p className={css.p}>Example 1: Search by the all information:</p>
        <AllSearch/>
        <hr/>
        <p className={css.p}>Example 2: Search by country aplha2Code:</p>
        <Alpha2CodeSearch/>
      </div>
    )
}

export default RESTCountries;
