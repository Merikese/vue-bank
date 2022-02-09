<template>

  <div class="home">

    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <input placeholder="isikukood" v-model="idCode">
      <br>
    </div>
    <br>
    <div>
      <button v-on:click="getTransactionsByIdCode"> Isiku kontoväljavõte
      </button>
    </div>
    <div>
      <br>
      <button v-on:click="getAllTransactions"> Panga kontoväljavõte (kõik)
      </button>
      <br>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      idCode: ''
    }
  },
  methods: {
    getAllTransactions: function () {

      this.$http.get("/transaction/all")
    .then(response => {
        console.log(response.data)
      })
          .catch(error => {
            console.log(error)
          })
    },
    getTransactionsByIdCode : function () {

      this.$http.get("/transaction/all/by/id/code", {
        params: {
          idCode: this.idCode
        }
          }
      )
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    }

    }
}
</script>
