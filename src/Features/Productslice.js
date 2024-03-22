import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import One from "../assets/one.jpg"
import Two from "../assets/two.jpg"
import Three from "../assets/three.jpg"
import Four from "../assets/four.jpg"
import Five from "../assets/Five.jpg"
import Six from "../assets/Six.jpg"
import Seven from "../assets/Seven.webp"
import Eight from "../assets/Eight.jpg"
import Nine from "../assets/Nine.jpg"
import Ten from "../assets/ten.jpg"





const Productslice = createSlice({
    name: "product",
    initialState: {
        product: [{
            qty: 1,
            id: 1,
            name: '11pro',
            decripation: "If you's iPhone: sleek design, powerful performance, innovative features, iconic brand",
            price: "21000",
            Image: One

        },
        {
            qty: 1,
            id: 2,
            name: '13pro',
            decripation: "If you meant a brief description of the iPhone in 10 words Apple",
            price: "31000",
            Image: Two

        },
        {
            qty: 1,
            id: 3,
            name: '14pro',
            decripation: "s iPhone: sleek design, powerful performance, innovative features, iconic brand",
            price: "51000",
            Image: Three

        },
        {
            qty: 1,
            id: 4,
            name: 'iphone',
            decripation: "'iPhone: sleek design, powerful performance, innovative features, iconic brand",
            price: "22500",
            Image: Four

        },
        {
            qty: 1,
            id: 5,
            name: 'iphone 12',
            decripation: "If you meant a brief description of brand",
            price: "26599",
            Image: Five

        },
        {
            qty: 1,
            id: 6,
            name: 'iphone 13',
            decripation: " powerful performance, innovative features, iconic brand",
            price: "33500",
            Image: Six

        },
        {
            qty: 1,
            id: 7,
            name: '1 phone 14',
            decripation: "Apple's iPhone: sleek design, powerful performance, innovative features, iconic brand",
            price: "44000",
            Image: Seven

        },
        {
            qty: 1,
            id: 8,
            name: 'iPhone 12 ',
            decripation: " iPhone: sleek design, powerful performance, innovative features, iconic brand",
            price: "11000",
            Image: Eight

        },
        {
            qty: 1,
            id: 9,
            name: 'iphone x',
            decripation: "If you meant a brief description of the iPhone in 10 words Apple's iPhone: ",
            price: "21000",
            Image: Nine

        },
        {
            qty: 1,
            id: 10,
            name: 'IPhone X pro',
            decripation: " in 10 words Apple's iPhone: sleek design, powerful performance, innovative features, iconic brand",
            price: "40000",
            Image: Ten

        }

        ],
        cart: [],
        checkid: [],
        issucces: "false",
        iserror: "false",
        isloading: 'false',
        massage: "",
        total: 0,
        totalQty : 0
    },

    reducers: {
        addCart: (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                cart: state.checkid.includes(action.payload.id) ? state.cart : [action.payload, ...state.cart],
                totalQty: state.checkid.includes(action.payload.id) ? state.totalQty : state.totalQty + 1,
                id: state.checkid.includes(action.payload.id) ? state.checkid : [...state.checkid, action.payload.id],
                total: state.total + parseInt(action.payload.price),
            }
        },

        remove: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
                checkqty: 1,
                id: state.checkid.filter((item) => item !== action.payload.id),
            }
        },
        removeQty : (state, action) => {
            return {
                ...state,
                totalQty : state.totalQty - action.payload.qty,
                total : state.total - action.payload.qty * parseInt(action.payload.price)
            }}
            ,
        increaseQty : (state,action) =>{
            return {
                ...state,
                cart : state.cart.map((item) => item.id === action.payload.id ? {...item, qty : item.qty + 1} : item ),
                totalQty: state.totalQty + 1,
                total : state.total + parseInt(action.payload.price)
            }
        },
        decreaseQty : (state,action) =>{
            return {
                ...state,
                cart : state.cart.map((item) => item.id === action.payload.id ? {...item, qty : item.qty - 1} : item ),
                totalQty: state.totalQty - 1,
                total : state.total - parseInt(action.payload.price)

            }
        }


    },

    extraReducers: builder => {
        builder
        // .addCase(product.pending, (state) => {
        //     state.isloading = true
        //     state.massage = ""
        // })
        // .addCase(product.fulfilled, (state, action) => {
        //     state.isloading = false 
        //     state.product = action.payload
        // })
        // .addCase(product.rejected, (state, action) => {
        //     state.iserror = true
        //     state.isloading = false
        //     state.issucces = false
        //     state.massage = "Product can not Fatched"
        // })
    }


})
export const { addCart, remove,decreaseQty,increaseQty,removeQty } = Productslice.actions
export default Productslice.reducer


export const fetchdata = (data) => {
    console.log(data)
}