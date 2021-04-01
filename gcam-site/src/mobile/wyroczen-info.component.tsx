import { GridList, GridListTile } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const WyroczenInfo:FunctionComponent = () => {

    const tileData = [
        {
        img: "XD",
        title: "XDD", 
        cols: 1   
        },
        {
        img: "XD2",
        title: "XDD2",
        cols: 1
        }
    ];

    return (
        <GridList cellHeight={160} className="gridList" cols={3}>
        {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            </GridListTile>
        ))}
        </GridList>
    );
}

export default WyroczenInfo;