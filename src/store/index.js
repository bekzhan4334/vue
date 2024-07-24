import { createStore } from "vuex"
import axios from "axios"
import BookDetailPage from "@/pages/BookDetailPage.vue"

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
        
    },
    actions:{
    }
})