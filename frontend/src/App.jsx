import React from "react";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">समय Bihar !</h1>
      <Button className="bg-red-800" variant="ghost">
        Click me
      </Button>
    </div>
  );
};

export default App;
