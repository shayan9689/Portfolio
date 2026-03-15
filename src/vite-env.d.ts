/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target:
        | Element
        | string
        | Element[]
        | string[],
      vars?: object
    );
    split: unknown;
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: object): ScrollSmoother;
    scrollTop(position: number): void;
    scrollTo(target: string, smooth?: boolean, position?: string): void;
    paused(value: boolean): void;
  }
}
