import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/slice/CounterSlice";
import { View, Button, Text } from "react-native";

export default function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 100 }}>{counter}</Text>

      <View style={{ marginVertical: 6 }}>
        <Button title="add" onPress={() => dispatch(increment())} />
      </View>

      <View style={{ marginVertical: 6 }}>
        <Button title="subtract" onPress={() => dispatch(decrement())} />
      </View>

      <View style={{ marginVertical: 6 }}>
        <Button title="reset" onPress={() => dispatch(reset())} />
      </View>
    </View>
  );
}
