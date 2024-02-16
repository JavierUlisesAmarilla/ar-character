/* eslint-disable @typescript-eslint/no-explicit-any */
import {ZustandSlice} from './useZustand'


export type R3fSlice = {
  selR3fObj: any,
  setSelR3fObj: (selR3fObj: any) => void,

  orbitControlsRef: any,
  setOrbitControlsRef: (orbitControlsRef: any) => void,
}


export const createR3fSlice: ZustandSlice<R3fSlice> = (set) => {
  return {
    selR3fObj: undefined,
    setSelR3fObj: (selR3fObj) => set(() => ({selR3fObj})),

    orbitControlsRef: undefined,
    setOrbitControlsRef: (orbitControlsRef) => set(() => ({orbitControlsRef})),
  }
}
