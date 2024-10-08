<script setup lang="ts">
import { ref } from 'vue'
import { cleanClassName } from '@/utils/utils'
import type { Character } from '@/models/Character'
import AbilitySummary from '@/components/character/sheet/quick-info/AbilitySummary.vue'
import HealthContainer from '@/components/character/sheet/quick-info/HealthContainer.vue'
import InspirationContainer from '@/components/character/sheet/quick-info/InspirationContainer.vue'
import WalkingSpeedContainer from '@/components/character/sheet/quick-info/WalkingSpeedContainer.vue'
import ProficiencyBonusContainer from '@/components/character/sheet/quick-info/ProficiencyBonusContainer.vue'

const props = defineProps<{
  character: Character
}>()

defineEmits(['toggle-inspiration', 'heal-character', 'damage-character'])

const cleanedClassName = ref<string>(cleanClassName(props.character.class.name))
</script>

<template>
  <div
    id="cs-quick-info"
    class="max-w-[990px] xl:max-w-[1200px] mx-auto flex justify-between w-full"
  >
    <section id="cs-quick-info__abilities" class="w-[463px] xl:w-[564px] flex justify-between">
      <div class="sr-only">Abilities</div>
      <AbilitySummary
        :stat="character.strength"
        title="STRENGTH"
        :className="`${cleanedClassName}`"
      />
      <AbilitySummary
        :stat="character.dexterity"
        title="DEXTERITY"
        :className="`${cleanedClassName}`"
      />
      <AbilitySummary
        :stat="character.constitution"
        title="CONSTITUTION"
        :className="`${cleanedClassName}`"
      />
      <AbilitySummary
        :stat="character.intelligence"
        title="INTELLIGENCE"
        :className="`${cleanedClassName}`"
      />
      <AbilitySummary :stat="character.wisdom" title="WISDOM" :className="`${cleanedClassName}`" />
      <AbilitySummary
        :stat="character.charisma"
        title="CHARISMA"
        :className="`${cleanedClassName}`"
      />
    </section>

    <ProficiencyBonusContainer
      :bonus="2 + Math.floor((character.level - 1) / 4)"
      :className="`${cleanedClassName}`"
    />
    <WalkingSpeedContainer
      :speed="character.race.base_walking_speed + character.walking_speed_modifier"
      :className="`${cleanedClassName}`"
    />
    <InspirationContainer
      :className="`${cleanedClassName}`"
      :inspiration="character.inspiration"
      @toggle-inspiration="$emit('toggle-inspiration')"
    />

    <HealthContainer
      :currentHitPoints="character.current_hit_points"
      :maxHitPoints="character.max_hit_points"
      :tempHitPoints="character.temp_hit_points"
      :className="cleanedClassName"
      @heal-character="(healValue) => $emit('heal-character', healValue)"
      @damage-character="(damageValue) => $emit('damage-character', damageValue)"
    />
  </div>
</template>
