import Head from "next/head"
import { Settings20Regular } from "@fluentui/react-icons"
import { DialogClose } from "@radix-ui/react-dialog"
import { Label } from "@radix-ui/react-dropdown-menu"
import { useTheme } from "next-themes"
import setLanguage from "next-translate/setLanguage"
import useTranslation from "next-translate/useTranslation"

import { Layout } from "@/components/layout"
import { PageContent } from "@/components/page"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SettingsPage() {
  const { t, lang } = useTranslation("common") // default namespace (optional)
  const { setTheme } = useTheme()

  let ver = "3.0.0.2303-final1"

  async function SelectChanged(val) {
    await setLanguage(val)
  }

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
      <PageContent page="settings">
        <div className="mb-2 flex items-center space-x-2">
          <Settings20Regular primaryFill="#0088FF" className="text-white" />

          <p className="ml-2 font-bold">{t("settings")}</p>
        </div>
        <section
          id="about-section"
          className="m-2 flex flex-col items-center justify-center rounded-lg bg-white p-2 dark:bg-slate-800"
        >
          <div className="m-3 flex items-center space-x-2">
            <h2 className="text-4xl font-bold">{t("title")}</h2>
            <span className="m-2 rounded-full bg-gradient-to-br from-[#0088FF] to-[#2153E0] px-2 font-bold text-white">
              {t("web")}
            </span>
          </div>
          <p className="font-bold">{`${t("version")} ${ver}`}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="nav" variant="outline" className="mt-5 font-bold">
                {t("see-licenses")}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{t("licenses")}</DialogTitle>
              </DialogHeader>
              <p>
                NextJS - MIT License - © 2023 Vercel, Inc.
                <br></br>
                RadixUI - MIT License - © 2022 WorkOS
                <br></br>
                shadcn/ui - MIT License - © 2023 shadcn
                <br></br>
                Fluent System Icons - MIT License - © 2020 Microsoft Corporation
                <br></br>
                Passliss - MIT License - © 2023 Léo Corporation
              </p>
              <DialogFooter>
                <DialogClose>
                  <Button size="nav" type="submit">
                    {t("ok")}
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>
        <section id="settings-section">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div>
                  <h4 className="text-left text-lg">{t("theme")}</h4>
                  <p className="text-left text-sm font-normal">
                    {t("change-theme")}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap">
                  <div
                    onClick={() => setTheme("light")}
                    className="m-2 flex cursor-pointer items-center space-x-2 overflow-hidden rounded-lg bg-slate-100 pr-2 dark:bg-slate-700"
                  >
                    <img
                      src="LightTheme.png"
                      height="50px"
                      width="50px"
                      alt="Light theme image"
                      className="object-cover"
                    />
                    <p className="m-2 font-bold">Light</p>
                  </div>
                  <div
                    onClick={() => setTheme("dark")}
                    className="m-2 flex cursor-pointer items-center space-x-2 overflow-hidden rounded-lg bg-slate-100 pr-2 dark:bg-slate-700"
                  >
                    <img
                      src="DarkTheme.png"
                      height="50px"
                      width="50px"
                      alt="Dark theme image"
                      className="object-cover"
                    />
                    <p className="m-2 font-bold">Dark</p>
                  </div>
                  <div
                    onClick={() => setTheme("system")}
                    className="m-2 flex cursor-pointer items-center space-x-2 overflow-hidden rounded-lg bg-slate-100 pr-2 dark:bg-slate-700"
                  >
                    <img
                      src="SystemTheme.png"
                      height="50px"
                      width="50px"
                      alt="System theme image"
                      className="object-cover"
                    />
                    <p className="m-2 font-bold">System</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <div className="mx-2 mt-2 grid grid-cols-2 items-center rounded-lg bg-slate-100 p-4 font-bold dark:bg-slate-800 ">
              <div>
                <h4 className="text-left text-lg">{t("language")}</h4>
                <p className="text-left text-sm font-normal">
                  {t("change-language")}
                </p>
              </div>
              <Select defaultValue={lang} onValueChange={SelectChanged}>
                <SelectTrigger className="mx-1 h-auto w-[200px] justify-self-end py-1 px-2">
                  <SelectValue placeholder={t("algorithm")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem defaultChecked={true} value="en">
                    English (United States)
                  </SelectItem>
                  <SelectItem value="fr">Français (France)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Accordion>
        </section>
      </PageContent>
    </Layout>
  )
}
