<template>
<div>
<h2 id="controle-titu">Controle de despesas</h2>
  <div class="container">
      <transaction-balance :items="items" />
      
      <transaction-list @delete-item="deleteItem" :items="items"/>
      
      <transaction-form @add-click="setItem(transaction)" v-model="transaction"/>
    </div>
</div>
</template>

<script>
import app from '../app.js'
export default{
  mixins:[
    app
  ]
}
</script>


