import { Block } from '@/components/Block';
import Button from '@/components/Button';
import { IconName } from '@/components/Icon';
import Image from '@/components/Image';
import { GLOBAL_LOCALIZATION } from '@/constants/globalLocalization';
import { socLinks } from '@/constants/socLinks';
import { useHashSetter } from '@/hooks/useHashSetter';
import { useLocalization } from '@/hooks/useLocalization';
import { T } from '@/utils/defineLocalization';

export const localization = T({
  ru: {
    description: 'Живу дизайном с 2018.',
    personalInfo:
      'Привет! Я Никита — продуктовый дизайнер, создающий веб-сервисы и мобильные приложения. Работаю как с гайдлайнами iOS и Android, так и собираю собственные дизайн-системы. В работе сочетаю творческий подход и техническую экспертизу, разрабатывая продукты, которые помогают бизнесу достигать целей и остаются удобными для пользователей. Имею большой опыт разработки интерфейсов для игровых проектов. В настоящее время проживаю в Москве, Россия.',
    personalInfo2:
      'Музыка сопровождает меня и во время работы, и вне её — она звучит почти каждый день и помогает переключаться между задачами. Выбор жанра зависит от настроения и даже от сложности проекта: для лёгких задач подойдёт что-то русскоязычное, под которое можно подпевать, а для более сложных — лоуфай или спокойные зарубежные треки с минимальным акцентом на слова, чтобы сохранить концентрацию. Иногда пишу биты в FL Studio и понемногу изучаю музыкальную грамоту — скорее как личное увлечение и способ разгрузить голову. Играм уделяю чуть больше времени — это мой способ расслабиться. И да, иногда ловлю себя на том, что подмечаю интересные решения и детали. Одной из любимых остаётся Euro Truck Simulator 2 — более 800 часов за рулём виртуального тягача под музыку и спокойные пейзажи стали для меня настоящей медитацией. Также люблю смотреть сериалы — особенно детективы и истории с элементами мистики, а биографические фильмы сильно заряжают и мотивируют двигаться дальше. Ну и без комедийных сериалов никуда — всем иногда нужно просто посмеяться, ведь смех действительно продлевает жизнь.',
    
      blogButton: 'Веду свой блог в Telegram',
  },
  en: {
    description: 'I have been living with design since 2018.',
    personalInfo:
      'Hi! I am Nikita, a designer who creates intuitive web services, mobile applications, and unique gaming web interfaces. My work is a combination of creativity and technical expertise that allows me to develop products that not only solve business problems, but also give users pleasure from interaction. I currently live in Moscow, Russia.',
    personalInfo2:
      'Previously, he worked on the Volna project, a service for customer interaction with tender specialists. He conducted a market analysis, determined the uniqueness of the product, worked on more than 100 screens and created a detailed design system. Due to the large volume of work, I brought in another designer and coordinated his activities. In addition, he created game interfaces for more than 15 projects, developing the window structure, visual design and UI Kit. Thanks to the publications on Behance, my work began to attract the attention of foreign customers.',
    blogButton: 'I keep my blog on Telegram',
  },
});

const socIconMap: Record<string, IconName> = {
  Behance: 'behance',
  DProfile: 'dprofile',
  Dribbble: 'dribbble',
  Telegram: 'telegram',
  'Telegram Blog': 'telegram',
};

export default function About() {
  const { L: GL } = useLocalization(GLOBAL_LOCALIZATION);
  const { L } = useLocalization(localization);
  const { ref } = useHashSetter({ hash: 'about' });
  const telegramBlog = socLinks.find((link) => link.name === 'Telegram Blog');
  return (
    <div ref={ref} id='about' className='flex flex-col gap-[50px] max-md:gap-5'>
      <Block className='flex h-[720px] flex-col items-center justify-center gap-5 max-md:h-[370px]'>
        <h1 className='text-[80px] font-extrabold uppercase max-md:text-[40px]'>{GL.about}</h1>
        <p className='text-base text-white/30'>{L.description}</p>
      </Block>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-10'>
          <div className='flex gap-10 max-md:flex-col'>
            <Block className='flex min-h-64 w-fit items-center p-16 text-xl leading-8 text-white/70 max-md:p-8 max-md:text-base'>
              {L.personalInfo}
            </Block>
            <Image
              src='/portrait.jpg'
              className='aspect-square rounded-[20px] object-cover max-lg:w-full lg:max-h-64 lg:max-w-64'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-[1fr_1fr_72px] place-items-start gap-x-10 gap-y-3 max-xl:flex max-xl:flex-col max-xl:gap-5'>
          <Image
            src='/portrait2.png'
            className='object-cover'
            parentClassName='row-span-3 overflow-hidden h-full w-full rounded-[20px] max-xl:col-span-2'
          />
          <Block className='row-span-2 flex h-full items-center p-16 text-xl leading-8 text-white/70 max-xl:-order-1 max-md:p-8 max-md:text-base'>
            {L.personalInfo2}
          </Block>
          <div className='col-start-2 row-start-3 flex w-full items-center gap-2.5 max-xl:flex-col'>
            <Button
              className='w-full gap-4 border-0 bg-[#08C] whitespace-nowrap hover:bg-[#006DA3]'
              iconLeft='telegram'
              link={telegramBlog?.url}
              target='_blank'
              animation
            >
              {L.blogButton}
            </Button>
            <div className='flex items-center gap-2.5'>
              {socLinks
                .filter((link) => ['Behance', 'DProfile', 'Dribbble'].includes(link.name))
                .map((link) => (
                  <Button
                    key={link.name}
                    className='shrink-0'
                    iconLeft={socIconMap[link.name]}
                    link={link.url}
                    target='_blank'
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
