import React from 'react';
import {Redirect} from '@docusaurus/router';

// The API docs are served under /api, so the site root redirects to the
// Architectury API introduction (the instance's home page).
export default function Home() {
  return <Redirect to="/api" />;
}
