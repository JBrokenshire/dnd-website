import axios from 'axios'
import { useToast } from 'vue-toastification'
import type { CharacterSkillAdvantage } from '@/models/CharacterSkillsAdvantage'
import type { CharacterProficientSkills } from '@/models/CharacterProficientSkills'
import type { SkillName } from '@/models/Skill'

const toast = useToast()

export const getCharacterProficientSkills = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/proficient-skills`)
    return data as CharacterProficientSkills[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching proficient skills')
  }
}

export const getCharacterSkillsAdvantages = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/skills-advantages`)
    return data as CharacterSkillAdvantage[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching character skills advantages')
  }
}

export const toggleSkillDisadvantage = async (characterID: number, skillName: SkillName) => {
  try {
    const { data } = await axios.put(
      `/api/characters/${characterID}/skills/${skillName}/disadvantage`
    )
    return data
  } catch (error) {
    console.error(error)
    toast.error('Error updating character skills')
  }
}
