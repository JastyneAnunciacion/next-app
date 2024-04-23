import BannerWithButton from "./components/BannerWithButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuickListCryptoCurrencies from "./components/QuickListCryptoCurrencies";
import QuickListGames from "./components/QuickListGames";
import walletList from "./components/wallet-list.json";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="bg-gray-200 px-4">
        <div className="flex justify-center items-center flex-col">
          <BannerWithButton />
        </div>
        <QuickListCryptoCurrencies cryptoList={walletList}/>
        <QuickListGames gameListTitle="Top Games" gameList={walletList}/>
        <QuickListGames gameListTitle="New" gameList={walletList}/>
        <QuickListGames gameListTitle="Biggest Multiplier" gameList={walletList}/>
        <QuickListGames gameListTitle="Bonus Buy" gameList={walletList}/>
        <QuickListGames gameListTitle="Crypto Games" gameList={walletList}/>
        <QuickListGames gameListTitle="Table Games" gameList={walletList}/>
        <QuickListGames gameListTitle="Game Shows" gameList={walletList}/>
        <div className="h-20"></div>
      </div>
      <Footer currentPage="Home"/>
    </main>
  )
}
