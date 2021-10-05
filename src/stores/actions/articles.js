import parse from "html-react-parser";
import constants from '~s/constants';
import * as API from '~/api';

let NAMES = constants.articles;


export const loadArticles = () => { 
  return dispatch => {
    return new Promise((res, rej) => {
      getArticles()
        .then(articles => {
          res(dispatch({
            type: NAMES.ARTICLES_LOAD,
            articles,
            status: true
          }));
        })
        .catch(e => rej(e))
    })
  };
}


async function getArticles() {
  try {
    const data = await API.getPosts();

    let articles = data.map(item => {
      const img = item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia']['0'].source_url : '/images/no_img.png';
      let content = parse(item.content.rendered);

      return {
        id: item.id,
        title: item.title.rendered,
        preview: null,
        content,
        img,
        href: item.slug,
        date: item.date_gmt,
        featured: true,
        latest: false,
        category: null,
        categoryId: item.categories[0] || null
      }
    });

    return articles;
  } catch(e) {
    throw e;
  }
}


function getArticles_() {
  return [
    {
      id: 1,
      title: 'long established 1',
      preview: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et necessitatibus consequatur error, natus adipisci harum quibusdam laudantium minima, eum esse id quod velit amet at similique, maxime voluptatem quasi dolores veniam vitae ducimus temporibus ut. Deleniti excepturi quibusdam magnam suscipit! Tempore, velit sequi ipsam nobis vitae eligendi impedit similique a iure sint perferendis aut deleniti rem ea, quis exercitationem fugiat vel asperiores debitis molestias? Iste ipsam consectetur aperiam. Fugit.',
      img: '/images/article1.jpg',
      href: 'article1',
      date: 'May 20th 2020',
      featured: true,
      latest: false,
      category: 'sport'
    },
    {
      id: 2,
      title: 'long established 2',
      preview: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      content: 'content2',
      img: '/images/article2.jpg',
      href: 'article2',
      date: 'May 20th 2020',
      featured: true,
      latest: true,
      category: 'sport'
    },
    {
      id: 3,
      title: 'long established 3',
      preview: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      content: 'content3',
      img: '/images/article3.jpg',
      href: 'article3',
      date: 'May 20th 2020',
      featured: true,
      latest: true,
      category: 'health'
    },
    {
      id: 4,
      title: 'long established 4',
      preview: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....',
      content: 'content4',
      img: '/images/article1.jpg',
      href: 'article4',
      date: 'May 20th 2020',
      featured: true,
      latest: true,
      category: 'science',
    },
  ];
}