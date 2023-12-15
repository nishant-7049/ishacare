import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const editQuote = createAsyncThunk("EditQuote", async (quote) => {
  const { data } = await axios.put("/api/quote/update", { quote: quote });
  return data;
});

export const getQuote = createAsyncThunk("GetQuote", async () => {
  const { data } = await axios.get("/api/quote/get");
  return data;
});

export const getAllVideos = createAsyncThunk("GetVideos", async (options) => {
  const { data } = await axios.get(
    `/api/video/${options.itemsPerPage}?page=${options.page}`
  );
  return data;
});

export const createVideo = createAsyncThunk("createVideo", async (options) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const { data } = await axios.post("/api/video/new", options, config);
  return data;
});

export const deleteVideo = createAsyncThunk("deleteVideo", async (id) => {
  const { data } = await axios.delete(`/api/video/${id}`);
  return data;
});

export const editVideo = createAsyncThunk("editVideo", async (option) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const { data } = await axios.put(
    `/api/video/${option.id}`,
    { title: option.title, link: option.link },
    config
  );
  return data;
});

export const getVideoDetail = createAsyncThunk("getVideoDetail", async (id) => {
  const { data } = await axios.get(`/api/video/detail/${id}`);
  return data;
});

export const createFaq = createAsyncThunk("createFaq", async (options) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const { data } = await axios.post(
    "/api/faq/new",
    {
      question: options.question,
      answer: options.answer,
    },
    config
  );
  return data;
});

export const getFaq = createAsyncThunk("getAllFaqs", async () => {
  const { data } = await axios.get("/api/faq");
  return data;
});

export const deleteFaq = createAsyncThunk("deleteFaq", async (id) => {
  const { data } = await axios.delete(`/api/faq/${id}`);
  return data;
});

export const getFaqDetail = createAsyncThunk("getFaqDetail", async (id) => {
  const { data } = await axios.get(`/api/faq/${id}`);
  return data;
});
export const editFaq = createAsyncThunk("editFaq", async (options) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const { data } = await axios.put(
    `/api/faq/${options.id}`,
    {
      question: options.question,
      answer: options.answer,
    },
    config
  );
  return data;
});

export const createBlog = createAsyncThunk("createBlog", async (formdata) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const { data } = await axios.post("/api/blog/new", formdata, config);
  return data;
});

export const getAllBlogs = createAsyncThunk("getAllBlogs", async (options) => {
  const { data } = await axios.get(
    `/api/blog/${options.itemsPerPage}?keyword=${options.keyword}&page=${options.page}`
  );
  return data;
});

export const getBlogDetail = createAsyncThunk("getBlogDetail", async (id) => {
  const { data } = await axios.get(`/api/blog/details/${id}`);
  return data;
});

export const editBlog = createAsyncThunk("editBlog", async (options) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const { data } = await axios.put(
    `/api/blog/${options.id}`,
    options.formdata,
    config
  );
  return data;
});

export const deleteBlog = createAsyncThunk("deleteBlog", async (id) => {
  const { data } = await axios.delete(`/api/blog/${id}`);
  return data;
});

