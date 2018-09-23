<template>
    <v-slide-y-transition mode="out-in">
        <v-layout column justify-center>    
            <v-container fluid grid-list-lg>
                <v-layout row wrap>
                    <v-flex xs3 sm3 style="margin: 10px">
                        <v-card style="width: 350px" :key="i" v-for="(r, i) in recicladoras">
                            <figure id="container-img">
                                <img :src="'/static/'+r.foto" width="350px" height="200px"/>  
                                <figcaption>{{r.nome}}</figcaption>
                            </figure>

                            <v-list two-line>
                            <div :key="index" v-for="(t, index) in r.telefones">
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon color="indigo">phone</v-icon>
                                    </v-list-tile-action>

                                    <v-list-tile-content>
                                        <v-list-tile-title>{{t.numero}}</v-list-tile-title>
                                        <v-list-tile-sub-title>{{t.fl_fixo ? $t("catadores.telefone") : "Celular"}}</v-list-tile-sub-title>
                                    </v-list-tile-content>

                                </v-list-tile>
                                <v-divider inset></v-divider>
                            </div>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon color="indigo">email</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>{{r.email}}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-divider inset></v-divider>

                                <v-list-tile>
                                    <v-list-tile-action>
                                    <v-icon color="indigo">location_on</v-icon>
                                    </v-list-tile-action>

                                    <v-list-tile-content>
                                    <v-list-tile-title>{{r.endereco.numero}} {{r.endereco.rua}}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{r.endereco.cidade}}, {{r.endereco.estado}}</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                            <v-divider></v-divider>
                            <v-list
                            subheader
                            
                            >
                                <v-subheader>{{$t("recicladoras.materiais")}}</v-subheader>

                                <v-list-tile>
                                    <v-list-tile-content>
                                        <span class="group pa-2">
                                            <v-tooltip bottom v-for="(m, index) in r.materiais" :key="index" color="blue-grey darken-1">
                                                <img :src="'/static/icons/'+m.icone+'.png'" height="40px" slot="activator" style="float: left">
                                                <span>
                                                    <h2>Compro 1 {{$t('catadores.quilo')}} por {{$t("catadores.simbolo_moeda")}} {{m.preco_kg}}</h2>
                                                    <h3>{{$t("recicladoras.necessita")}} diariamente de {{m.qtd_diaria_kg}} {{$t('catadores.quilo')}}s de {{m.nome}}</h3>
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
    name: 'Recicladoras',
    data() {
        return {
            recicladoras: [
                {
                    nome: 'Bigplast',
                    endereco: {
                        rua: 'Avenida Monteverde',
                        numero: '22',
                        cidade: 'Lima',
                        estado: 'Lima'
                    },
                    foto: "recicladora1.jpg",
                    localizacao: {
                        latitude: 3813131,
                        longitude: 817441
                    },
                    email: 'ventas@bigplastsac.com',
                    telefones: [
                        {
                            numero: ' (511) 4941886',
                            fl_fixo: true
                        },
                        {
                            numero: '960638686',
                            fl_fixo: false
                        },
                        {
                            numero: '955157109',
                            fl_fixo: false
                        }
                    ],
                    materiais: [
                        {
                            nome: 'Plástico',
                            icone: 'bottle',
                            // Preço de compra do quilo
                            preco_kg: '30',
                            // Necessita diariamente de x quilos do material
                            qtd_diaria_kg: 100
                        }
                    ]
                }
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
  right: 100px;
  font-size: 45px;
  color: white;
  text-shadow: 0px 0px 5px black;
}
</style>
