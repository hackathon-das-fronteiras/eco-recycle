<template>
    <v-slide-y-transition mode="out-in">
        <v-layout column justify-center>
            <v-container fluid grid-list-lg>
                <v-layout row wrap>
                    <v-flex  xs4 v-for="(c,i) in catadores" :key=i>
                        <v-card>
                            <figure id="container-img">
                                <img src="/static/catador1.jpg" height="200px"/>  
                                <figcaption>{{c.nome}}</figcaption>
                            </figure>

                            <v-list two-line>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon color="indigo">phone</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>{{c.telefone.numero}}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{c.telefone.fl_fixo ? $t("catadores.telefone") : "Celular"}}</v-list-tile-sub-title>
                                </v-list-tile-content>

                            </v-list-tile>
                            <v-divider inset></v-divider>

                            <v-divider inset></v-divider>

                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon color="indigo">location_on</v-icon>
                                    </v-list-tile-action>

                                    <v-list-tile-content>
                                    <v-list-tile-title>{{c.endereco.numero}} {{$t('catadores.rua')}} {{c.endereco.rua}}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{c.endereco.cidade}}, {{c.endereco.estado}}</v-list-tile-sub-title>
                                    <v-list-tile-sub-title>A 300 metros de {{$t('catadores.distancia')}}</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                            <v-divider></v-divider>
                            <v-list
                            subheader
                            
                            >
                                <v-subheader>{{$t("catadores.materiais")}}</v-subheader>

                                <v-list-tile>
                                    <v-list-tile-content>
                                        <span class="group pa-2">
                                            <v-tooltip bottom v-for="(m, index) in c.materiais" :key="index" color="blue-grey darken-1">
                                                <img :src="'/static/icons/'+m.icone+'.png'" height="40px" slot="activator" style="float: left">
                                                <span>
                                                    <h2>{{$t("catadores.simbolo_moeda")}} {{m.preco_kg}} por {{$t('catadores.quilo')}}</h2>
                                                    <h3>{{$t("catadores.tenho")}} {{m.qtd_diaria_kg}} {{$t('catadores.quilo')}}s de {{m.nome}}</h3>
                                                </span>
                                            </v-tooltip>
                                        </span>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-layout>
    </v-slide-y-transition>
</template>
<script>
export default {
    name: 'Catadores',
    mounted(){
    },  
    data () {
        return {
            catadores: [
                {
                    nome: 'Leandro',
                    localizacao: {
                        latitude: 214141,
                        longitude: 321321
                    },
                    telefone: {
                        numero: "(68) 99924-4715",
                        fl_fixo: false
                    },
                    endereco: {
                        numero: 70,
                        rua: "Rui Lino",
                        cidade: "Brasiléia",
                        estado: "Acre"
                    },
                    foto: 'catador1.jpg',
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
                        {
                            nome: this.$t("catadores.aluminio"),
                            icone: 'aluminio',
                            preco_kg: '20',
                            qtd_diaria_kg: 20
                        }
                    ]
                },
            ]
        }
    }
}
</script>
<style scoped>
#container-img {
  display: inline-block;
  position: relative;
}

#container-img figcaption {
  position: absolute;
  top: 140px;
  right: 80px;
  font-size: 45px;
  color: white;
  text-shadow: 0px 0px 5px black;
}
</style>


