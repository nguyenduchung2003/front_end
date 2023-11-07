"use client"

import {
     useDispatch,
     useSelector,
     // , useSelector
} from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { increment, decrement } from "@/redux/slice"
const Page = () => {
     const dispatch = useDispatch<AppDispatch>()
     const dataSelector = useSelector((state: RootState) => state.test)
     console.log(dataSelector)
     const handlerClickIncrement = () => {
          dispatch(increment(1))
     }
     const handlerClickDecrement = () => {
          dispatch(increment(-1))
     }

     return (
          <>
               <button onClick={handlerClickIncrement}>+</button>
               <input
                    type="number"
                    name=""
                    id=""
                    value={Number(dataSelector ? dataSelector : 0)}
                    readOnly
               />
               <button onClick={handlerClickDecrement}>-</button>
          </>
     )
}
export default Page
