<template>
  <div>
      <h3>Adicionar transação</h3>
      
        <div class="form-control">
          <label for="text" id="nome">Nome</label>
          <input  v-model="value.name" autofocus type="text" id="text" placeholder="Nome da transação" />
        </div>

        <div class="form-control">
          <label for="amount" id="valor" v-text="'Valor'"> <br />
           
          </label>
          <input v-model="value.amount" type="number" id="amount" placeholder="Valor da transação" />
        </div>
        <button class="btn" @click="addClick">Adicionar</button>
  </div>
</template>

<script>
export default {
    props:[
        "value"
    ],

    methods:{
        addClick(){
            this.$emit("add-click")
        }
    }
}


</script>

<style>

</style>