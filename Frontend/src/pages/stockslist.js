import Stocks from './Stocks';

export default function StockList({ filteredStocks }) {
  return (
    <>
      {filteredStocks.map(stock => {
        return (
          <Stocks
          key = {stock.Symbol}
          name = {stock.Name}
          symbol = {stock.Symbol}
          price = {stock.Close}
          open = {stock.Open}
          close = {stock.Close}
          high = {stock.High}
          low = {stock.Low}
          marketcap = {stock.Marketcap}
          volume = {stock.Volume}
          pe = {stock.PE}
          logo = {stock.Logo}
          />
        );
      })}
    </>
  );
}
