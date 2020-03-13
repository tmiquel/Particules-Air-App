<template>
  <div class="stakeholders-page">
    <App-heading class="mt-5 mb-2">LES ACTEURS</App-heading>
    <b-container>
      <b-row class="row-cols-3">
        <b-col v-for="(stakeholder, stakeholderId, index) in stakeholders" :key="index">
          <stakeholder-card :stakeholder-id="stakeholderId" :stakeholder="stakeholder" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <back-to-post-link />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import StakeholderCard from '@/components/stakeholders/StakeholderCard'
import stakeholders from '~/data/stakeholders.yml'

export default {
  components: { StakeholderCard },
  data() {
    return {
      stakeholders: stakeholders
    }
  }
  // data() {
  //   return {
  //     mainProps: { width: 91, height: 91 },
  //     member: null,
  //     members: [
  //       {
  //         img: 'monique.png',
  //         name: 'Monique machin',
  //         description: 'test'
  //       },
  //       {
  //         img: 'Thibaut.png',
  //         name: 'EDF',
  //         description: 'test'
  //       },
  //       {
  //         img: 'KEVIN.jpg',
  //         name: 'Emmanuel Macron',
  //         description: 'test'
  //       },
  //       {
  //         img: 'Emilie.jpg',
  //         name: 'Valere Germain',
  //         description: 'test'
  //       },
  //       {
  //         img: 'monique.png',
  //         name: 'Elise Blanc',
  //         description: 'test'
  //       },
  //       {
  //         img: 'monique.png',
  //         name: 'Clair Méduse',
  //         description: 'test'
  //       }
  //     ]
  //   }
  // }
}
</script>
