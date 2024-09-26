import type { Race } from '@/models/Race'
import type { ClassType } from '@/models/ClassType'

interface Character {
  id: number
  name: string
  level: number
  class_id: number
  race_id: number
  profile_picture_url: string

  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  proficient_strength: boolean
  proficient_dexterity: boolean
  proficient_constitution: boolean
  proficient_intelligence: boolean
  proficient_wisdom: boolean
  proficient_charisma: boolean

  walking_speed_modifier: number
  inspiration: boolean
  current_hit_points: number
  max_hit_points: number
  temp_hit_points: number

  class: ClassType
  race: Race
}

export { Character }
