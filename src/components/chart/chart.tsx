/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from "react";
import { DonoutChart } from "../../types/chart/donout";
import DonutChart from "react-donut-chart";
export const ChartComponent : React.FunctionComponent<DonoutChart> = ({
  name = "",
  data
})  => {
    const height = 350;
    const width = 350;
    return (
        <>
          <div className="donout-container">
            <p>{name}</p>
            <DonutChart data={data} legend={true} height={height} width={width}/>
          </div>
           
        </>
    )
}