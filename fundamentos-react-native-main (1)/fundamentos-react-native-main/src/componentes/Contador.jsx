import React, {useState} from "react";
import { Text, Button, View } from "react-native";
import Estilos from "../estilos";

export default ({ inicial = 0, passo = 1 }) => {

    const [numero, setNumero] = useState(inicial);
    const [Final, setFinal] = useState('');


    const verificarCondicao = () => {
        if (numero % 2 === 0) {
          setFinal('seu número é par');
        } else {
          setFinal('Seu número é impar');
        }
      }

    return (
        <>
            <Text style={Estilos.textDois}>
                {numero}
            </Text>
            <View style={{flexDirection: "row"}}>
                <Button
                    title="Par ou Impar?"
                    onPress={verificarCondicao}
                />
                {<Text>Seu número é {Final}</Text>}
            </View>

            
        </>
        
    )

}