import React, { Component } from 'react'
import { Text, View , TouchableHighlight} from 'react-native'

export default class ChangeBackground extends Component {
    constructor(props){
        super(props);
        this.state = {backgroundColor: 'green'}
    }
    render() {
        handlerChangeBackgroundColor = () => {
            if(this.state.backgroundColor == 'green'){
                this.setState({backgroundColor: 'red'})

            }else{
            this.setState({backgroundColor: 'green'})
                
            }
        }
        return (
            <View >
                <Text style={{backgroundColor: this.state.backgroundColor, fontSize: 20}}>This is background color</Text>
                <TouchableHighlight
                onPress={() => handlerChangeBackgroundColor()}    
                style={{paddingTop: 20, alignItems: 'center'}}> 
                    <Text style={{fontSize: 20}}>Click change Backgroundcolor</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
