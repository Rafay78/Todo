import {View, Text, StyleSheet} from 'react-native';

// type propsTYpe = {
//   title: string;
//   color?: string;
// };

//  function Home(props:propsTYpe){

//     console.log({props});

//     return <Text style={{color:props.color}}>Hello {props.title}</Text>
// }

const Header = props => {
  return (
    <View style={style.header}>
      <Text style={style.text}>Welcome, {props.name}</Text>
    </View>
  );
};

Header.defaultProps = {
  name: 'My New Page',
};

const style = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    fontSize: 23,
    textAlign: 'center',
    color: '#fff',
  },
});

// const Home = (props: propsTYpe) => {
//   return <Text style={{color: props.color}}>Hello {props.title}</Text>;
// };

export default Header;
