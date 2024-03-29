import { useI18n } from 'next-localization';
import Image from 'next/image';
import { usePlausible } from 'next-plausible';

import Container from 'components/Container';
import Section from 'components/Section';
import BlogCard from 'components/Blog/Card';
import Button from 'components/Button';

import { getBlogsInformation } from 'utils/mdx';
import type { GetStaticProps } from 'next';

import { AppContext } from '../contexts/AppContext';

const Home = ({ blogs }: HomeProps) => {
  const i18n = useI18n();
  const plausible = usePlausible();

  return (
    <AppContext blogs={blogs.map(({ slug }) => slug)}>
      <Container
        seo={i18n.t('home.seo') as unknown as { [key: string]: string }}>
        <Section id="hero" classes="bg-light-cornflower-blue-200">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="order-2 flex flex-col md:order-1 md:w-3/4 lg:w-1/2">
              <h1 className="pb-8 text-2xl md:text-3xl">
                {i18n.t('home.sections.hero.title')}
              </h1>
              <h2 className="pb-8 text-lg md:text-xl">
                {i18n.t('home.sections.hero.subtitle')}
              </h2>
              <Button
                onClick={() => plausible('QuoteRequest')}
                href={`mailto:hello@shopmakers.tech?subject=${i18n.t(
                  'cta.quote-request.mail-subject',
                )}`}
                text={i18n.t('cta.quote-request.text')}
              />
            </div>
            <div className="order-1 flex w-full justify-center pb-12 md:order-2 md:hidden md:w-1/2 md:pb-0 lg:block ">
              <Image
                src="/images/illustrations/hero.svg"
                width={584}
                height={328}
                alt={i18n.t('home.sections.hero.illustration-alt')}
              />
            </div>
          </div>
        </Section>
        <Section id={i18n.t('home.sections.why-us.id')}>
          <>
            <h2 className="pb-16 text-2xl">
              {i18n.t('home.sections.why-us.title')}
            </h2>
            <div className="grid gap-x-20 gap-y-16 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2">
              {Array.from(Array(5), (e, index) => {
                return (
                  <div key={index}>
                    <h3 className="pb-2 text-lg uppercase">
                      {i18n.t(`home.sections.why-us.cards.${index}.title`)}
                    </h3>
                    <p>
                      {i18n.t(`home.sections.why-us.cards.${index}.content`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        </Section>
        <Section
          id={i18n.t('home.sections.our-services.id')}
          classes="bg-tangerine-200">
          <>
            <h2 className="pb-16 text-2xl">
              {i18n.t('home.sections.our-services.title')}
            </h2>
            <div className="flex gap-x-14">
              <div className="hidden w-1/2 flex-col justify-center lg:flex">
                <Image
                  src="/images/illustrations/services.svg"
                  width={526}
                  height={462}
                  loading="lazy"
                  alt={i18n.t('home.sections.services.illustration-alt')}
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2 md:grid-rows-2 lg:w-1/2">
                {Array.from(Array(4), (e, index) => {
                  return (
                    <div className="rounded-2xl bg-coconut p-10" key={index}>
                      <h3 className="pb-4 text-lg font-bold uppercase">
                        {i18n.t(
                          `home.sections.our-services.cards.${index}.title`,
                        )}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: i18n.t(
                            `home.sections.our-services.cards.${index}.content`,
                          ),
                        }}></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        </Section>
        <Section id={i18n.t('home.sections.why-shopify.id')}>
          <>
            <h2 className="pb-16 text-2xl">
              {i18n.t('home.sections.why-shopify.title')}
            </h2>
            <div className="flex gap-x-36">
              <div className="lg:w-1/2">
                {Array.from(Array(3), (e, index) => {
                  return (
                    <div className="pb-12" key={index}>
                      <h3 className="pb-4 text-lg uppercase">
                        {i18n.t(
                          `home.sections.why-shopify.cards.${index}.title`,
                        )}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: i18n.t(
                            `home.sections.why-shopify.cards.${index}.content`,
                          ),
                        }}></p>
                    </div>
                  );
                })}
              </div>
              <div className="hidden w-1/2 flex-col justify-center lg:flex">
                <Image
                  src="/images/illustrations/shopify.svg"
                  width={560}
                  height={356}
                  loading="lazy"
                  alt={i18n.t('home.sections.why-shopify.illustration-alt')}
                />
              </div>
            </div>
          </>
        </Section>
        {blogs.length > 0 ? (
          <Section
            id={i18n.t('home.sections.blog.id')}
            classes="bg-light-cornflower-blue-200">
            <>
              <h2 className="pb-16 text-2xl">
                {i18n.t('home.sections.blog.title')}
              </h2>
              <div className="grid grid-cols-auto-fill-200 gap-y-16 gap-x-8 lg:grid-cols-4 lg:gap-y-0">
                {blogs.map((blog) => (
                  <BlogCard key={blog.slug} {...blog} />
                ))}
              </div>
            </>
          </Section>
        ) : (
          ''
        )}
      </Container>
    </AppContext>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const language = await import(`../../content/locales/${locale}.json`);
  const blogs = getBlogsInformation(locale);

  return {
    props: {
      lngDict: language.default,
      blogs,
    },
  };
};

export default Home;
