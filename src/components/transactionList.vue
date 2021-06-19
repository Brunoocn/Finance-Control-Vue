<template>
    <div>
  <h3>Transações</h3>
        <ul id="transactions" class="transactions">
            <li :class="transaction.amount < 0 ? 'minus' : 'plus'" v-for="(transaction, index) in items" :key="index">
            {{transaction.name}}
            <span>{{transactionResolve(transaction)}} R$ {{Math.abs(transaction.amount)}}</span>
            <button class="delete-btn" @click="$emit('delete-item', transaction)">
            x
            </button>
            </li>
        </ul>
        </div>
</template>

<script>
export default {
    props:[
        "items"
    ],  
    
    methods:{
     transactionResolve(transaction){
      return transaction.amount < 0 ? '-' : '+' 
    },

    }
}
</script>

<style>

</style>