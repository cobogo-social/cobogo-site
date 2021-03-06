import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function TechnicalViewpoint() {
  const { t } = useTranslation('technical-viewpoint');

  return (
    <section className="flex flex-col items-center h-full w-full py-24 bg-secondary">
      <div className="flex flex-col items-center">
        <h1 className="bold-36 text-center pb-7">{t('technical viewpoint')}</h1>

        <h2 className="light-24 text-center pb-0 md:pb-20 w-screen md:w-1/2 md:px-0 px-5">
          {t(
            'cobogo leverages its unique split funding system to sustainably monetize YouTube Creators. Fans can stake CBG tokens on the pool of their favorite YouTube Creator and automatically start getting CBG rewards.'
          )}
        </h2>
      </div>

      <div className="px-4 my-32 sm:my-0">
        <Image
          width={801}
          height={443}
          src="/images/technical-viewpoint.png"
          alt="technical viewpoint"
        />
      </div>

      <div className="flex flex-col lg:flex-row w-full sm:justify-center lg:justify-between px-5 md:px-20">
        <div className="regular-18 text-left lg:w-1/3 pr-24 lg:pr-0 pb-20 lg:pb-0">
          {t(
            'with CBG (NFT), creators can design all the perks for their fans. In this way, everyone that uses this method of funding can receive benefits not found anywhere else.'
          )}
        </div>

        <div className="regular-18 text-right lg:w-1/3 pl-24 lg:pl-0">
          {t(
            'even small and niche YouTubers will be able to be properly monetized by their own community. Through cobogo, community building and monetization is taken to a new level not found in web2.'
          )}
        </div>
      </div>
    </section>
  );
}
