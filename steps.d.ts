/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type Homepage = typeof import('./demo.billclaytor.com/pages/Homepage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, Homepage: Homepage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
