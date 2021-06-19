export default {
    name: 'App',
    data(){
      return{
        transaction:{name:"", amount:""},
        items:[]
      }
    },
  
    methods:{
      cleanTransaction(){
        this.transaction.name = '';
        this.transaction.amount = '';
      },
  
      async updateList(){
        let itemsDB = await this.$getItem("transactions")
        if(itemsDB === null){
          return
        }
        this.items = itemsDB
      },
  
      async setItem(transaction){
       let itemsDB = await this.$getItem("transactions")
       if(itemsDB === null){
        itemsDB = []
       }else{
        itemsDB.push(transaction)
        await this.$setItem("transactions", itemsDB)
        await this.updateList()
        this.cleanTransaction()
       }
      },
  
      async deleteItem(transaction){
        let itemsDB = await this.$getItem("transactions")
        if(itemsDB === null){
          return
        }
        let index = itemsDB.indexOf(transaction)
        itemsDB.splice(index, 1)
        await this.$setItem("transactions", itemsDB)
        await this.updateList()
      }
  
    
    
    },
  
    async mounted(){
    await this.updateList()
    }
  }