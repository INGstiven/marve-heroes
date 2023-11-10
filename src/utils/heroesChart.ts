/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Item as ReactDonutItem } from "react-donut-chart/dist/DonutChart";
import { DonoutChart } from "../types/chart/donout";
import { Hero, itemResult } from "../types/heroes/hero";

export const createChartData = (label: string, heroResult: itemResult) => {

    if (heroResult) {

        const donutItems: ReactDonutItem[] = [
        {
            label: "Returned", 
            value: heroResult.returned 
        },
        {
            label: "Available", 
            value: heroResult.available  
        }];

        return {
            name: label,
            data: donutItems
        } as unknown as DonoutChart
    }
}