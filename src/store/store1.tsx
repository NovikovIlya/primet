import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export const  useRecomendation = create(
    persist(
    (set)=>({
    izbranoe: false,
    setIzbranoe: ()   =>set((state:any)=>({izbranoe:true})),
    uvedomlenie: false,
    setUvedomlenie: ()   =>set((state:any)=>({uvedomlenie:true})),
    
  }),{
    name:'storageZusPrimet',
  }
))
