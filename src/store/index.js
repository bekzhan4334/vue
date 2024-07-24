import { createStore } from "vuex"

export default createStore({
    state:{
        books: []
    },
    getters:{
        allBooks(state){
            return state.books
        },
        bookById(state){
           return function(id){
                return state.books.find(book => book.id === id)
           }
        }
    },
    mutations:{
        setBooks(state, books){
            state.books = books
        },
        addBook(state, book){
            state.books.push(book)
        },
        updateBook(state, updatedBook){
            index = state.books.findIndex(book => book.id === updatedBook.id)
            if(index !== -1) {
                state.books.splice(index, 1, updatedBook)
            }
        },
        deleteBook(state, id){
            state.books = state.books.filter(book => book.id !== id)
        }
    },
    actions:{
        async fetchBooks({commit}){
            const books = [
                { id: '2024-01-01', title: 'The Time Traveler\'s Dilemma', author: 'Dr. Emily Stanton' },
                { id: '2024-02-01', title: 'Shadows of Eternity', author: 'Michael Reed' },
                { id: '2024-03-01', title: 'The Quantum Quest', author: 'Linda Garcia' },
                { id: '2024-04-01', title: 'Whispers in the Wind', author: 'Jonathan Hale' },
                { id: '2024-05-01', title: 'The Enchanted Forest', author: 'Sarah Blake' },
                { id: '2024-06-01', title: 'Beyond the Horizon', author: 'Andrew Peterson' },
                { id: '2024-07-01', title: 'The Forgotten Kingdom', author: 'Amelia Carter' },
                { id: '2024-08-01', title: 'Secrets of the Abyss', author: 'Daniel King' },
                { id: '2024-09-01', title: 'The Celestial Symphony', author: 'Rebecca Moore' },
                { id: '2024-10-01', title: 'Echoes of the Past', author: 'David Lewis' }
            ]
            commit('setBooks', books)
        }
    }
})

// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// const store = new Vuex.Store({
//     state: {
//         books: []
//     },
//     mutations: {
//         setBooks(state, books) {
//             state.books = books;
//         },
//         addBook(state, book) {
//             state.books.push(book);
//         },
//         updateBook(state, updatedBook) {
//             const index = state.books.findIndex(book => book.id === updatedBook.id);
//             if (index !== -1) {
//                 Vue.set(state.books, index, updatedBook);
//             }
//         },
//         deleteBook(state, id) {
//             state.books = state.books.filter(book => book.id !== id);
//         }
//     },
//     actions: {
//         fetchBooks({ commit }) {
//             // Simulating data fetch from a server
//             const books = [
//                 { date: '2024-01-01', title: 'The Time Traveler\'s Dilemma', author: 'Dr. Emily Stanton' },
//                 { date: '2024-02-01', title: 'Shadows of Eternity', author: 'Michael Reed' },
//                 { date: '2024-03-01', title: 'The Quantum Quest', author: 'Linda Garcia' },
//                 { date: '2024-04-01', title: 'Whispers in the Wind', author: 'Jonathan Hale' },
//                 { date: '2024-05-01', title: 'The Enchanted Forest', author: 'Sarah Blake' },
//                 { date: '2024-06-01', title: 'Beyond the Horizon', author: 'Andrew Peterson' },
//                 { date: '2024-07-01', title: 'The Forgotten Kingdom', author: 'Amelia Carter' },
//                 { date: '2024-08-01', title: 'Secrets of the Abyss', author: 'Daniel King' },
//                 { date: '2024-09-01', title: 'The Celestial Symphony', author: 'Rebecca Moore' },
//                 { date: '2024-10-01', title: 'Echoes of the Past', author: 'David Lewis' }
//             ]
//             commit('setBooks', books);
//         }
//     }
// });

// export default store;