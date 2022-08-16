import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import { Container } from "components/ui/Container.styled";
import data from './data/data.json';
import friends from './data/friends.json'
import transactions from './data/transactions.json'
import { Box } from "./components/ui/Box";



export const App = () => {
  return (
    <Container>
      <Profile/>
      <Box display ="flex">
        <Statistics
          title="Upload stats"
          items={data} />
        </Box>
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
      </Container>
  );
};