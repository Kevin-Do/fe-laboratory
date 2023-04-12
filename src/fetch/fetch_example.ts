// /* eslint-disable @typescript-eslint/restrict-template-expressions */
// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// // main.ts
// import FetchAPI from './fetchAPI';

// const api = new FetchAPI('https://jsonplaceholder.typicode.com');

// await (async () => {
//   try {
//     const posts = await api.get('/posts');
//     console.log(posts);

//     const newPost = {
//       title: 'New Post',
//       body: 'This is a new post.',
//       userId: 1,
//     };

//     const createdPost = await api.post('/posts', newPost);
//     console.log(createdPost);

//     const updatedPost = { ...createdPost, title: 'Updated Post' };
//     await api.put(`/posts/${createdPost.id}`, updatedPost);

//     await api.delete(`/posts/${createdPost.id}`);
//   } catch (error) {
//     console.error(error);
//   }
// })();