/// <reference path="jquery.d.ts" />

declare module Q {

    export class Flipper {

        constructor(
          id: string,
          args: any
        );

        refresh();
        toNext();
        toPrev();
        moveToPoint(point: number);
        hasNext(): boolean;
        hasPrev(): boolean;
        getPoint(): number;
        getMaxPoint(): number;
        flipElement(): JQuery;
    }

}
