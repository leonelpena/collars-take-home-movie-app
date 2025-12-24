import { SPACES } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

/**
 * Reusable close button. Expected use in modals.
 */
export function CloseButton() {
  const handleClose = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <TouchableOpacity onPress={handleClose} style={styles.button}>
      <Ionicons name="close" size={20} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: SPACES.SM,
  },
});
