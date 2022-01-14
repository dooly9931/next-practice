import axios from 'axios';

const User = (props) => {
  return (
    <p>User No.{props.user.id}, {props.user.username}</p>
  );
};

export async function getStaticPaths() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  const users = response.data;

  const paths = users.map((user) => {
    return { params: { uid: String(user.id) } };
  });

  return { paths, fallback: 'blocking' };
};

export async function getStaticProps(path) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  const user = response.data[path.params.uid-1];

  console.log('regeneration');

  return { props: { user }, revalidate: 60 };
};

export default User;
