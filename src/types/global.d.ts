// This declares that any `.jsx` module has a default export of `any` type
// declare module "*.jsx" {
//   const content: any;
//   export default content;
// }
declare module "*.jsx" {
    import { FC } from "react";
    const defaultExport: FC; // Default export
    export default defaultExport;
    export const content: { [key: string]: FC }; // Named exports
  }
  
  
  // declare module './pages/Navbar.jsx' {
  //   import { FC } from 'react';
  
  //   export const Navbar: FC;
  // }
  
  
  declare module './pages/Navbar.jsx' {
    import { FC } from 'react';
  
    // Named export
    export const Navbar: FC;
  
    // Default export
    const defaultExport: FC;
    export default defaultExport;
  }
  
  