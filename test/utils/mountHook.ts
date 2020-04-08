import React from "react";
import { mount } from "enzyme";

type Context<P> = {
  current: P;
  error?: Error;
}

type CreateHook<P> = {
  (): P;
}

type WrappedHookProps<P> = {
  hookCreator: CreateHook<P>;
  context: Context<P>;
}

function WrappedHook<P>({ hookCreator, context }: WrappedHookProps<P>) {
  try {
    // eslint-disable-next-line no-param-reassign
    context.current = hookCreator();
  } catch (ex) {
    // eslint-disable-next-line no-param-reassign
    context.error = ex;
  }

  return null;
}

type MountedHook<P> = {
  context: Context<P>;
}

export function mountHook<P>(hookCreator: CreateHook<P>): MountedHook<P> {
  const context = {} as Context<ReturnType<typeof hookCreator>>;

  mount(
    React.createElement(WrappedHook, {
      hookCreator,
      context,
    }),
  );

  return {
    context,
  };
}
