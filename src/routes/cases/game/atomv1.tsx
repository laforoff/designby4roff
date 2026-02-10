import { useLocalization } from '@/hooks/useLocalization';
import AboutCase from '@/modules/AboutCase';
import AboutCaseInfo from '@/modules/AboutCaseInfo';
import CaseImage from '@/modules/CaseImage';
import CaseVideo from '@/modules/CaseVideo';
import { CaseData } from '@/types/Cases';
import { T } from '@/utils/defineLocalization';

export const Route = createFileRoute({
  component: RouteComponent,
});

export const routeData = {
  config: {
    logo: '/cases/atom/a-logo.webp',
    image: '/atom/atom-preview.webp',
    startDate: '06.2021',
    endDate: '02.2023',
    scheme: 'dark',
    background: '#0F070A',
    borderColor: '#292627',
    gap: 40,
  } as CaseData,
  localization: T({
    ru: {
      caseTitle: 'ATOM COMMUNITY Vol.1',
      caseShortDescription:
        'Игровой проект на платформе RAGE:MP, объединяющий игроков как в виртуальном мире, так и за его пределами. В нём сотни сюжетных линий, авторский автопарк и тщательно проработанные интерфейсы, создающие цельный игровой опыт.',
      caseDescription:
        'Игровой проект на платформе RAGE:MP, объединяющий игроков как в виртуальном мире, так и за его пределами. В нём сотни сюжетных линий, авторский автопарк и тщательно проработанные интерфейсы, создающие цельный игровой опыт.',
      hello: 'Участие в разработке',
      name: 'Июнь 2021 - Февраль 2023',
      info1Title: 'Роль',
      info1Description: 'UI/UX Designer',
      info2Title: 'url',
      info2Description: 'atomrp.ru',
      heading: '-',
      bigHeading: '-',
      textDescription:
        '-',
    },
    en: {
      caseTitle: 'ATOM COMMUNITY Vol.1',
      caseShortDescription: 'A game project based on the RAGE:MP platform that unites players both in the virtual world and beyond. It has hundreds of storylines, an authors fleet and carefully designed interfaces that create a seamless gaming experience.',
      caseDescription: 'A game project based on the RAGE:MP platform that unites players both in the virtual world and beyond. It has hundreds of storylines, an authors fleet and carefully designed interfaces that create a seamless gaming experience.',
      hello: 'Involvement in development',
      name: 'June 2021 - February 2023',
      info1Title: 'Role',
      info1Description: 'UI/UX Designer',
      info2Title: 'url',
      info2Description: 'atomrp.ru',
      heading: '-',
      bigHeading: "-",
      textDescription:
        '-',
    },
  }),
} as const;

function RouteComponent() {
  const { L } = useLocalization(routeData.localization);

  return (
    <>
      <AboutCase title={L.caseTitle} description={L.caseDescription} noBorder>
        <AboutCaseInfo title={L.hello} description={L.name} />
        <AboutCaseInfo title={L.info1Title} description={L.info1Description} />
        <AboutCaseInfo title={L.info2Title} description={L.info2Description} url='https://atomrp.ru' />
      </AboutCase>

      <CaseImage src='/cases/atom/review.webp' />

      <CaseImage src='/cases/atom/sb-2.webp' noBorder />

      <CaseImage src='/cases/atom/sb-3.webp' noBorder />

      <CaseImage src='/cases/atom/sb-4.webp' noBorder />

      <CaseImage src='/cases/atom/sb-5.webp' noBorder />

      <CaseImage src='/cases/atom/sb-6.webp' noBorder />

      <CaseImage src='/cases/atom/sb-7.webp' noBorder />

      <CaseImage src='/cases/atom/sb-8.webp' noBorder />

      <CaseImage src='/cases/atom/sb-9.webp' noBorder />

      <CaseImage src='/cases/atom/sb-10.webp' noBorder />

      <CaseImage src='/cases/atom/sb-11.webp' noBorder />

      <CaseImage src='/cases/atom/sb-12.webp' noBorder />

      <CaseImage src='/cases/atom/sb-13.webp' noBorder />

      <CaseImage src='/cases/atom/sb-14.webp' noBorder />

      <CaseImage src='/cases/atom/sb-15.webp' noBorder />

      <CaseImage src='/cases/atom/sb-16.webp' noBorder />

      <CaseImage src='/cases/atom/sb-17.webp' noBorder />

      <CaseVideo src='/cases/atom/fr.webm' />

      <CaseImage src='/cases/atom/sb-19.webp' noBorder />

      <CaseImage src='/cases/atom/sb-20.webp' noBorder />

      <CaseImage src='/cases/atom/sb-21.webp' noBorder />

      <CaseImage src='/cases/atom/sb-22.webp' noBorder />

      <CaseImage src='/cases/atom/sb-23.webp' noBorder />

      <CaseImage src='/cases/atom/sb-24.webp' noBorder />

      <CaseImage src='/cases/atom/sb-25.webp' noBorder />

      <CaseImage src='/cases/atom/sb-26.webp' noBorder />

      <CaseImage src='/cases/atom/sb-27.webp' noBorder />

      <CaseImage src='/cases/atom/sb-28.webp' noBorder />

      <CaseImage src='/cases/atom/sb-29.webp' noBorder />

      <CaseImage src='/cases/atom/sb-30.webp' noBorder />

      <CaseImage src='/cases/atom/sb-31.webp' noBorder />

      <CaseImage src='/cases/atom/sb-32.webp' noBorder />

      <CaseImage src='/cases/atom/sb-33.webp' noBorder />

      <CaseImage src='/cases/atom/sb-34.webp' noBorder />

      <CaseImage src='/cases/atom/sb-35.webp' noBorder />

      <CaseImage src='/cases/atom/sb-36.webp' noBorder />

      <CaseImage src='/cases/atom/sb-37.webp' noBorder />

      <CaseImage src='/cases/atom/sb-38.webp' noBorder />

      <CaseImage src='/cases/atom/sb-39.webp' noBorder />

      <CaseImage src='/cases/atom/sb-40.webp' noBorder />

      <CaseImage src='/cases/atom/sb-41.webp' noBorder />

      <CaseImage src='/cases/atom/sb-42.webp' noBorder />

      <CaseImage src='/cases/atom/sb-43.webp' noBorder />

      <CaseImage src='/cases/atom/sb-44.webp' />
    </>
  );
}
