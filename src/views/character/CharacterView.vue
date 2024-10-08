<script lang="ts" setup>
import {
  damageCharacter,
  healCharacter,
  toggleInspiration,
  getCharacterByID
} from '@/services/CharacterService'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Character } from '@/models/Character'
import { cleanClassName } from '@/utils/utils'
import CustomScaleLoader from '@/components/loaders/CustomScaleLoader.vue'
import CharacterSheetHeader from '@/components/character/sheet/CharacterSheetHeader.vue'
import QuickInfoContainer from '@/components/character/sheet/quick-info/QuickInfoContainer.vue'
import CombatContainer from '@/components/character/sheet/subsections/combat/CombatContainer.vue'
import SensesContainer from '@/components/character/sheet/subsections/senses/SensesContainer.vue'
import SkillsContainer from '@/components/character/sheet/subsections/skills/SkillsContainer.vue'
import PrimaryContainer from '@/components/character/sheet/subsections/primary/PrimaryContainer.vue'
import SavingThrowsContainer from '@/components/character/sheet/subsections/saving-throws/SavingThrowsContainer.vue'
import ProficiencyGroupsContainer from '@/components/character/sheet/subsections/proficiencies/ProficiencyGroupsContainer.vue'

onMounted(async () => {
  character.value = await getCharacterByID(characterID)
  cleanedClassName.value = cleanClassName(character.value.class.name)
  isLoading.value = false
})

const route = useRoute()

const characterID = route.params.id
const isLoading = ref(true)
const character = ref<Character>(null)

const cleanedClassName = ref<string>('')

const heal = async (healValue) => {
  character.value = await healCharacter(character.value.id, healValue)
}

const damage = async (damageValue) => {
  character.value = await damageCharacter(character.value.id, damageValue)
}

const inspiration = async () => {
  character.value = await toggleInspiration(character.value.id)
}
</script>

<template>
  <!-- Show loading spinner while isLoading = true -->
  <div v-if="isLoading" class="text-center py-6">
    <CustomScaleLoader />
  </div>

  <div v-else class="relative flex flex-col gap-4 min-h-screen pb-8">
    <!-- Background Image -->
    <img
      :src="`/img/character/sheet/backgrounds/${cleanedClassName}.png`"
      alt=""
      class="absolute top-0 left-0 w-full h-full -z-20 object-cover"
    />

    <CharacterSheetHeader :character="character" />

    <QuickInfoContainer
      :character="character"
      @toggle-inspiration="inspiration"
      @heal-character="heal"
      @damage-character="damage"
    />

    <!-- Subsections Container -->
    <div class="relative w-full max-w-[990px] xl:max-w-[1200px] mx-auto h-[770px]">
      <SavingThrowsContainer :className="cleanedClassName" :character="character" />

      <SensesContainer :className="cleanedClassName" :character="character" />

      <ProficiencyGroupsContainer :className="cleanedClassName" :character="character" />

      <SkillsContainer :className="cleanedClassName" :character="character" />

      <CombatContainer :className="cleanedClassName" :character="character" />

      <PrimaryContainer :className="cleanedClassName" :character="character" />
    </div>
  </div>
</template>
