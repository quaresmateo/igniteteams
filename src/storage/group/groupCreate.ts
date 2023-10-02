import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@/storage/config'
import { listGroups } from './listGroups'

export async function groupCreate(groupName: string) {
  try {
    const litedGroups = await listGroups()

    const stringifiedGroups = JSON.stringify([...litedGroups, groupName])

    await AsyncStorage.setItem(GROUP_COLLECTION, stringifiedGroups)
  } catch (error) {
    console.error(error)
    throw error
  }
}
