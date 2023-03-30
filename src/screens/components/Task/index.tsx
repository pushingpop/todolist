import { Text, TouchableOpacity, View, Image } from "react-native";

import { styles } from "./styles";
import Trash from "../../../../assets/trash.png";
import Check from "../../../../assets/check.png";
import CheckOk from "../../../../assets/checkok.png";

type Props = {
  name: string;
  onRemove: () => void;
  onCheck: () => void;
  isCheck: boolean;
};

export function Task({ name, onRemove, isCheck, onCheck }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <TouchableOpacity style={styles.button} onPress={onCheck}>
          {isCheck ? <Image source={CheckOk} /> : <Image source={Check} />}
        </TouchableOpacity>

        <Text style={[styles.name, isCheck ? styles.done : null]}>{name}</Text>

        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Image source={Trash} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
