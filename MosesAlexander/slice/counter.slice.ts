import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ICounter {
  count: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ICounter = {
  count: 0,
  status: "idle",
  error: null,
};

export const fetchPostsCount = createAsyncThunk(
  "counterRedux/fetchPostsCount",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      return data.length;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const counterSlice = createSlice({
  name: "counterRedux",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsCount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostsCount.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.count += action.payload;
      })
      .addCase(fetchPostsCount.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;