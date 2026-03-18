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

    blogButton: 'Веду свой канал в Telegram',
  },
  en: {
    description: 'I have been living with design since 2018.',
    personalInfo:
      'Hi! I’m Nikita — a Product Designer creating web services and mobile applications. I work with iOS and Android guidelines as well as build my own design systems. In my work, I combine creative thinking with technical expertise, developing products that help businesses achieve their goals while remaining intuitive and user-friendly. I have extensive experience designing interfaces for gaming projects. I am currently based in Moscow, Russia.',
    personalInfo2:
      'Music accompanies me both during work and beyond — it plays almost every day and helps me switch between tasks. The genre depends on my mood and even the complexity of the project: for lighter tasks, I might listen to Russian-language music and even sing along, while for more complex work I prefer lo-fi or calm international tracks with minimal lyrical focus to maintain concentration. Occasionally, I create beats in FL Studio and explore music theory — more as a personal hobby and a way to clear my mind. I spend a bit more time on games — it’s my way to unwind. And yes, sometimes I catch myself noticing interesting solutions and small details. One of my favorites is Euro Truck Simulator 2 — over 800 hours behind the wheel of a virtual truck, driving through peaceful landscapes with music playing, has become a form of meditation for me. I also enjoy watching TV series, especially detective and mystery stories, while biographical films strongly inspire and motivate me to keep moving forward. And of course, I can’t skip comedy series — sometimes you just need a good laugh, and as they say, laughter truly extends life.',
    blogButton: 'I run my own Telegram channel',
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
              className='w-full rounded-[20px] object-cover'
              parentClassName='aspect-square md:max-w-70 2xl:max-w-110 w-full'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-[1fr_1fr_72px] place-items-start gap-x-10 gap-y-3 max-xl:flex max-xl:flex-col max-xl:gap-5'>
          <Image
            src='/portrait2.png'
            className='aspect-square object-cover'
            parentClassName='row-span-3 object-cover overflow-hidden h-full w-full rounded-[20px] max-xl:col-span-2'
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
