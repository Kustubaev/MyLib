import { Book } from "../Interface/Interface"

export const BooksMock: Book[] = [
  {
    id: 1,
    title: "Анна Каренина",
    content:
      "Анна Каренина» — классика мировой литературы, роман, написанный Львом Толстым, трагическая история о любви и счастье, которое разбилось о суровые стены реальности, общественных устоев и стереотипов. ",
    authorId: 1,
    genreId: 2,
    dateCreated: new Date("2022-01-15"),
    dateUpdated: new Date("2022-06-30"),
    imageUrl: "http://example.com/image.jpg",
    publishDate: "10.07.2000",
    publishHouse: "Издательство ABC",
    pageCount: 251,
    total_Copies: 1000,
    condition: "Отличное состояние",
  },
  {
    id: 2,
    title: "Преступление и наказание",
    content:
      "Преступление и наказание» — классический психологический роман, написанный Достоевским с характерным для автора глубоким философским подтекстом. Книга входит в школьную программу по литературе — однако понять произведение во всем его величии, будучи школьником, очень сложно. ",
    authorId: 1,
    genreId: 1,
    dateCreated: new Date("2022-01-15"),
    dateUpdated: new Date("2022-06-30"),
    imageUrl: "http://example.com/image.jpg",
    publishDate: "01.07.2020",
    publishHouse: "Издательство ABC",
    pageCount: 99,
    total_Copies: 1000,
    condition: "Отличное состояние",
  },
  {
    id: 3,
    title: "Тонкое искусство пофигизма. Парадоксальный способ жить счастливо",
    content:
      "Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее – будь лучше всех. Соцсети изобилуют историями на тему, как какой-то малец придумал приложение и заработал кучу денег, статьями в духе «Тысяча и один способ быть счастливым»",
    authorId: 2,
    genreId: 3,
    dateCreated: new Date("2022-01-15"),
    dateUpdated: new Date("2022-06-30"),
    imageUrl: "http://example.com/image.jpg",
    publishDate: "01.02.2022",
    publishHouse: "Издательство ABC",
    pageCount: 150,
    total_Copies: 1000,
    condition: "Отличное состояние",
  },
  {
    id: 4,
    title: "Граф Монте-Кристо",
    content:
      "Граф Монте-Кристо» — классика европейского романа 19 века. Александр Дюма взял за основу сюжета реальную историю из архивов французской полиции и сумел вплести в нее невероятные взлеты и падения, эпизоды подлого предательства и чистой любви, а также моменты отчаяния и искреннего раскаяния. ",
    authorId: 3,
    genreId: 2,
    dateCreated: new Date("2022-01-15"),
    dateUpdated: new Date("2022-06-30"),
    imageUrl: "http://example.com/image.jpg",
    publishDate: "01.09.2022",
    publishHouse: "Издательство ABC",
    pageCount: 10,
    total_Copies: 1000,
    condition: "Отличное состояние",
  },
  {
    id: 5,
    title: "Самые мудрые притчи и афоризмы Омара Хайяма",
    content:
      "Эта книга собрала в себе самые мудрые притчи и афоризмы великого поэта Востока и одного из самых известных мудрецов и философов. Высказывания Омара Хайяма, передающиеся от поколения к поколению, наполнены глубоким смыслом, яркостью образа и изяществом ритма.",
    authorId: 3,
    genreId: 3,
    dateCreated: new Date("2022-01-15"),
    dateUpdated: new Date("2022-06-30"),
    imageUrl: "http://example.com/image.jpg",
    publishDate: "11.07.2022",
    publishHouse: "Издательство ABC",
    pageCount: 350,
    total_Copies: 1000,
    condition: "Ужаное состояние",
  },
  {
    id: 6,
    title: "Вишневый сад",
    content:
      "Антон Павлович Чехов — важнейшая личность для отечественной драматургии. Его произведения до сих пор экранизируются и ставятся в театре. Пожалуй, «Вишневый сад» — один из фаворитов современных режиссеров.",
    authorId: 2,
    genreId: 1,
    dateCreated: new Date("2022-01-15"),
    dateUpdated: new Date("2022-06-30"),
    publishDate: "08.10.2022",
    imageUrl: "http://example.com/image.jpg",
    publishHouse: "Издательство ABC",
    pageCount: 300,
    total_Copies: 1000,
    condition: "Отличное состояние",
  },
]
