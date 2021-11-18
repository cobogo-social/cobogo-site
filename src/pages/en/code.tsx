import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from '../../components/NextLink';
import Social from '../../components/IndexPage/Social';
import Footer from '../../components/IndexPage/Footer';
import ChooseLanguage from '../../components/ChooseLanguage';

const Code = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-bgprimary">
      <ChooseLanguage />
      <Head>
        <title>cobogo - code of conduct</title>
      </Head>
      <div className="mx-5 md:mx-20 py-20">
        <Link href="/">
          <div className="w-60 h-14 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/logos/cobogo-logo.svg"
              alt="Guy playing youtube site"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-1 flex-col mx-5 md:mx-20 pb-20">
        <h1 className="bold-36 mb-5">Code of Conduct</h1>
        <h2 className="bold-30 mb-2">Our Pledge</h2>
        <p className="regular-18 break-normal mb-5">
          In the interest of fostering an open and welcoming environment, we as
          contributors and maintainers pledge to making participation in our
          project and our community a harassment-free experience for everyone,
          regardless of age, body size, disability, ethnicity, sex
          characteristics, gender identity and expression, level of experience,
          education, socio-economic status, nationality, personal appearance,
          race, religion, or sexual identity and orientation.
        </p>
        <h2 className="bold-30 mb-2">Our Standards</h2>
        <p className="regular-18 break-normal mb-5">
          Examples of behavior that contributes to creating a positive
          environment include:
        </p>
        <ul className="regular-16 list-disc pl-20 mb-3">
          <li>Using welcoming and inclusive language</li>
          <li>Being respectful of differing viewpoints and experiences</li>
          <li>Gracefully accepting constructive criticism</li>
          <li>Focusing on what is best for the community</li>
          <li>Showing empathy towards other community members</li>
        </ul>
        <p className="regular-18 break-normal mb-5">
          Examples of unacceptable behavior by participants include:
        </p>
        <ul className="regular-16 list-disc pl-20">
          <li>
            The use of sexualized language or imagery and unwelcome sexual
            attention or advances
          </li>
          <li>
            Trolling, insulting/derogatory comments, and personal or political
            attacks
          </li>
          <li>Public or private harassment</li>
          <li>
            Publishing others private information, such as a physical or
            electronic address, without explicit permission
          </li>
          <li>
            Other conduct which could reasonably be considered inappropriate in
            a professional setting
          </li>
        </ul>
        <h2 className="bold-30 mb-2">Our Responsibilities</h2>
        <p className="regular-18 break-normal mb-5">
          Project maintainers are responsible for clarifying the standards of
          acceptable behavior and are expected to take appropriate and fair
          corrective action in response to any instances of unacceptable
          behavior.
        </p>
        <p className="regular-18 break-normal mb-5">
          Project maintainers have the right and responsibility to remove, edit,
          or reject comments, commits, code, wiki edits, issues, and other
          contributions that are not aligned to this Code of Conduct, or to ban
          temporarily or permanently any contributor for other behaviors that
          they deem inappropriate, threatening, offensive, or harmful.
        </p>
        <h2 className="bold-30 mb-2">Scope</h2>
        <p className="regular-18 break-normal mb-5">
          This Code of Conduct applies within all project spaces, and it also
          applies when an individual is representing the project or its
          community in public spaces. Examples of representing a project or
          community include using an official project e-mail address, posting
          via an official social media account, or acting as an appointed
          representative at an online or offline event. Representation of a
          project may be further defined and clarified by project maintainers.
        </p>
        <h2 className="bold-30 mb-2">Enforcement</h2>
        <p className="regular-18 break-normal mb-5">
          Instances of abusive, harassing, or otherwise unacceptable behavior
          may be reported by contacting the project team at hi@devtoken.rocks.
          All complaints will be reviewed and investigated and will result in a
          response that is deemed necessary and appropriate to the
          circumstances. The project team is obligated to maintain
          confidentiality with regard to the reporter of an incident. Further
          details of specific enforcement policies may be posted separately.
        </p>
        <p className="regular-18 break-normal mb-5">
          Project maintainers who do not follow or enforce the Code of Conduct
          in good faith may face temporary or permanent repercussions as
          determined by other members of the project&apos;s leadership.
        </p>
        <h2 className="bold-30 mb-2">Attribution</h2>
        <p className="regular-18">
          This Code of Conduct is adapted from the{' '}
          <a
            className="regular-cobogo-18"
            href="https://www.contributor-covenant.org/"
            target="_blank"
            rel="noreferrer"
          >
            Contributor Covenant
          </a>
          , version 1.4, available at{' '}
          <a
            className="regular-cobogo-18"
            href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html"
            target="_blank"
            rel="noreferrer"
          >
            https://www.contributor-covenant.org/version/1/4/code-of-conduct.html
          </a>
          <br />
          <br />
          For answers to common questions about this code of conduct, see{' '}
          <a
            className="regular-cobogo-18"
            href="https://www.contributor-covenant.org/faq"
            target="_blank"
            rel="noreferrer"
          >
            https://www.contributor-covenant.org/faq
          </a>
        </p>
      </div>
      <Social />
      <Footer />
    </div>
  );
};

export default Code;