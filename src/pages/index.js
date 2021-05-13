import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layouts/Layout'
import SearchInput from "../components/Searchinput/Searchinput"
import CountriesTable from '../components/CountriesTable/CountriesTable'

export default function Home({countries}) {
  //console.log(countries);
  return <Layout>
    <div className={styles.counts}>Found {countries.length} countries</div>
    
    <SearchInput placeholder="Filter by Name, Region or SubRegion"/>

    <CountriesTable countries={countries}/>
  </Layout>;
};

//using function to connect to api to fetch country names.
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
        countries,
    }
  }
}