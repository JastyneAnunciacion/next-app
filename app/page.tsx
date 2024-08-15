'use client'

import BigBannerSlider from "./components/banners/BigBannerSlider";
import QuickListGames from "./components/lists/quickList/QuickListGames";
import MainComponents from "./components/MainComponents";
import Serachbar from "./components/Serachbar";
import walletList from "./components/temporaryJsons/wallet-list.json";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const maxRetries = 50;
    let retries = 0;

    const initTelegramWebApp = () => {
      if (window.Telegram && window.Telegram.WebApp) {
        const WebApp = window.Telegram.WebApp;
        WebApp.expand();
        console.log("Telegram WebApp expanded");
        WebApp.MainButton.hide();
        console.log("Telegram MainButton hidden");
        WebApp.ready();
        console.log("Telegram WebApp is ready");
      } else {
        retries += 1;
        if (retries < maxRetries) {
          console.warn(`Telegram WebApp is not available yet, retrying... (${retries}/${maxRetries})`);
          setTimeout(initTelegramWebApp, 200);
        } else {
          console.error("Failed to initialize Telegram WebApp after maximum retries");
        }
      }
    };

    initTelegramWebApp();
  }, []);

  return (
    <MainComponents footerPage="Games">

      <div className="flex flex-col w-full items-center">
        <div className="w-full max-w-[91.88%] flex flex-col mb-[3.54vw] gap-[5.41vw]">
          <BigBannerSlider />
          <div className="w-full h-[10.41vw]">
            <Serachbar placeholderText='Search Games' />
          </div>
        </div>

        <div className="w-full flex flex-col gap-[6.25vw] justify-center">
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
