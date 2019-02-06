import _ from "lodash";

const albums = [
  {
    id: 1,
    title: 'Album1',
    description: 'Album1 설명',
    cover_img: 'https://cdn.pixabay.com/photo/2017/06/21/05/42/fog-2426131__480.jpg'
  },
  {
    id: 2,
    title: 'Album2',
    description: 'Album2 설명',
    cover_img: 'https://cdn.pixabay.com/photo/2016/12/18/14/31/lake-1915846__480.jpg'
  },
  {
    id: 3,
    title: 'Album3',
    description: 'Album3 설명',
    cover_img: 'https://cdn.pixabay.com/photo/2016/07/23/23/06/flight-1537703__480.jpg'
  }
]

const photos = [
  {
    id: 1,
    title: 'Album1',
    description: 'Album1 설명',
    photos: [
      {
        id: 1,
        title: 'Album1_사진1',
        description: '사진1 설명',
        img_url: 'https://cdn.pixabay.com/photo/2017/06/21/05/42/fog-2426131__480.jpg',
        album_id: 1
      },
      {
        id: 2,
        title: 'Album1_사진2',
        description: '사진2 설명',
        img_url: 'https://cdn.pixabay.com/photo/2018/09/27/22/04/fog-3708022__480.jpg',
        album_id: 1
      }
    ]
  },
  {
    id: 2,
    title: 'Album2',
    description: 'Album2 설명',
    photos: [
      {
        id: 3,
        title: 'Album2_사진1',
        description: 'Album2_사진1 설명',
        img_url: 'https://cdn.pixabay.com/photo/2017/04/26/18/28/new-york-city-2263343__480.jpg',
        album_id: 2
      },
      {
        id: 4,
        title: 'Album2_사진2',
        description: 'Album2_사진2 설명',
        img_url: 'https://cdn.pixabay.com/photo/2016/12/18/14/31/lake-1915846__480.jpg',
        album_id: 2
      }
    ]
  },
  {
    id: 3,
    title: 'Album3',
    description: 'Album3 설명',
    photos: [
      {
        id: 5,
        title: 'Album3_사진1',
        description: 'Album3_사진1 설명',
        img_url: 'https://cdn.pixabay.com/photo/2016/02/05/04/49/australia-1180394__480.jpg',
        album_id: 3
      },
      {
        id: 6,
        title: 'Album3_사진2',
        description: 'Album3_사진2 설명',
        img_url: 'https://cdn.pixabay.com/photo/2017/04/25/05/44/basketball-2258650__480.jpg',
        album_id: 3
      },
      {
        id: 7,
        title: 'Album3_사진3',
        description: 'Album3_사진3 설명',
        img_url: 'https://cdn.pixabay.com/photo/2019/01/05/17/05/man-3915438__480.jpg',
        album_id: 3
      },
      {
        id: 8,
        title: 'Album3_사진4',
        description: 'Album3_사진4 설명',
        img_url: 'https://cdn.pixabay.com/photo/2019/01/25/11/18/girl-3954232__480.jpg',
        album_id: 3
      }
    ]
  }
]

export default {
  albums() {
    return new Promise(res => {
      setTimeout(()=> {
        res(albums)
      }, 200);
    })
  },
  photos(albumId) {
    return new Promise(res => {
      setTimeout(()=> {
        res(_.find(photos, o => o.id == albumId))
      }, 200);
    })
  },
  photo(albumId, photoId) {
    return new Promise(res => {
      setTimeout(()=> {
        res(
          _.chain(photos)
            .find(o => o.id == albumId)
            .get('photos')
            .find(o => o.id == photoId)
            .value()
        )
      }, 200);
    })
  }
}
