import axios from 'axios';

const User = (props) => {
  return (
    <ul>
      {props.users.map((user) => {
        return <li key={user.id}>{user.username}</li>;
      })}
    </ul>
  );
};

export async function getStaticProps() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  const users = response.data;
  return { props: { users } };
};

export default User;
