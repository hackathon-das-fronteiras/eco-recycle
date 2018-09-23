<template>
    <div>
        <v-slide-y-transition mode="out-in">
            <v-layout row justify-center>
                <v-container grid-list-md>
                    <v-layout wrap style="width: 500px">
                        <v-flex md12>
                            <v-switch
                                v-model="usuario.fl_catador"
                                label="Catador"                        
                            >
                            </v-switch>
                        </v-flex>
                        <v-flex md12>
                            <v-switch
                                v-model="usuario.fl_localizacao_atual"
                                label="Pegar localização atual"
                                hint="Para melhorar sua experiência na plataforma precisamos que você nos permita saber sua localização :)"
                                persistent-hint                        
                            >
                            </v-switch>
                        </v-flex>
                        <v-flex md12>
                            <v-text-field
                                v-model="usuario.nome"
                                label="Nome"
                            ></v-text-field>
                        </v-flex>
                        <v-flex md6>
                            <v-text-field
                                v-model="usuario.telefone"
                                label="Telefone"
                            ></v-text-field>
                        </v-flex>
                        <v-flex md5 offset-md1>
                            <v-switch
                                v-model="usuario.fl_fixo"
                                label="Fixo"
                            >
                            </v-switch>
                        </v-flex>
                        <v-flex md12>
                            <v-autocomplete
                                v-model="usuario.material"
                                :items="materiais"
                            >
                            </v-autocomplete>
                        </v-flex>
                        <v-btn
                        >
                        Salvar
                        </v-btn>
                        <v-btn>Limpar</v-btn>
                    </v-layout>
                </v-container>
            </v-layout>
        </v-slide-y-transition>
    </div>
</template>
<script>
export default {
    name: 'Cadastrar',
    data() {
        return {
            usuario: {
                fl_catador: true,
                fL_localizacao_atual: true,
                nome: null,
                telefone: null,
                fl_fixo: true,
                material: 'Plástico'
            },
            materiais: ['Plástico', 'Vidro', 'Alumínio']
        }
    }
}
</script>
<style scoped>

</style>
