import Block from '@/components/Block';
import ExperienceProject from '@/components/ExperienceProject';
import { useHashSetter } from '@/hooks/useHashSetter';
import { useLocalization } from '@/hooks/useLocalization';
import { Experiences } from '@/types/Cases';
import { T } from '@/utils/defineLocalization';
import { getObjectKeys } from '@/utils/getObjectKeys';

const experienceData = {
  config: {

    project1: {
      post: 'UI/UX Designer · Product Designer',
      image: 'freelance.webp',
      startDate: '11.2019',
      endDate: 'now',
    },

    project2: {
      post: 'Product Designer',
      image: 'tage.webp',
      startDate: '11.2024',
      endDate: 'now',
    },

    project3: {
      post: 'UI/UX Designer',
      image: 'skyrimrp.webp',
      startDate: '07.2023',
      endDate: 'now',
    },

    project4: {
      post: 'Product Designer',
      image: 'riks.webp',
      startDate: '07.2024',
      endDate: '02.2025',
    },

    project5: {
      post: 'Product Designer',
      image: 'athayoga.webp',
      startDate: '07.2024',
      endDate: '10.2024',
    },

    project6: {
      post: 'Product Designer',
      image: 'volnatender.webp',
      startDate: '05.2021',
      endDate: '04.2023',
    },

    project7: {
      post: 'UI/UX Designer',
      image: 'atomrp.webp',
      startDate: '07.2024',
      endDate: '10.2024',
    },

    project8: {
      post: 'Product Designer',
      image: 'eddention.webp',
      startDate: '08.2021',
      endDate: '03.2022',
    },

    project9: {
      post: 'UI/UX Designer · Brand & Visual',
      image: 'mtaprovince.webp',
      startDate: '03.2018',
      endDate: '03.2020',
    },

  } as Experiences,
  localization: T({
    ru: {
      title: 'Опыт',
      description: 'Или для кого создавались продукты.',
      andMore: 'И другие',

      project1: {
        title: 'Фриланс',
        description:
          'Работал как независимый дизайнер над игровыми и цифровыми продуктами полного цикла — от формирования визуального направления до построения систем компонентов и разработки UI-kit. Проектировал мобильные приложения на базе Telegram MiniApp, продумывая архитектуру экранов и пользовательские сценарии. Создавал лендинги и интерактивные прототипы с последующей визуализацией и адаптацией под мобильные устройства, сопровождая проекты до финальной реализации.',
      },

      project2: {
        title: 'TAGE',
        description:
          'Проектировал интерфейсы крупной платформы для создания и управления магазинами в Telegram MiniApp, ориентированной на работу с большим объёмом данных и масштабирование под разные уровни бизнеса — от небольших продавцов до крупных селлеров и мультипродавцовых площадок. Продумал системы учета товаров, заказов и финансовых показателей, статистику активности клиентов и инструменты взаимодействия с аудиторией, включая сценарии рассылок для возврата пользователей. Клиентское MiniApp-приложение спроектировано по уровню удобства современных маркетплейсов с акцентом на быстрый и понятный процесс покупки.',
      },

      project3: {
        title: 'Skyrim Role Play',
        description:
          'Разрабатывал интерфейсы и визуальные решения для ролевого проекта на базе The Elder Scrolls V: Skyrim. Проектировал внутриигровые UI-элементы и состояния интерфейсов с учётом логики сервера и технических ограничений движка, формируя целостный визуальный стиль проекта. Дополнительно разработал сайт и игровой лаунчер, упрощающий установку и обновление клиента, что позволило выстроить удобный пользовательский путь от первого входа до взаимодействия внутри игры.',
      },
    
      project4: {
        title: 'РИКС',
        description:
          'В рамках сервиса РИКС отвечал за проектирование пользовательского пути от лендинга до получения платного отчёта по кредитной истории. Спроектировал личный кабинет с логикой запроса данных, оплаты и отображения аналитики, уделяя особое внимание прозрачности процессов и доверию к продукту. Также разработал обучающую платформу, выполнил мобильную адаптацию сервисов и собрал единый UI-kit для поддержания целостности и масштабируемости экосистемы.',
      },

      project5: {
        title: 'ATHAYOGA',
        description:
          'Принял участие в студенческом проекте совместно с компанией Lanit-Tercom, работая в команде дизайнеров над созданием веб-платформы ATHAYOGA. Участвовал в проектировании личных кабинетов для учеников и преподавателей, разрабатывал механику доступа к занятиям через систему тикетов и предлагал решения, повышающие удобство и понятность пользовательских сценариев. Проектирование велось на базе готовой дизайн-системы MUI с применением компонентного подхода и адаптацией интерфейсов под планшеты и мобильные устройства.',
      },

      project6: {
        title: 'Волна',
        description:
          'Для платформы тендерных закупок «Волна» провёл анализ конкурентов и сформировал масштабируемую структуру сервиса с акцентом на снижение будущих доработок. Спроектировал личные кабинеты, карточки компаний и тендеров, систему документооборота, чатов и финансовых операций, выстраивая понятные сценарии взаимодействия между заказчиками и специалистами. Дополнительно разработал два лендинга для разных аудиторий, собрал компонентный UI-kit и реализовал адаптацию интерфейсов под планшеты и мобильные устройства.',
      },

      project7: {
        title: 'ATOM Community',
        description:
          'Разрабатывал интерфейсы для игрового проекта на базе мультиплеера RAGE для GTA 5, охватывая весь пользовательский путь — от первого входа в игру до детальной проработки системных окон. Проектировал игровые HUD-элементы, меню, диалоговые окна и вспомогательные системы, учитывая особенности геймплея и технические ограничения платформы. Дополнительно разработал лаунчер проекта и выстроил компонентную структуру интерфейсов для обеспечения целостности и масштабируемости.',
      },    
      
      project8: {
        title: 'eDDention',
        description:
          'Совместно с сооснователем создал команду eDDention и участвовал в разработке Android-приложения walltime. На старте провёл конкурентный анализ рынка, выявив низкую представленность аналогичных решений, что подтвердило целесообразность разработки продукта. Спроектировал интерфейсы на базе собственной дизайн-системы без использования готовых библиотек, сформировав уникальный визуальный стиль и механику динамической смены обоев с возможностью создания персональных коллекций. Реализовали систему Sharewall для обмена коллекциями через QR-код, разработал кастомные анимации в Adobe After Effects с экспортом в JSON для интеграции в приложение; позже подготовил отдельный кейс с редизайном продукта. Приложение было опубликовано в Google Play и получило высокий пользовательский рейтинг.',
      },

      project9: {
        title: 'MTA Province',
        description:
          'Проект с аудиторией более 100 000 пользователей стал для меня первым крупным опытом в игровой сфере и точкой перехода от графического дизайна к созданию пользовательских интерфейсов. Я начал с разработки логотипа, затем создал сайт проекта, позже — UI для игровой части, а со временем обновил первый логотип под новую версию игры и поддерживал актуальность оформления сообщества во «ВКонтакте». Работа для большой и активной аудитории стала важным этапом профессионального роста.',
      },

    },
    en: {
      title: 'Experience',
      description: 'Or who the products were created for.',
      andMore: 'And more',

      project1: {
        title: 'Freelance',
        description:
          'Worked as an independent designer on game and digital products, delivering full-cycle solutions — from defining visual direction to building component systems and UI kits. Designed Telegram MiniApp mobile applications, focusing on screen architecture and user flows. Created landing pages and interactive prototypes, followed by visual design and responsive adaptation, supporting projects through development to final release.',
      },

      project2: {
        title: 'TAGE',
        description:
          'Designed interfaces for a large platform for creating and managing stores in Telegram MiniApp, focused on working with large amounts of data and scaling to different business levels — from small sellers to large sellers and multi-seller platforms. I developed systems for tracking goods, orders, and financial indicators, customer activity statistics, and audience engagement tools, including scenarios for sending messages to bring users back. The client MiniApp application is designed to match the convenience level of modern marketplaces, with an emphasis on a fast and intuitive purchasing process.',
      },

      project3: {
        title: 'Skyrim Role Play',
        description:
          'Developed interfaces and visual solutions for a role-playing project based on The Elder Scrolls V: Skyrim. Designed in-game UI elements and interface states, taking into account server logic and engine technical limitations, forming a cohesive visual style for the project. Additionally, developed a website and game launcher that simplifies client installation and updates, allowing for a convenient user journey from first login to in-game interaction.',
      },

      project4: {
        title: 'РИКС',
        description:
          'Within the RIKS service, I was responsible for designing the end-to-end user journey — from the landing page to purchasing a paid credit history report. Designed the user account experience, including data request flows, payment scenarios, and analytics presentation, with a strong focus on transparency and trust. Additionally created the educational platform, delivered full mobile adaptation, and built a unified UI kit to ensure consistency and scalability across the ecosystem.',
      },

      project5: {
        title: 'ATHATOGA',
        description:
          'Participated in a student project in collaboration with Lanit-Tercom, working within a design team on the development of the ATHAYOGA web platform. Contributed to the design of user accounts for both students and instructors, developed the ticket-based access mechanism, and proposed UX improvements aimed at increasing clarity and usability. The interface was built on the MUI design system using a component-driven approach, with responsive adaptation for tablet and mobile devices.',
      },

      project6: {
        title: 'Volna',
        description:
          'For the “Volna” tender platform, conducted competitor research and defined a scalable product structure aimed at minimizing future rework. Designed user accounts, company and tender pages, document management, chat, and financial workflows, creating clear interaction scenarios between clients and specialists. Additionally developed two separate landing pages for different audiences, built a component-based UI kit, and delivered responsive adaptation for tablet and mobile devices.',
      },

      project7: {
        title: 'ATOM Community',
        description:
          'Designed interfaces for GTA 5 multiplayer project built on the RAGE platform, covering the entire user journey from first launch to detailed system windows. Created in-game HUD elements, menus, dialogs, and supporting systems, taking gameplay specifics and technical constraints into account. Additionally designed the project launcher and established a component-based structure to ensure consistency and scalability.',
      }, 

      project8: {
        title: 'eDDention Team',
        description:
          'Этот проект с аудиторией более 100 000 пользователей стал для меня первым крупным опытом в игровой сфере и точкой перехода от графического дизайна к созданию пользовательских интерфейсов. Я начал с разработки логотипа, затем создал сайт проекта, позже — UI для игровой части, а со временем обновил первый логотип под новую версию игры и занимался поддержкой и актуализацией оформления сообщества во «ВКонтакте». Работа с большим и активным сообществом дала мне практический опыт взаимодействия с широкой аудиторией, стала важным этапом профессионального роста и расширила круг моих заказчиков.',
      },  

      project9: {
        title: 'MTA Province',
        description:
          'The project, with an audience of over 100,000 users, became my first major experience in the gaming industry and marked my transition from graphic design to creating user interfaces. I started with designing the logo, then developed the project’s website, later worked on the in-game UI, and eventually updated the original logo for a new version of the game while maintaining the community’s visual presence on VK. Working for a large and active audience became an important step in my professional growth.',
      },

    },
  }),
};

export default function Experience() {
  const { L } = useLocalization(experienceData.localization);

  const experienceKeys = getObjectKeys(experienceData.config);
  const { ref } = useHashSetter({ hash: 'experience' });

  return (
    <div ref={ref} id='experience' className='flex flex-col gap-[50px] max-md:gap-5'>
      <Block className='flex h-[720px] flex-col items-center justify-center gap-5 max-md:h-[370px]'>
        <h1 className='text-[80px] font-extrabold uppercase max-md:text-[40px]'>{L.title}</h1>
        <p className='text-center text-base text-white/30'>{L.description}</p>
      </Block>
      <Block className='p-0 *:last:border-0 max-md:p-0'>
        {experienceKeys.map((key) => {
          return (
            <ExperienceProject
              key={key}
              // @ts-ignore
              title={L[key].title}
              // @ts-ignore
              description={L[key].description}
              {...experienceData.config[key]}
            />
          );
        })}
        <p className='px-16 py-[50px] text-center'>{L.andMore}</p>
      </Block>
    </div>
  );
}
