import { TouchableOpacity, Text, StyleSheet, Image } from "react-native"
export default ({onPress, text, customStyles, disabled, imageSrc, imageWidth, imageHeight}) => {
    return(
        <TouchableOpacity
            style={[styles.button, customStyles]}
            onPress={onPress}
            disabled={disabled}
            imageSrc={imageSrc}
            imageWidth={imageWidth}
            imageHeight={imageHeight}

        >
            {
                text ?
                <Text style={{color: "white"}}>{text}</Text>
                :
                null
            }
            {
                imageSrc ? 
                <Image source={imageSrc} style={{width: imageWidth, height: imageHeight}}/>
                :
                null
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#2196F3',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',	
    }
})