const EditFrontSlice = createSlice({
  name: "editFrontSlice",
  initialState: {
    loading: false,
    error: null,
    quote: null,
    isUpdated: false,
    videos: null,
    video: null,
    isVideoCreated: false,
    videosCount: null,
    isVideoDeleted: false,
    isVideoEdited: false,
    isFaqCreated: false,
    faqs: null,
    faq: null,
    isFaqEdited: false,
    isFaqDeleted: false,
    keyword: "",
    isKeywordUpdated: false,
    page: 1,
    isPageUpdated: false,
    blogs: null,
    blogsCount: null,
    blog: null,
    isBlogCreated: false,
    isBlogEdited: false,
    isBlogDeleted: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    resetIsUpdated: (state) => {
      state.isUpdated = false;
    },
    resetIsVideoDeleted: (state) => {
      state.isVideoDeleted = false;
    },
    resetIsVideoEdited: (state) => {
      state.isVideoEdited = false;
    },
    resetIsFaqCreated: (state) => {
      state.isFaqCreated = false;
    },
    resetIsFaqDeleted: (state) => {
      state.isFaqDeleted = false;
    },
    resetIsFaqEdited: (state) => {
      state.isFaqEdited = false;
    },
    resetFaq: (state) => {
      state.faq = null;
    },
    resetIsBlogCreated: (state) => {
      state.isBlogCreated = false;
    },
    resetBlog: (state) => {
      state.blog = null;
    },
    resetIsBlogEdited: (state) => {
      state.isBlogEdited = false;
    },
    resetIsBlogDeleted: (state) => {
      state.isBlogDeleted = false;
    },
    setPage: (state, action) => {
      state.page = action.payload;
      state.isPageUpdated = true;
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
      state.isKeywordUpdated = true;
    },
    resetIsPageUpdated: (state) => {
      state.isPageUpdated = false;
    },
    resetIsKeywordUpdated: (state) => {
      state.isKeywordUpdated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(editQuote.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editQuote.fulfilled, (state, action) => {
      state.loading = false;
      state.isUpdated = true;
      state.quote = action.payload.quote;
    });
    builder.addCase(editQuote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getQuote.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getQuote.fulfilled, (state, action) => {
      state.loading = false;
      state.quote = action.payload.quote;
    });
    builder.addCase(getQuote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAllVideos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllVideos.fulfilled, (state, action) => {
      state.loading = false;
      (state.videos = action.payload.videos),
        (state.videosCount = action.payload.videosCount);
    });
    builder.addCase(getAllVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(createVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.isVideoCreated = action.payload.success;
    });
    builder.addCase(createVideo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.isVideoDeleted = action.payload.success;
    });
    builder.addCase(deleteVideo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(editVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.isVideoEdited = action.payload.success;
    });
    builder.addCase(editVideo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getVideoDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVideoDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.video = action.payload.video;
    });
    builder.addCase(getVideoDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(createFaq.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createFaq.fulfilled, (state, action) => {
      state.loading = false;
      state.isFaqCreated = action.payload.success;
    });
    builder.addCase(createFaq.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getFaq.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFaq.fulfilled, (state, action) => {
      state.loading = false;
      state.faqs = action.payload.faqs;
    });
    builder.addCase(getFaq.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteFaq.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteFaq.fulfilled, (state, action) => {
      state.loading = false;
      state.isFaqDeleted = action.payload.success;
    });
    builder.addCase(deleteFaq.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getFaqDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFaqDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.faq = action.payload.faq;
    });
    builder.addCase(getFaqDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(editFaq.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editFaq.fulfilled, (state, action) => {
      state.loading = false;
      state.isFaqEdited = action.payload.success;
    });
    builder.addCase(editFaq.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(createBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.isBlogCreated = action.payload.success;
    });
    builder.addCase(createBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAllBlogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload.blogs;
      state.blogsCount = action.payload.blogsCount;
    });
    builder.addCase(getAllBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getBlogDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBlogDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.blog = action.payload.blog;
    });
    builder.addCase(getBlogDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(editBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.isBlogEdited = action.payload.success;
    });
    builder.addCase(editBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.isBlogDeleted = action.payload.success;
    });
    builder.addCase(deleteBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default EditFrontSlice.reducer;
export const {
  clearError,
  resetIsUpdated,
  resetIsVideoDeleted,
  resetIsVideoEdited,
  resetIsFaqCreated,
  resetIsFaqDeleted,
  resetIsFaqEdited,
  resetFaq,
  resetBlog,
  resetIsBlogEdited,
  resetIsBlogDeleted,
  setPage,
  setKeyword,
  resetIsPageUpdated,
  resetIsKeywordUpdated,
} = EditFrontSlice.actions;
