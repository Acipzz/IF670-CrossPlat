import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, fetchPostsCount } from './slice/counter.slice';
import { RootState, store } from './redux/store'; 
import { Provider } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);
  const status = useSelector((state: RootState) => state.counter.status);
  const error = useSelector((state: RootState) => state.counter.error);

  const handleFetchPosts = () => {
    dispatch(fetchPostsCount());
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <Text>Moses Alexander - 00000069818</Text>
      {status === "loading" && <Text>Loading...</Text>}
      {status === "failed" && <Text>{error}</Text>}
      <Text>Current count: {count}</Text>
      <Button title="Fetch Posts" onPress={handleFetchPosts} />
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
