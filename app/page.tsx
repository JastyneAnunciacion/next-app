import BigBannerSlider from "./components/banners/BigBannerSlider";
import QuickMenu from "./components/footers/QuickMenu";
import Header from "./components/Header";
import QuickListGames from "./components/lists/quickList/QuickListGames";
import MainComponents from "./components/MainComponents";
import Serachbar from "./components/Serachbar";
import walletList from "./components/temporaryJsons/wallet-list.json";

export default function Home() {
  return (
    <MainComponents footerPage="Games">
      <div className=" mt-4 flex flex-col w-full items-center">
        <BigBannerSlider />
        <div className="w-full h-[50px]">
          <Serachbar placeholderText='Search Games' />
        </div>
        <div className="w-full mt-[17px] flex flex-col gap-[30px]">
          <QuickListGames gameListTitle="Top Games" gameList={walletList} />
          <QuickListGames gameListTitle="New" gameList={walletList} />
          <QuickListGames gameListTitle="Biggest Multiplier" gameList={walletList} />
          <QuickListGames gameListTitle="Bonus Buy" gameList={walletList} />
          <QuickListGames gameListTitle="Crypto Games" gameList={walletList} />
          <QuickListGames gameListTitle="Table Games" gameList={walletList} />
          <QuickListGames gameListTitle="Game Shows" gameList={walletList} />
        </div>
      </div>
    </MainComponents>
  )
}
