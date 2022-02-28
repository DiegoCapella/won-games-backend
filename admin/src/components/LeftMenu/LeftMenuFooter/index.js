 import React from 'react';
 import Wrapper, { A } from './Wrapper';

 function LeftMenuFooter() {
   // eslint-disable-next-line no-undef


   return (
     <Wrapper>
       <div className="poweredBy">
         <span>
          Powered by —
         </span>
         &nbsp;
         <A key="website" href="https://github.com/DiegoCapella" target="_blank" rel="noopener noreferrer">
          Diego Capella
         </A>
       </div>
     </Wrapper>
   );
 }

 export default LeftMenuFooter;
