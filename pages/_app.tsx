// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
// ⬇️ заменили '@/components/...' на относительный путь
import SiteHeader from "../components/SiteHeader";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <div className="min-h-screen bg-[#fff7ec] text-[#0f172a]">
      <SiteHeader locale={(locale as any) ?? "az"} />
      <main className="pt-[calc(var(--header-h,56px)+8px)]">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
export default appWithTranslation(MyApp);
