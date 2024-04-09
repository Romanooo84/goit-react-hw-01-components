
import { Name, Stats } from "./user.jsx";
import { Data } from "./stats.jsx"
import { Friends } from "./friends.jsx";
import { Transaction } from "./transaction.jsx";

export const App = props => (
  <div>
    <Name />
    <Stats />
    <Data />
    <Friends />
    <Transaction/>
  </div>
);