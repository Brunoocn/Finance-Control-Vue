<template>
<div>
  <h4 id="saldo">Saldo atual</h4>
      
      <h1 id="balance" class="balance">R$ {{balanceComp}}</h1>

      <div class="inc-exp-container">
        <div>
          <h4>Receitas</h4>
          <p id="money-plus" class="money plus">+ R$ {{sumPositiveComp}}</p>
        </div>

        <div>
          <h4>Despesas</h4>
          <p id="money-minus" class="money minus">- R$ {{sumNegativeComp}}</p>
        </div>
      </div>
</div>
</template>

<script>
export default {
    props:[
      "items" 
    ],

    computed:{
    sumNegativeComp(){
      let negatives = this.items.filter(item => item.amount<0)
      let sum = 0;
      negatives.forEach(item => {
      let amount = Math.abs(item.amount)
      sum = sum + amount
      });
      return sum;
    },

    sumPositiveComp(){
      let positives = this.items.filter(item => item.amount>0)
      let sum = 0;
      positives.forEach(item => {
      let amount = Number.parseFloat(item.amount)
      sum = sum + amount
      });
      return sum;
    },

    balanceComp(){
      let balance = this.sumPositiveComp - this.sumNegativeComp;
      return balance;
    }
  },
}

</script>

<style>

</style>