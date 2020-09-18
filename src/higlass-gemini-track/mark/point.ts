import { GeminiTrackModel } from '../../core/gemini-track-model';
import { getValueUsingChannel, Channel } from '../../core/gemini.schema';
// import { RESOLUTION } from '.';

export function drawPoint(HGC: any, trackInfo: any, tile: any, tm: GeminiTrackModel) {
    /* track spec */
    const spec = tm.spec();

    /* helper */
    const { colorToHex } = HGC.utils;

    /* data */
    const data = tm.data();

    /* track size */
    const trackHeight = trackInfo.dimensions[1];

    /* genomic scale */
    const xScale = trackInfo._xScale;

    /* row separation */
    const rowCategories = (tm.getChannelDomainArray('row') as string[]) ?? ['___SINGLE_ROW___']; // if `row` is undefined, use only one row internally
    const rowHeight = trackHeight / rowCategories.length;

    /* information for rescaling tiles */
    tile.rowScale = tm.getChannelScale('row');
    tile.spriteInfos = []; // sprites for individual rows or columns

    /* render */
    rowCategories.forEach(rowCategory => {
        // we are separately drawing each row so that y scale can be more effectively shared across tiles without rerendering from the bottom
        const rowGraphics = tile.graphics; // new HGC.libraries.PIXI.Graphics();
        const rowPosition = tm.encodedValue('row', rowCategory);

        // stroke
        rowGraphics.lineStyle(
            tm.encodedValue('strokeWidth'),
            colorToHex(tm.encodedValue('stroke')),
            1, // alpha
            1 // alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
        );

        data.filter(
            d =>
                !getValueUsingChannel(d, spec.row as Channel) ||
                (getValueUsingChannel(d, spec.row as Channel) as string) === rowCategory
        ).forEach(d => {
            const xValue = getValueUsingChannel(d, spec.x as Channel) as number;
            const x1Value = getValueUsingChannel(d, spec.x1 as Channel) as number;
            const yValue = getValueUsingChannel(d, spec.y as Channel) as string | number;
            const colorValue = getValueUsingChannel(d, spec.color as Channel) as string;
            const sizeValue = getValueUsingChannel(d, spec.size as Channel) as number;

            const x = xScale(xValue);
            const x1 = xScale(x1Value);
            const centerX = x1 ? x + (x1 - x) / 2.0 : x;

            const y = tm.encodedValue('y', yValue);
            const color = tm.encodedValue('color', colorValue);
            const size = tm.encodedValue('size', sizeValue);
            const opacity = tm.encodedValue('opacity');

            // Don't draw invisible marks
            if (size === 0 || opacity === 0) return;

            // TODO: Let users use dataTransform filter instead.
            // Don't draw zero values
            if (yValue === 0) return;

            rowGraphics.beginFill(colorToHex(color), opacity);
            rowGraphics.drawCircle(centerX, rowPosition + rowHeight - y, size);
        });

        // Because simply scaling row graphics along y axis distort the shape of points,
        // we do not convert graphics to sprites.

        // add graphics of this row
        // const texture = HGC.services.pixiRenderer.generateTexture(
        //     rowGraphics,
        //     HGC.libraries.PIXI.SCALE_MODES.NEAREST,
        //     RESOLUTION
        // );
        // const sprite = new HGC.libraries.PIXI.Sprite(texture);

        // sprite.width = xScale(tileX + tileWidth) - xScale(tileX);
        // sprite.x = xScale(tileX);
        // sprite.y = rowPosition;
        // sprite.height = rowHeight;

        // tile.spriteInfos.push({ sprite: sprite, scaleKey: rowCategory });
        // tile.graphics.addChild(sprite);
    });
}
