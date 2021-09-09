import { createApi } from 'unsplash-js';

export const unsplash = createApi({
  accessKey: process.env.REACT_APP_UnsplashAccess,
});