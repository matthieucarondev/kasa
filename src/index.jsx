import React from 'react'
import RoutePath from "./RoutePath";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( <React.StrictMode>

  <div className="contenu">
    <RoutePath />
  </div>

</React.StrictMode>);