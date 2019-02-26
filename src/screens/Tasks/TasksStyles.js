import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        height: 250,
        justifyContent: 'center',
        width: '100%',
    },
    avatar: {
        borderRadius: 50,
        height: 100,
        width: 100,
    },
    toDo: {
        color: 'white',
        fontSize: 28,
    },
    date: {
        color: '#C0C0C0',
        fontSize: 16,
    },
    button: {
        alignSelf: 'flex-end',
        bottom: 10,
        position: 'absolute',
        right: 10,
    },
    btnAdd: {
        alignItems: 'center',
        backgroundColor: 'rgba(236, 23, 73, .8)', // original: #ED184A
        borderRadius: 50,
        height: 75,
        justifyContent: 'center',
        textTransform: 'uppercase',
        width: 75,
    },
});

export default styles;