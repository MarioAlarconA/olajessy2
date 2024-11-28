import { Schema, model} from "mongoose";

const EsquemaJugadores = new Schema({
    name:String,
    appat:String,
    Numero:Number
})

export const ModeloJugadores = new model ("Tabla de jugadores", EsquemaJugadores)