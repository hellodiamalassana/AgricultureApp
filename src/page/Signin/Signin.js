import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    SafeAreaView,
    TextInput,
    ImageBackground,
    Dimensions,
    Platform,
    AsyncStorage,
    ViewPropTypes,
    ActivityIndicator,
} from 'react-native';
import Search from '../Search/Search'
import TopTabNavigator from '../../routes/TopTabNavigator';

import MainStyles from '../../styles/MainStyles';
import InputStyles from '../../styles/InputStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Signin extends Component {

    state = {
        Username: "",
        Password: ""
    };

    async componentDidMount() {
    }

    handleChange(e, type) {
        var value = e.nativeEvent.text;
        if (type === "Username") {
            this.setState({
                Username: value
            })
        } else {
            this.setState({
                Password: value
            })
        }
    }

    async onLogin() {
        const { Username, Password } = this.state
        var setProfile = {
            "Username": Username,
            "Password": Password
        }
        await AsyncStorage.setItem('isProfile', JSON.stringify(setProfile));
        await AsyncStorage.setItem('isLogin', 'true');
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.15, backgroundColor: 'white', paddingBottom: 15 }}>
                    <TopTabNavigator navigation={this.props.navigation} />
                </View>
                <View style={[MainStyles.Flex]}>
                    <View style={[MainStyles.mx15, MainStyles.mb15]}>
                        <Search />
                    </View>
                    <ImageBackground
                        style={[MainStyles.Flex]}
                        source={require('../../../assets/images/0.png')}
                    >
                        <View style={[MainStyles.content, { alignItems: 'center' }]}>
                            <ScrollView showsVerticalScrollIndicator={false} >
                                <Image
                                    resizeMode={'contain'}
                                    style={{ width: 200, alignSelf: 'center' }}
                                    source={require('../../../assets/logo.jpeg')}
                                />
                                <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.textAlignCenter, MainStyles.my10]}>ลงชื่อเข้าใช้งานด้วย</Text>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={[MainStyles.btnBlueWhite, { flexDirection: 'row' }]}
                                >
                                    <Icon name='user-circle' style={{ marginHorizontal: 8 }} size={16} color="white" />
                                    <Text allowFontScaling={false} style={MainStyles.btnBlueWhiteText}>
                                        ลงชื่อเข้าใช้งานด้วยบัญชี ABC Account
                                    </Text>
                                </TouchableOpacity>

                                <View style={[styles.orContent]}>
                                    <View style={[styles.orContentLine]} />
                                    <View style={{ marginLeft: 10, marginRight: 10 }}>
                                        <Text allowFontScaling={false} style={[MainStyles.textGray, MainStyles.textAlignCenter]}> หรือ </Text>
                                    </View>
                                    <View style={[styles.orContentLine]} />
                                </View>
                                <View style={[InputStyles.contentInputForm]}>
                                    <Text allowFontScaling={false} style={[InputStyles.inputFormTextLight, MainStyles.textAlignCenter]}>ชื่อบัญชี (Username)</Text>
                                    <TextInput
                                        clearButtonMode="always"
                                        allowFontScaling={false}
                                        style={InputStyles.inputForm}
                                        placeholder="Username"
                                        placeholderTextColor={"#838383"}
                                        value={this.state.Username}
                                        onChange={e => this.handleChange(e, 'Username')}
                                    />
                                </View>
                                <View style={[InputStyles.contentInputForm]}>
                                    <Text allowFontScaling={false} style={[InputStyles.inputFormTextLight, MainStyles.textAlignCenter]}>รหัสผ่าน (Password)</Text>
                                    <TextInput
                                        clearButtonMode="always"
                                        allowFontScaling={false}
                                        style={InputStyles.inputForm}
                                        placeholder="Password"
                                        placeholderTextColor={"#838383"}
                                        value={this.state.Password}
                                        onChange={e => this.handleChange(e, 'Password')}
                                        secureTextEntry={true}
                                    />
                                </View>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: 10,
                                        marginBottom: 10
                                    }}
                                >
                                    <View style={InputStyles.inputFormRaio}>
                                        <TouchableOpacity
                                            activeOpacity={1}
                                            style={[MainStyles.FlexDirectionRow]}
                                            onPress={() => this.onCheck()}
                                        >
                                            <View style={InputStyles.inputFormRaioSquare}>
                                                <View style={InputStyles.inputFormRaioSquareActive}></View>
                                            </View>
                                            <Text allowFontScaling={false} style={InputStyles.inputFormRaioSquareText}>จดจำบัญชีของฉัน</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={[MainStyles.btnGreenWhiteSmall]}
                                        onPress={() => this.onLogin()}
                                    >
                                        <Text allowFontScaling={false} style={MainStyles.btnGreenWhiteSmallText}>ลงชื่อเข้าใช้งาน</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.orContentLine]} />
                                <View style={MainStyles.m10}>
                                    <Text allowFontScaling={false} style={[MainStyles.textGreen, MainStyles.textAlignCenter]}> หากคุณยังไม่มีบัญชีผู้ใช้งาน </Text>
                                </View>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={[MainStyles.btnGreenWhite]}
                                >
                                    <Text allowFontScaling={false} style={MainStyles.btnGreenWhiteText}>คลิกที่นี่เพื่อสมัครสมาชิกใหม่</Text>
                                </TouchableOpacity>

                            </ScrollView>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    orContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    orContentLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#fff'
    }
});

