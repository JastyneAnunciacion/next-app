'use client'

import BigBannerSlider from "./components/banners/BigBannerSlider";
import QuickListGames from "./components/lists/quickList/QuickListGames";
import MainComponents from "./components/MainComponents";
import Serachbar from "./components/Serachbar";
import walletList from "./components/temporaryJsons/wallet-list.json";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initTelegramWebApp = () => {
      if (window.Telegram && window.Telegram.WebApp) {
        const WebApp = window.Telegram.WebApp;
        WebApp.expand();
        WebApp.MainButton.hide();
        WebApp.ready();
      } else {
        // Retry after a short delay if WebApp is not available yet
        setTimeout(initTelegramWebApp, 100);
      }
    };

    initTelegramWebApp();
  }, []);

  return (
    <MainComponents footerPage="Games">

      <div className="flex flex-col w-full items-center">
        <div className="w-full max-w-[91.88%]">
          <BigBannerSlider />
          <div className="w-full h-[50px]">
            <Serachbar placeholderText='Search Games' />
          </div>
        </div>

        <div className="w-full mt-[17px] flex flex-col gap-[15px] justify-center">
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
