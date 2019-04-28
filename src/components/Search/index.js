import React, { Component } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {
    render() {
        return (
            <GooglePlacesAutocomplete
                placeholder='Para onde?'
                placeholderTextColor='#333'
                onPress={() => { }}
                query={{
                    key: 'AIzaSyAdN7wkTjl6hE5ey6CxOiL433x9Dt7LCME',
                    language: 'pt'
                }}
                textInputProps={{
                    autoCapitalize: 'none',
                    autoCorrect: false
                }}
                fetchDetails
                enablePoweredByContainer={false}
            />
        );
    }
}
