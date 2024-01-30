import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//******************************CONSTANTS******************************
const initialState = {
  currentStep: 1,
  currentDifficulty: "",
  currentPlayer: "",
  whoStartTheGame: "",
  currentPlayerTurn: "",
  currentGame: ["", "", "", "", "", "", "", "", ""],
  loading: false,
  error: "",
};

//******************************ACTIONS******************************

export const refreshTokenActions = createAsyncThunk(
  "auth/refresh",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "post",
        url: "refresh-token",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        return {
          access_token: "",
          refresh_token: "",
          error: "Can't refresh token",
        };
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//******************************SLICE******************************
export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setCurrentDifficulty: (state, action) => {
      state.currentDifficulty = action.payload;
      state.currentStep = 3;
    },
    setCurrentPlayer: (state, action) => {
      state.currentPlayer = action.payload;
      state.currentStep = 4;
    },
    setWhoStartTheGame: (state, action) => {
      action.payload === "ME"
        ? (state.whoStartTheGame = state.currentPlayer)
        : state.currentPlayer === "X"
        ? (state.whoStartTheGame = "O")
        : (state.whoStartTheGame = "X");

      state.currentPlayerTurn = state.whoStartTheGame;

      state.currentStep = 5;
    },
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    },
    setCurrentPlayerTurn: (state, action) => {
      state.currentPlayerTurn = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setCurrentStep,
  setCurrentDifficulty,
  setCurrentPlayer,
  setWhoStartTheGame,
  setCurrentGame,
  setCurrentPlayerTurn,
} = gameSlice.actions;

export default gameSlice.reducer;
