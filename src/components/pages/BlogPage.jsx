import React from "react";
import { useState, useEffect } from "react";
import TextBlock from "../TextBlock";
import InputSearch from "../InputSearch";
import BlogStyles from "./BlogPage.module.css"
const BlogPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const [filterItems, setFilterItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData  (){
       setLoading(true);
       setError(null);
       try {
        const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
        if (res.status !== 200) {
          throw new Error("not ok")
        }
        const dataProducts = await res.json();
        setData(dataProducts)
        console.log(dataProducts)
       }catch (error) {
        setError(error.message)
       }finally {
        setLoading(false)
       }
    }
    fetchData();
  }, [])

  useEffect(() => {
    setFilterItems(data.filter(product => product.title.toLowerCase().includes(search.toLowerCase())))
  }, [data, search])

    return (
        <>
        
        <InputSearch className='input' value={search} onChange={(e) => setSearch(e.target.value)}></InputSearch>

      {loading && <TextBlock>Загрузка...</TextBlock>}
      {error && <TextBlock text='Ошибка'/>}
      <div className={BlogStyles.posts}>
         {filterItems.map(item => 
          <div className={BlogStyles.post}>{item.title}</div>)} 
      </div> 
      </>
       
    );
}
export default BlogPage;