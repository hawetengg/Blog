// // app/slice/blogSlice.ts
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// interface Blog {
//   _id: string;
//   image: string;
//   title: string;
//   description: string;
//   author: {
//     name: string;
//     image: string;
//     role: string;
//   } | null;
//   tags: string[];
//   createdAt: string;
// }

// interface BlogState {
//   blogs: Blog[];
//   status: 'idle' | 'loading' | 'failed';
// }

// const initialState: BlogState = {
//   blogs: [],
//   status: 'idle',
// };

// export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
//   const response = await axios.get('https://a2sv-backend.onrender.com/api/blogs');
//   return response.data;
// });

// const blogSlice = createSlice({
//   name: 'blogs',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchBlogs.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchBlogs.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.blogs = action.payload;
//       })
//       .addCase(fetchBlogs.rejected, (state) => {
//         state.status = 'failed';
//       });
//   },
// });

// export default blogSlice.reducer;
