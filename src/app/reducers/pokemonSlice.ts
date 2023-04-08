import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../utils/api"
import { IPokemon } from "../../utils/interfaces"
import axios from "axios"

export const getPokemonList = createAsyncThunk(
    'pokemon/getPokemonList', 
    async () => {
        try {
            const response = await api.get(`/pokemon`)

            const arrayOfPokemonDetails: object[] = await Promise.all(
                response.data.results.map(async (element: IPokemon) => {
                  const test = await axios.get(element.url);
                  return test.data;
                })
            );

            return arrayOfPokemonDetails

        } catch (error: any){
            return error.message
        }
    }
)

export const getPokemonById = createAsyncThunk(
    'pokemon/getPokemonById',
    async(pokemonUrl: string) => {
        try {
            const response = await axios.get(pokemonUrl)
            return response.data;

        } catch (error: any) {
            return error.message;
        }
    }
)

interface IPokemonSlice {
    loading: boolean;
    pokemonList: null | IPokemon[];
    pokemonInfoList: null | object;
    error: null | string
}

const initialState = {
    loading: false,
    pokemonList: null,
    pokemonInfoList: null,
    error: null
} as IPokemonSlice

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder
        .addCase(getPokemonList.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getPokemonList.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.pokemonList = action.payload;
        })
        .addCase(getPokemonList.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        })


        .addCase(getPokemonById.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getPokemonById.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.pokemonInfoList = action.payload.results;
        })
        .addCase(getPokemonById.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default pokemonSlice.reducer