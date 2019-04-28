import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import Search from '../Search';

export default class Map extends Component {

    state = {
        region: null,
    }

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134,
                    }
                })
            }, // sucesso
            () => { }, // erro
            {
                timeout: 2000, // fica 2 segundo buscando a posição do usuario, caso der erro, cai no callback  erro
                enableHighAccuracy: true, // pegar loc via gps
                maximumAge: 1000, // guarda a localização de 1 em 1 segundo
            }
        )
    }

    render() {
        const { region } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={region}
                    showsUserLocation
                    loadingEnabled
                />
                <Search />
            </View>
        )
    }
}
