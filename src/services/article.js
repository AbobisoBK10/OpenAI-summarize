import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',

    baseQuery: fetchBaseQuery({
        //which API we want to call
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key',rapidApiKey);
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        //lawen byekhedne
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});
//lazy ya3ne on demand bas yekbos submit
export const {useLazyGetSummaryQuery} = articleApi;