import reactNotes from './assets/react-notes.jpg';
import reactPizza from './assets/react-pizza.jpg';
import reactQR from './assets/qr-code-generator.jpg';
import reactGame from './assets/react-game.jpg';
import reactChat from './assets/react-chat.jpg';
import nextBrand from './assets/next-brand.jpg';

export const socials = {
    github: 'https://github.com/krendeeel',
    telegram: 'https://telegram.me/krenik',
    email: 'mailto:romanwebdev71@gmail.com',
    telephone: 'tel:+79611512653',
    githubName: 'krendeeel',
    telegramName: '@krenik',
    emailName: 'romanwebdev71@gmail.com',
    telephoneName: '+79611512653'

}

export const about = {
    text: `Всегда был интерес к IT сфере. Уже больше года изучаю популярные технологии 
    Web-разработки при помощи книг, сайтов и видеокурсов на YouTube.
    На данный момент нахожусь в поиске работы по данной специальности.
    Обладаю должным упорством и вниманию к деталям. Для меня важно полное
    понимание процессов вплоть до каких-либо мелочей, неважно сколько бы 
    времени это не занимало. Усидчивость, обучаемость, ответственность, 
    нацеленность на результат, желание получать новые навыки и знания для развития. 
    Способен адаптироваться к изменениям, находить общий язык с коллегами, работать 
    в команде.`,
    projects: 'более 20',
    experience: 'более 1 года',
    range: 'Frontend'
}

export const experience = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Typescript', 'NextJS', 'Webpack'],
    backend: ['NodeJS', 'Express', 'MongoDB', 'NestJS', 'Git', 'Socket.IO'],
    skills: [
        ['Образование: ', 'Среднее'],
        ['Русский : ', ' Родной язык'],
        ['Английский : ', 'B1 - Pre-Intermediate'],
    ]
}

export const portfolio = [
    {
        title: 'Генератор QR-кода',
        image: reactQR,
        github: 'https://github.com/krendeeel/qrcode-generator',
        demo: 'https://qrcode-generatorbykrendeeel.herokuapp.com'
    },
    {
        title: 'Приложение заметок',
        image: reactNotes,
        github: 'https://github.com/krendeeel/react-notes',
        demo: 'https://react-notes-by-krendeeel.herokuapp.com'
    },
    {
        title: 'Крестики-нолики',
        image: reactGame,
        github: 'https://github.com/krendeeel/react-game',
        demo: 'https://react-game-by-krendeeel.herokuapp.com'
    },
    {
        title: 'Online чат',
        image: reactChat,
        github: 'https://github.com/krendeeel/chat-client',
        demo: 'https://reactappchat-client.herokuapp.com'
    },
    {
        title: 'Магазин доставки',
        image: reactPizza,
        github: 'https://github.com/krendeeel/react-pizza-front',
        demo: 'https://react-pizza-client.herokuapp.com'
    },
    {
        title: 'Полноценный интернет-магазин',
        image: nextBrand,
        github: 'https://github.com/krendeeel/nextbrand-client',
        demo: 'https://nextbrand-front.herokuapp.com'
    }
]
