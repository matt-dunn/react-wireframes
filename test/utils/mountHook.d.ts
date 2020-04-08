declare type Context<P> = {
    current: P;
    error?: Error;
};
declare type CreateHook<P> = {
    (): P;
};
declare type MountedHook<P> = {
    context: Context<P>;
};
export declare function mountHook<P>(hookCreator: CreateHook<P>): MountedHook<P>;
export {};
