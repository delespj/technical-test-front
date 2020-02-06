<template>
  <div class="ma-5">
    coucou
    <Ranking1To5 />
  </div>
</template>

<script>
import ButtonsRanking from '@/components/buttons';
import Ranking1To5 from '../components/ranking_1-to-5';

export default {
  name: 'Ranking1To5View',
  component: {
      ButtonsRanking,
      Ranking1To5
  }
}
</script>
