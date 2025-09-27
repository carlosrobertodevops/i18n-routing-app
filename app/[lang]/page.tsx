import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Counter from "./components/counter";
import LocaleSwitcher from "./components/locale-switcher";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "700",
  subsets: ['latin'],
})

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <div>
      <LocaleSwitcher />
      <div className={roboto.className}>
        <p>Current locale: {lang}</p>
        <p>
          This text is rendered on the server:{" "}
          {dictionary["server-component"].welcome}
        </p>
        <Counter  dictionary={dictionary.counter} />
      </div>
    </div>
  );
}
