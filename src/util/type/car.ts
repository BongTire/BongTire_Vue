import { IBrand } from "./brand"

export interface ICar{
    CarId: number
    BrandId: number
    drivingMethodPCCD: string[]
    PCCD: string[]
    name: string | null
    codeName: string | null
    powerTrain: string[]
    displacement: string[]
    image: string | null
    year: number
}

export interface ICarList{
    BrandId: number
    name: string
    brandLogo: string | null
    origin: number
    nation: string | null
    carList: ICar[]
}

export interface ICarTrim{
    CarTrimId: number | null
    CarId?: number
    BrandId?: number
    name: string
    price: number
    year: string
    image: string | null
    frontTire: string | null
    rearTire : string | null
    frontBrake: string | null
    rearBrake : string | null
    traction: string | null
    curbWeight: string | null
    combinedEfficiency: string | null
}

export interface ICarTrimList{
    CarId: number
    name: string
    brand: IBrand
    yearList: ICarTrimYearList[]
}

interface ICarTrimYearList{
    year: number
    trimList: ICarTrim[]
}