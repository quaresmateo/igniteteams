import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@/storage/config'

export async function listGroups() {
  try {
    const groups = await AsyncStorage.getItem(GROUP_COLLECTION)
    return groups ? JSON.parse(groups) : []
  } catch (error) {
    console.error(error)
    throw error
  }
}