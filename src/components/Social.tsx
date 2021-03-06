import SocialLink from './SocialLink';

export default function Social() {
  return (
    <section className="flex flex-col items-center justify-around w-full p-10 md:flex-row md:p-20 bg-secondary">
      <div className="flex flex-col justify-center items-start w-[225px]">
        <div className="mb-10">
          <SocialLink
            href="https://discord.gg/FWh7cqUkDt"
            icon="/icons/discord-icon.svg"
          />
        </div>

        <div className="mb-10 md:mb-0">
          <SocialLink
            href="https://twitter.com/cobogosocial"
            icon="/icons/twitter-icon.svg"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start w-[225px]">
        <div className="mb-10">
          <SocialLink
            href="https://medium.com/@cobogosocial"
            icon="/icons/medium-icon.svg"
          />
        </div>

        <div className="mb-10 md:mb-0">
          <SocialLink
            href="https://github.com/cobogo-social"
            icon="/icons/github-icon.svg"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start w-[225px]">
        <div className="mb-10">
          <SocialLink
            href="https://t.me/cobogosocial"
            icon="/icons/telegram-icon.svg"
          />
        </div>

        <SocialLink
          href="https://docs.cobogo.social"
          icon="/icons/gitbook-icon.svg"
        />
      </div>
    </section>
  );
}
