import type { EasingFunction as _EasingFunction } from './_easings';
export type EasingFunction = _EasingFunction;
export interface IEasings {
    easeLinear: EasingFunction;
    easeInQuad: EasingFunction;
    easeOutQuad: EasingFunction;
    easeInOutQuad: EasingFunction;
    easeInSine: EasingFunction;
    easeOutSine: EasingFunction;
    easeInOutSine: EasingFunction;
    easeInExpo: EasingFunction;
    easeOutExpo: EasingFunction;
    easeInOutExpo: EasingFunction;
    easeInCirc: EasingFunction;
    easeOutCirc: EasingFunction;
    easeInOutCirc: EasingFunction;
    easeInCubic: EasingFunction;
    easeOutCubic: EasingFunction;
    easeInOutCubic: EasingFunction;
    easeInQuart: EasingFunction;
    easeOutQuart: EasingFunction;
    easeInOutQuart: EasingFunction;
    easeInQuint: EasingFunction;
    easeOutQuint: EasingFunction;
    easeInOutQuint: EasingFunction;
    easeInElastic: EasingFunction;
    easeOutElastic: EasingFunction;
    easeInOutElastic: EasingFunction;
    easeInBack: EasingFunction;
}
export type EasingsKey = keyof IEasings;
export declare const Easings: IEasings;
