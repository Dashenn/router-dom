import { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import ProductCard from "../ProductCard/ProductCard";


function App() {
  const [finalData, setFinalData] =useState([])
  const [finalLoading, setFinalLoading] = useState(false)
  const [currency, setCurrency] = useState('USD')
  const [exchange, setExchange] = useState(1)
  const {data: dummyData , loading: dummyLoading , error: dummyError , refetch : dummyRefetch} = useGetData('https://dummyjson.com/products')
  const {data: storeData , loading: storeLoading , error: storeError , refetch : storeRefetch} = useGetData('https://fakestoreapi.com/products')
  const {data: currencyData , loading: currencyLoading , error: currencyError , refetch : currencyRefetch} = useGetData('https://api.coindesk.com/v1/bpi/currentprice.json')


  useEffect(() => {
    if (dummyData.products && storeData) {
      setFinalData([...storeData, ...dummyData.products])
      console.log(finalData)
      setFinalLoading(false)
    }
  }, [dummyData, storeData])
  const currenyToggle = () => {
    if (currency === 'USD') {
      setCurrency('EUR')
      setExchange(currencyData.bpi.EUR.rate_float / 20)
    }else {
      setCurrency('USD')
      setExchange(1)
    }
  }
  return (
    <div className="container">
      <button onClick={currenyToggle}>Change Price</button>
      <ul className='productsList'>
        {
          finalLoading
              ? 'Loading ...'
              : finalData && finalData.map((item, index) => (
                    <ProductCard product={item} key={index} currency={currency} exchange={exchange} />
                ))
        }
      </ul>
    </div>
  );
}

export default App;
