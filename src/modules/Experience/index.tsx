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
      endDate: '10.2024',
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
      startDate: '07.2024',
      endDate: '10.2024',
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
      startDate: '07.2024',
      endDate: '10.2024',
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
          'Проводил исследования, проектировал интерфейсы, сайты и мобильные приложения. Занимался их упаковкой и сопровождал на этапе разработки.',
      },

      project2: {
        title: 'TAGE',
        description:
          'Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо!',
      },

      project3: {
        title: 'Skyrim Role Play',
        description:
          'Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо!',
      },
    
      project4: {
        title: 'РИКС',
        description:
          'Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо!',
      },

      project5: {
        title: 'ATHAYOGA',
        description:
          'Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо!',
      },

      project6: {
        title: 'Волна',
        description:
          'Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо!',
      },

      project7: {
        title: 'ATOM Community',
        description:
          'Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо!',
      },    
      
      project8: {
        title: 'eDDention',
        description:
          'Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо! Текст еще не готов, но надо!',
      },

    },
    en: {
      title: 'Experience',
      description: 'Or who the products were created for.',
      andMore: 'And more',

      project1: {
        title: 'Freelance',
        description:
          'The text is not ready yet, but it is necessary! The text is not ready yet, but it is necessary! The text is not ready yet, but it is necessary! The text is not ready yet, but it is necessary!',
      },

      project2: {
        title: 'TAGE',
        description:
          'Conducted research, designed interfaces, websites, and mobile applications. Handled their packaging and accompanied them during the development phase.',
      },

      project3: {
        title: 'Skyrim Role Play',
        description:
          'Conducted research, designed interfaces, websites, and mobile applications. Handled their packaging and accompanied them during the development phase.',
      },

      project4: {
        title: 'РИКС',
        description:
          'Conducted research, designed interfaces, websites, and mobile applications. Handled their packaging and accompanied them during the development phase.',
      },

      project5: {
        title: 'ATHATOGA',
        description:
          'Conducted research, designed interfaces, websites, and mobile applications. Handled their packaging and accompanied them during the development phase.',
      },

      project6: {
        title: 'Volna',
        description:
          'Conducted research, designed interfaces, websites, and mobile applications. Handled their packaging and accompanied them during the development phase.',
      },

      project7: {
        title: 'ATOM Community',
        description:
          'Conducted research, designed interfaces, websites, and mobile applications. Handled their packaging and accompanied them during the development phase.',
      }, 

      project8: {
        title: 'eDDention Team',
        description:
          'Conducted research, designed interfaces, websites, and mobile applications. Handled their packaging and accompanied them during the development phase.',
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
