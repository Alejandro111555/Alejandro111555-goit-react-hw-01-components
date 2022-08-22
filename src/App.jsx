import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import { Container } from "components/ui/Container.styled";
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import user from './data/user.json';
import { Box } from "./components/ui/Box";



export const App = () => {
  return (
    <Container>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      <Box display ="flex">
        <Statistics
          title="Upload stats"
          stats={data} />
        </Box>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </Container>
  );
};