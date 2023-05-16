import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Sort1 from '../svgImages/Sort1.svg';
import React from 'react';


const FloatingBtn = () => {
  return (
    <TouchableOpacity>
      <View>
        <LinearGradient
          locations={[0, 1]}
          colors={['#00c96d', '#048ad7']}
          useAngle={true}
          angle={90}
          style={{borderRadius: 8}}>
          <View>
            <View
              style={{
                width: 40,
                height: 40,
               left:10,
               top:10
              }}>
                <Sort1 width={20} height={20}/>
              </View>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default FloatingBtn;
