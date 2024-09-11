import Link from "next/link";
import Welcome from "./_components/welcome";
import { useTranslation } from "../i18n";


export default async function Home({params: {locale}}: {params: {locale: string}}) {
  const { t } = await useTranslation(locale)
  return (
    <div >
         <div>{t('wellcome')}</div>
         <Welcome />
         <Link href={`zh/about`}>About Page</Link>
    </div>
  );
}
