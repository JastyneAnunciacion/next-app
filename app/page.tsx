import BigBannerSlider from "./components/banners/BigBannerSlider";
import Footer from "./components/footers/Footer";
import Header from "./components/Header";
import QuickListGames from "./components/lists/quickList/QuickListGames";
import Serachbar from "./components/Serachbar";
import walletList from "./components/temporaryJsons/wallet-list.json";

export default function Home() {
  return (
    <main className="w-[100vw] max-w-[100%] h-[100vh]">
      <Header />
      <div className="px-4 mt-4">
        <BigBannerSlider />
        <Serachbar placeholderText='Search Games' />
        <QuickListGames gameListTitle="Top Games" gameList={walletList} />
        <QuickListGames gameListTitle="New" gameList={walletList} />
        <QuickListGames gameListTitle="Biggest Multiplier" gameList={walletList} />
        <QuickListGames gameListTitle="Bonus Buy" gameList={walletList} />
        <QuickListGames gameListTitle="Crypto Games" gameList={walletList} />
        <QuickListGames gameListTitle="Table Games" gameList={walletList} />
        <QuickListGames gameListTitle="Game Shows" gameList={walletList} />
      </div>
      <Footer currentPage="Casino" />
    </main>
  )
}
