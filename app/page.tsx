import BigBannerSlider from "./components/BigBannerSlider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuickListGames from "./components/QuickListGames";
import Serachbar from "./components/Serachbar";
import walletList from "./components/wallet-list.json";

export default function Home() {
  return (
    <main>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Header />
      <div className="bg-gray-200 px-4 mt-4">
        <div className="">
          <BigBannerSlider />
        </div>
        <Serachbar placeholderText='Search Games' />
        <QuickListGames gameListTitle="Top Games" gameList={walletList}/>
        <QuickListGames gameListTitle="New" gameList={walletList}/>
        <QuickListGames gameListTitle="Biggest Multiplier" gameList={walletList}/>
        <QuickListGames gameListTitle="Bonus Buy" gameList={walletList}/>
        <QuickListGames gameListTitle="Crypto Games" gameList={walletList}/>
        <QuickListGames gameListTitle="Table Games" gameList={walletList}/>
        <QuickListGames gameListTitle="Game Shows" gameList={walletList}/>
      </div>
      <Footer currentPage="Casino"/>
    </main>
  )
}
