import BannerWithButton from "./components/BannerWithButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuickListCryptoCurrencies from "./components/QuickListCryptoCurrencies";
import QuickListGames from "./components/QuickListGames";
import { prefix } from "./prefix";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="bg-gray-200 px-4">
        <div className="flex justify-center items-center flex-col">
          <BannerWithButton />
        </div>
        <p>Hello Prefix here {prefix}</p>
        <QuickListCryptoCurrencies />
        <QuickListGames gameListTitle="Top Games" />
        <QuickListGames gameListTitle="New" />
        <QuickListGames gameListTitle="Biggest Multiplier" />
        <QuickListGames gameListTitle="Bonus Buy" />
        <QuickListGames gameListTitle="Crypto Games" />
        <QuickListGames gameListTitle="Table Games" />
        <QuickListGames gameListTitle="Game Shows" />
      </div>
      <Footer currentPage="Home"/>
    </main>
  )
}
