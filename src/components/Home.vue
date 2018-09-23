<template>
  <v-container fluid>
      <v-layout row wrap class="light--text">
        <v-flex xs4>Catadores</v-flex>
        <v-flex xs4>Recicladoras</v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs4>
          <v-checkbox v-model="check_catadores"></v-checkbox>
        </v-flex>
        <v-flex xs4>
          <v-checkbox v-model="check_recicladoras"></v-checkbox>
        </v-flex>
      </v-layout>
      <v-layout column align-center>
        <div id="map"></div>
      </v-layout>
  </v-container>
</template>
<script>
export default {
    name: 'Home',
    mounted(){
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -11.008848, lng: -68.742458},
        scrollwheel: false,
        zoom: 6
      })


      this.catadores.map((c, index) => {
        let marker = new google.maps.Marker({
            position: {lat: c.localizacao.latitude, lng: c.localizacao.longitude},
            map: this.map
        })
        marker.setIcon('/static/icons/mapa/carroca.png')
        marker.setTitle(c.nome)
        c.marcador = marker
      })

      this.recicladoras.map((r, index) => {
        let marker = new google.maps.Marker({
            position: {lat: r.localizacao.latitude, lng: r.localizacao.longitude},
            map: this.map
        })
        marker.setIcon('/static/icons/mapa/recicladora.png')
        marker.setTitle(r.nome)
        r.marcador = marker
      })
    },
    data (){
        return {
          map: {},
          check_recicladoras: true,
          check_catadores: true,
          catadores: [
            {
              nome: 'Leandro',
              localizacao: {
                latitude: -11.008848,
                longitude: -68.742458
              },
              marcador: {},
              materiais: [
                  {   
                      nome: 'Plástico',
                      icone: 'bottle',
                      // Preço do kilo do material
                      preco_kg: '40',
                      // Quantidade diária do material EM kilos 
                      qtd_diaria_kg: 3
                  },
                  {
                      nome: this.$t("catadores.vidro"),
                      icone: 'vidro',
                      preco_kg: '60',
                      qtd_diaria_kg: 6
                  },
              ]
            },
            {
              nome: 'Leonardo',
              localizacao: {
                latitude: -11.008848,
                longitude: -69.742458
              },
              marcador: {},
              materiais: [
                {   
                  nome: 's',
                  icone: 'bottle',
                  // Preço do kilo do material
                  preco_kg: '40',
                  // Quantidade diária do material EM kilos 
                  qtd_diaria_kg: 3
                },
              ]
            }
          ],
          recicladoras: [
            {
              localizacao: {
                latitude: -12.008848,
                longitude: -68.742458
              },
              marcador: {},
              materiais: [

              ]
            }
          ]       
        }
    },
    watch: {
      check_recicladoras(val){
        this.recicladoras.map((r) => {
          r.marcador.setVisible(val)
        })
      },
      check_catadores(val){
        this.catadores.map((c) => {
          c.marcador.setVisible(val)
        })
      },
    }
}    
</script>
<style scoped>
#map {
  height:400px;
  width: 100%;
}
</style>
