// /* eslint-disable @typescript-eslint/no-unsafe-call */
// // api.test.ts
// import FetchAPI from './fetchAPI';

// // Mock the global fetch function
// global.fetch = jest.fn();

// describe('FetchAPI', () => {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const api = new FetchAPI(baseUrl);

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('GET request', async () => {
//     // Mock fetch response
//     (fetch as jest.Mock).mockResolvedValueOnce({
//       ok: true,
//       json: async () => [{ id: 1, title: 'Test Post' }],
//     });

//     const response = await api.get('/posts');

//     expect(fetch).toHaveBeenCalledTimes(1);
//     expect(fetch).toHaveBeenCalledWith(`${baseUrl}/posts`, {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     });
//     expect(response).toEqual([{ id: 1, title: 'Test Post' }]);
//   });

//   test('POST request', async () => {
//     const postData = { title: 'New Post', body: 'This is a new post.' };

//     // Mock fetch response
//     (fetch as jest.Mock).mockResolvedValueOnce({
//       ok: true,
//       json: async () => ({ id: 2, ...postData }),
//     });

//     const response = await api.post('/posts', postData);

//     expect(fetch).toHaveBeenCalledTimes(1);
//     expect(fetch).toHaveBeenCalledWith(`${baseUrl}/posts`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(postData),
//     });
//     expect(response).toEqual({ id: 2, ...postData });
//   });

//   // You can add similar test cases for PUT and DELETE requests
// });