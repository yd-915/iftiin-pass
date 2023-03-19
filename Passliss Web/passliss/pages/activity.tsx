import Head from "next/head"
import { History20Regular } from "@fluentui/react-icons"
import useTranslation from "next-translate/useTranslation"

import { Layout } from "@/components/layout"
import { PageContent } from "@/components/page"

export default function EncryptionPage() {
  const { t } = useTranslation("common") // default namespace (optional)
  return (
    <Layout>
      <Head>
        <title>Passliss</title>
        <meta
          name="description"
          content="Passliss is a simple yet modern password generator."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContent page="activity">
        <div className="mb-2 flex items-center space-x-2">
          <History20Regular primaryFill="#0088FF" className="text-white" />

          <p className="ml-2 font-bold">{t("activity")}</p>
        </div>
      </PageContent>
    </Layout>
  )
}
