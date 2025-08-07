# Theatre

## 📜 Лицензия
Этот проект распространяется под лицензией **MIT**.  
Подробнее см. [LICENSE](LICENSE).

**Описание проекта**: Казанский театр юного зрителя — это современный культурный центр, предлагающий зрителям актуальные постановки и удобный сервис онлайн-бронирования. Данный проект представляет собой веб-приложение для просмотра афиш, покупки билетов и знакомства с новостями театра, а также при покупке появляется всплывающее окно с информацией о покупке. Данный проект был реализован в виде заказа на создание сайта. Мне был предоставлен дизайн сайта мне предстояло реализовать его в виде React(frontend) и Nest(api).
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/React-18%2B-blue)](https://reactjs.org)  
[![NestJS Version](https://img.shields.io/badge/NestJS-9%2B-E0234E?logo=nestjs)](https://nestjs.com)

### Функционал

- Просмотр афиш.
- Онлайн покупка билетов.
- Информация о театре.
- Список новостей.

### Технологии

- **Frontend**: React 18, TypeScript, React Router 6, React Query, Axios, Vite, SCSS, SVGR, FSD-архитектуры(Feature-Sliced Design).
  [![React](https://img.shields.io/badge/React-18-%2361DAFB?logo=react)](https://reactjs.org/)  
  [![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-%233178C6?logo=typescript)](https://www.typescriptlang.org/)  
  [![React Router](https://img.shields.io/badge/React_Router-6-%23CA4245?logo=react-router)](https://reactrouter.com/)  
  [![React Query](https://img.shields.io/badge/React_Query-5-%23FF4154?logo=react-query)](https://tanstack.com/query/latest/)  
  [![Axios](https://img.shields.io/badge/Axios-1.x-%235A29E4?logo=axios)](https://axios-http.com/)  
  [![Vite](https://img.shields.io/badge/Vite-4-%23646CFF?logo=vite)](https://vitejs.dev/)  
  [![SCSS](https://img.shields.io/badge/SCSS-1.65%2B-%23CC6699?logo=sass)](https://sass-lang.com/)  
  [![SVGR](https://img.shields.io/badge/SVGR-8-%23FF4785?logo=svg)](https://react-svgr.com/)  
  [![FSD](https://img.shields.io/badge/FSD-Architecture-%23007EC6)](https://feature-sliced.design/)
- **Backend**: NestJS, PostgresSQL, TypeORM.
   [![NestJS](https://img.shields.io/badge/NestJS-10-%23E0234E?logo=nestjs)](https://nestjs.com/)  
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-%23336791?logo=postgresql)](https://www.postgresql.org/)  
  [![TypeORM](https://img.shields.io/badge/TypeORM-0.3-%23FE0909?logo=typeorm)](https://typeorm.io/)  
- **Дизайн**: Figma.
  [![Figma](https://img.shields.io/badge/Figma-Design-%23F24E1E?logo=figma)](https://figma.com/)

### Установка

1. Клонирование репозитория:

   ```bash
   git clone https://github.com/BlackDarkes/Theatre.git

   ```

2. Запустите проект:
   
    Node.js >= 18.x
    npm >= 9.x
   ```bash
   cd api && npm install && npm start
   cd frontend && npm install && npm run dev
   ```

### Примеры кода

1. React

   ```TypeScript
    import { SchemeElement } from "../ui/SchemeElement/SchemeElement";

    interface IGenerateSchemeProps {
      scheme: number[];
      classScheme: Record<string, string>;
    }
      
    export const GenerateScheme = ({ scheme, classScheme }: IGenerateSchemeProps) => {
      return (
        <div>
          {scheme.map((count, rowIndex) => (
            <div key={`row-${rowIndex}`} className={classScheme.paymentSchemeScheme}>
              <h3 className={classScheme.paymentSchemeNumber}>{++rowIndex}</h3>
              {Array.from({ length: count }).map((_, seatIndex) => (
                <SchemeElement id={`${rowIndex}-${seatIndex}`} key={`${rowIndex}-${seatIndex}`} />
              ))}
            </div>
          ))}
        </div>
      );
    }
   ```

2. NestJS
   ```TypeScript
   import { Controller, Get, Param } from '@nestjs/common';
   import { EventsService } from './events.service';

   @Controller('events')
   export class EventsController {
     constructor(private readonly eventsService: EventsService) {}

     @Get(":title")
     getEvents(@Param("title") title: string) {
       return this.eventsService.getEvents(title);
     }
   }
   ```

### Структура проекта:
    project/  
    ├── frontend/       # React-приложение  
    ├── backend/        # NestJS-сервер  
    └── README.md  

## Изображения проекта:
1. **Desktop изображения:**
  ![Главная страница (десктоп)](images/desktopHome.png)
  *Рис. 1: Главная страница сайта в десктопной версии.* 

  ![Страница о театре (десктоп)](images/desktopAbout.png)
  *Рис. 2: Страница о театре сайта в десктопной версии.* 

  ![Страница новостей (десктоп)](images/desktopAllNews.png)
  *Рис. 3: Страница со всеми новостями сайта в десктопной версии.*

  ![Страница новости (десктоп)](images/desktopOneNews.png)
  *Рис. 4: Страница конкретной новости сайта в десктопной версии.*

  ![Страница с событием (десктоп)](images/desktopEvent.png)
  *Рис. 5: Страница с событием сайта в десктопной версии.*

  ![Страница оплаты мероприятия (десктоп)](images/desktopPayment.png)
  *Рис. 6: Страница оплаты мероприятия сайта в дестопной версии. (В данном примере выбраны дата и места для примера!!!!!!!!!!)*

2. **Mobile изображения:**
   
   ![Главная страница (мобильный)](images/mobileHome.png)

   *Рис. 7: Главная страница сайта в мобильной версии.*

   ![Страница о театре (мобильный)](images/mobileAbout.png)

   *Рис. 8: Страница о театре сайта в мобильной версии.*

   ![Страница новостей (мобильный)](images/mobileAllNews.png)

   *Рис. 9: Страница со всеми новостями сайта в мобильной версии.*

   ![Страница новости (мобильный)](images/mobileOneNews.png)

   *Рис. 10: Страница конкретной новости сайта в мобильной версии.*

   ![Страница с событием (мобильный)](images/mobileEvent.png)

   *Рис. 11: Страница с событием сайта в мобильной версии.*

   ![Страница оплаты мероприятия (мобильный)](images/mobilePayment.png)

   *Рис. 12: Страница оплаты мероприятия сайта в мобильной версии. (В данном примере выбраны дата и места для примера!!!!!!!!!!)*