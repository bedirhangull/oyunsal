import { ArrowRight, Sparkle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import MailLink from "@/components/ui/mail-link";

import wolfIcon from '../public/icons/wolf.svg';
import agentIcon from '../public/icons/agent.svg';

export default function App() {
  return (
    <section className="flex items-center justify-center">
      <div className="container">
        <div className="border-x border-t border-dashed px-4 py-20 md:px-16">
          <div className="mx-auto max-w-3xl">
            <a
              href="#"
              className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm"
            >
              <Badge>Yeni Oyunlar Yakinda Sizlerle</Badge>
              <ArrowRight className="inline size-4" />
            </a>
            <h1 className="my-4 mb-6 text-center text-3xl font-semibold lg:text-6xl">
              Oyunsal Edremit Şubesine Hoşgeldiniz
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-center text-muted-foreground lg:text-xl">
              Yeni oyunlar için bizi takip edin! Edremit şubemizde her hafta yeni oyunlar düzenlenmektedir. Oyunlarımızda yer almak için hemen kaydolun ve eğlenceli bir deneyim yaşayın!
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg" className="w-full gap-2 sm:w-auto lg:mt-10">
                <div className="size-2 rounded-full bg-green-400"></div>
                Yeni Bir Oyuna Başla
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full gap-2 sm:w-auto lg:mt-10"
              >
                Sizin de şehrinizde bir şube açalım
              </Button>
            </div>
          </div>
        </div>
        <div className="relative grid border-x border-dashed md:grid-cols-3">
          <Sparkle className="absolute right-0 top-0 h-auto w-5 -translate-y-2.5 translate-x-2.5 fill-primary" />
          <Sparkle className="absolute left-0 top-0 h-auto w-5 -translate-x-2.5 -translate-y-2.5 fill-primary" />
          <div className="flex items-center gap-6 border-t border-dashed p-4 font-medium md:justify-center lg:p-10 lg:text-lg">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-sm lg:size-12 lg:text-base">
              <img src={wolfIcon} alt="Wolf Icon" />
            </span>
            Vampir Köylü
          </div>
          <div className="flex items-center gap-6 border-x border-t border-dashed p-4 font-medium md:justify-center lg:p-10 lg:text-lg">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-sm lg:size-12 lg:text-base">
              <img src={agentIcon} alt="Wolf Icon" />
            </span>
            Spy
          </div>
          <MailLink />
        </div>
      </div>
    </section>
  );
};
