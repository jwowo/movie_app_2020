import React from 'react';

function Food({ fav }) {
  return <h1>I like { fav } !!!</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="KimChi1" />
      <Food fav="KimChi2" />
      <Food fav="KimChi3" />
      <Food fav="KimChi4" />
      <Food fav="KimChi5" />
    </div>
  );
}

export default App;
