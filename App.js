import React from "react";
import { View, StyleSheet } from "react-native";
import Primeiro from './componentes/Primeiro'
import PrimeiroProps from "./componentes/PrimeiroProps";
import Multi, {Comp2, Comp3} from "./componentes/Multi";
import Aleatorio from "./componentes/Aleatorio";
import MaxMin from "./componentes/MaxMin";
import Botao from "./componentes/Botao";
import Contador from "./componentes/Contador";
import ListaProduto from "./componentes/ListaProduto";
import ListaProduto2 from "./componentes/ListaProduto2";
import ListaProdutoSection from "./componentes/ListaProdutoSection";
import Formulario from "./componentes/Formulario";

export default () =>  {
    
        return (
            <View style={style.App}>
               {/* <Aleatorio min={7} max={99}/>
                <Aleatorio min={7} max={99}/>
                <Aleatorio min={7} max={99}/>
                <Multi/>
                <Comp2/>
                <Comp3/>
                <Primeiro/>
                <PrimeiroProps numero={10}/>
                <MaxMin min={100} max={75}/>
                <MaxMin min={100} max={100}/>
                <Botao/>
                <Contador inicial={100} passo={10}/>
                <Contador/>
                <ListaProduto/>
                <ListaProduto2/>
                <ListaProdutoSection/>
                */}

                <Formulario/>
            </View>
        )
    
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})