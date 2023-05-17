import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface Istore{
  pokazReclami:boolean,
  setPokazReclami: ()=>void,
  pokazReclami1:boolean,
  setPokazReclami1: ()=>void,
}

export const  useReclama = create((set) => ({
    pokazReclami: false,
    setPokazReclami: ()   =>set((state:any)=>({pokazReclami:true})),
    pokazReclami1: false,
    setPokazReclami1: ()   =>set((state:any)=>({pokazReclami1:true})) 
  }))