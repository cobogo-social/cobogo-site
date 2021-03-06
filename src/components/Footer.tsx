import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Link from './NextLink';
import SocialLink from './SocialLink';

export default function Header(): JSX.Element {
  const { t } = useTranslation('footer');

  return (
    <section className="bg-primary flex flex-col justify-center items-center px-[20px] py-[100px] text-white w-full relative">
      <div className="flex mb-[80px] sm:mb-[40px] flex-col sm:flex-row">
        <div className="mr-0 sm:mr-[40px] mb-8 sm:mb-0">
          <SocialLink
            href="https://t.me/cobogosocial/"
            icon="/icons/telegram-icon.svg"
          />
        </div>

        <div className="mr-0 sm:mr-[40px] mb-8 sm:mb-0">
          <SocialLink
            href="https://medium.com/@cobogosocial/"
            icon="/icons/medium-icon.svg"
          />
        </div>

        <div className="mr-0 sm:mr-[40px] mb-8 sm:mb-0">
          <SocialLink
            href="https://twitter.com/cobogosocial/"
            icon="/icons/twitter-icon.svg"
          />
        </div>

        <div className="mr-0 sm:mr-[40px] mb-8 sm:mb-0">
          <SocialLink
            href="https://github.com/cobogo-social/"
            icon="/icons/github-icon.svg"
          />
        </div>

        <div className="mr-0 sm:mr-[40px] mb-8 sm:mb-0">
          <SocialLink
            href="https://discord.cobogo.social/"
            icon="/icons/discord-icon.svg"
          />
        </div>

        <SocialLink
          href="https://docs.cobogo.social/"
          icon="/icons/gitbook-icon.svg"
        />
      </div>

      <div className="flex mb-[100px] flex-col sm:flex-row items-center">
        <div className="mr-0 sm:mr-8 mb-8 sm:mb-0">
          <Link href="/faq" className="bold-18">
            FAQ
          </Link>
        </div>

        <div className="mr-0 sm:mr-8 mb-8 sm:mb-0">
          <Link href="/code" className="bold-18">
            {t('code of conduct')}
          </Link>
        </div>

        <div className="mr-0 sm:mr-8 mb-8 sm:mb-0">
          <Link href="/privacy" className="bold-18">
            {t('privacy policy')}
          </Link>
        </div>

        <div className="mr-0 sm:mr-8 mb-8 sm:mb-0">
          <Link href="/terms" className="bold-18">
            {t('terms of use')}
          </Link>
        </div>

        <Link href="mailto:hi@cobogo.social" className="bold-18">
          {t('email')}
        </Link>
      </div>

      <Image src="/logos/cobogo-logo.svg" width={81} height={19} />

      <div className="absolute bottom-[20px] left-[20px] hidden sm:flex">
        <Image src="/images/footer.svg" width={369} height={313} />
      </div>

      <div className="absolute bottom-[20px] right-[20px] hidden sm:flex">
        <Image src="/images/footer-2.svg" width={369} height={313} />
      </div>
    </section>
  );
}
