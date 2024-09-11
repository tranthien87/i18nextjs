"use client";

import { useTranslation } from "@/app/i18n/client";

export default function Welcome() {
  const { t } = useTranslation("zh")
  return <div>{t('wellcome')}</div>;
}